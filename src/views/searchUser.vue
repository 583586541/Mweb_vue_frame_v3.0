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
        <div class="search-btn" @click="doSearch">搜索</div>
      </div>

      <FScrollMore :config="FScrollMoreCfg" v-on:getMore="productDetail" v-on:res="1"></FScrollMore>

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
          requesting: false, // 请求中
          finish: false, // 所有数据请求完毕
          distance: 200, // 下拉距离阈值
          limit: 10, // 请求量
        },
        keyWord: '',
        keyWordCache: '',
      }
    },
    methods: {
      // 查找
      doSearch() {
        let _this = this

        if (_this.FScrollMoreCfg.requesting) {
          _this.$.sToast('加载中...', 'warn')
          return
        }
        
        if (!_this.keyWord) {
          _this.$.sToast('请输入关键字')
          return
        } else {
          _this.keyWordCache = _this.keyWord
        }

        Object.assign(_this.FScrollMoreCfg, {
          'page': 1,
          'requesting': false,
          'finish': false
        })

        _this.productDetail()
      },
      // 加载列表
      async productDetail() {
        let _this = this,
          $ = _this.$,
          page = _this.FScrollMoreCfg.page,
          load = page == 1 ? true : false

        _this.$set(_this.FScrollMoreCfg, 'requesting', true)

        let res = await $.axiosPost({
          url: _this.api.test2,
          param: {
            page: page
          },
          load: load
        })

        if (!res) {
          _this.$set(_this.FScrollMoreCfg, 'requesting', false)
          return
        }



        // 测试数据
        let limit = page < 5 ? 10 : 3
        let data = []
        for (let i = 0; i < limit; i++) {
          data.push(1)
        }

        if(data.length < _this.FScrollMoreCfg.limit) {
          _this.$set(_this.FScrollMoreCfg, 'finish', true)
        }



        Object.assign(_this.FScrollMoreCfg, {
          'page': ++page,
          'newly': data,
          'requesting': false
        })

      }
    },
    components: {
      FHeader,
      FScrollMore
    }
  }
</script>