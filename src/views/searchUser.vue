<template>
  <div class="searchUser-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">

      <div class="operation">
        <div class="inter">
          <span class="search-icon"></span>
          <input type="text" v-model.trim="keyWord" placeholder="请输入姓名" />
          <span class="del-icon" v-show="keyWord" @click="keyWord = ''"></span>
        </div>
        <div class="search-btn" @click="1">搜索</div>
      </div>

      <FScrollMore :config="FScrollMoreCfg" v-on:getMore="productDetail"></FScrollMore>

    </div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import FScrollMore from '../components/FScrollMore/FScrollMore'
  export default {
    name: 'searchUser',
    data() {
      return {
        FHeaderCfg: {
          title: '查找出行人'
        },
        FScrollMoreCfg: {
          newly: [], // 新增的数据
          page: 1, // 分页索引值（从1开始）
          limit: 10, // 请求量
          requesting: false, // 请求中
          finish: false, // 所有数据请求完毕
          distance: 200 // 下拉距离阈值
        },
        keyWord: '',
      }
    },
    created() {
      this.productDetail()
    },
    methods: {
      async productDetail() {
        let _this = this,
          $ = _this.$,
          FScrollMoreCfg = _this.FScrollMoreCfg,
          load = FScrollMoreCfg.page == 1

        let res = await $.axiosPost({
          url: _this.api.test2,
          param: {
            page: FScrollMoreCfg.page
          },
          load: load
        })

        if (!res) {
          return
        }

        // 测试数据
        let limit = FScrollMoreCfg.page < 5 ? FScrollMoreCfg.limit : 3
        
        let data = []
        for (let i = 0; i < 20; i++) {
          data.push(1)
        }

        Object.assign(_this.FScrollMoreCfg, {
          'newly': data
        })

        // _this.handleData(data)
      }
    },
    components: {
      FHeader,
      FScrollMore
    }
  }
</script>