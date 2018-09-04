<template>
  <div class="selectUser-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">

      <div class="add-search">
        <div class="add" @click="$router.push('/addUser')"><em></em>新增乘客</div>
        <div class="search">
          <div class="input" @click="$router.push('/searchUser')"><em></em>请输入姓名</div>
        </div>
      </div>

      <div class="user-cont" ref="userCont">
        <ul ref="userList">
          <li class="clearfix" v-for="item in userList" v-bind:key="item.id">
            <div class="left-side">
              <div class="checkbox"></div>
              <div class="info">
                <div class="name-sex">二狗子<span>GOUZI/ER</span>女</div>
                <div class="card">身份证<span>35032191201112538</span></div>
              </div>
            </div>
            <div class="edit" @click="$router.push('/editUser')"></div>
          </li>
        </ul>
        <div class="loading" v-show="ajaxing && page > 1">
          <em class="icon"></em>正在加载
        </div>
        <div class="no-more" v-show="finish">没有更多了~</div>
      </div>

    </div>
    <footer>
      <div class="complete">完成</div>
    </footer>

    <FReturnTop :config="FReturnTopCfg"></FReturnTop>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import FReturnTop from '../components/FReturnTop/FReturnTop'
  export default {
    name: 'selectUser',
    data() {
      return {
        FHeaderCfg: {
          title: '选择出行人'
        },
        FReturnTopCfg: {},

        userContHeight: 0,
        userListHeight: 0,

        userList: [],

        finish: false, // 判断是否加载结束
        ajaxing: false, // 是否正在加载中
        limit: 10, // 每次加载的数据量
        page: 1, // 页码
        criticalPoint: 200, // 加载临界点 
      }
    },
    created() {
      this.productDetail()
    },
    mounted() {
      this.FReturnTopCfg = this.$refs.userCont
      this.userContHeight = this.$refs.userCont.clientHeight
      this.bindScroll()
    },
    methods: {
      async productDetail() {
        let _this = this,
          $ = _this.$,
          load = _this.page == 1

        _this.ajaxing = true

        let res = await $.axiosPost({
          url: _this.api.test2,
          param: {
            page: _this.page
          },
          load: load
        })
        if (!res) {
          _this.ajaxing = false
          return
        }

        let limit = _this.page < 5 ? _this.limit : 5

        let data = []
        for (let i = 0; i < limit; i++) {
          data.push(1)
        }

        _this.handleData(data)
      },
      handleData(data) {
        let _this = this

        if (data.length < _this.limit) {
          _this.finish = true
        }

        _this.userList = _this.userList.concat(data)

        _this.$nextTick(function () {
          _this.userListHeight = _this.$refs.userList.clientHeight
        })

        _this.ajaxing = false
        _this.page++
      },
      bindScroll() {
        let _this = this,
          userCont = _this.$refs.userCont

        userCont.addEventListener('scroll', function () {

          let maxScroll = _this.userListHeight - _this.userContHeight

          if (maxScroll - userCont.scrollTop <= _this.criticalPoint && !_this.ajaxing && !_this.finish) {
            _this.productDetail()
          }
        })
      },
    },
    components: {
      FHeader,
      FReturnTop
    }
  }
</script>