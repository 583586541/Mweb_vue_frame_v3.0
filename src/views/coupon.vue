<template>
  <div class="coupon-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <div class="tab-navs-wrap" ref="navsWrap">
        <ul class="tab-navs">
          <li :class="{ 'checked': index == onIndex }" v-for="(item, index) in navs" v-bind:key="item.id" @click="changeNav(index)">{{ item.name }}</li>
        </ul>
      </div>
      <div class="tab-conts-wrap" ref="contsWrap">
        <div class="tab-conts" v-show="index == onIndex" v-for="(item, index) in conts" v-bind:key="item.id" ref="contWrap">
          <dl :class="{ 'invalid': list.invalid }" v-for="(list, i) in item" v-bind:key="list.id">
            <dt>
              <div class="price">
                <em>&yen;</em>{{ i + 1 }}</div>
              <div class="limit">满9999元可用</div>
            </dt>
            <dd>
              <div class="left-side">
                <div class="coupon-name">{{ navs[index].name }}优惠券</div>
                <div class="last-time">2018-08-31到期</div>
              </div>
              <div class="right-side">
                <span class="do-receive" v-if="!list.invalid">立即领取</span>
                <span class="received" v-else></span>
              </div>
            </dd>
          </dl>
        </div>
        <div class="loading" v-show="ajaxing && page > 1">
          <em class="icon"></em>正在加载</div>
        <div class="no-more" v-show="finish">没有更多了~</div>
      </div>
    </div>
    <FReturnTop :config="FReturnTopCfg"></FReturnTop>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import FReturnTop from '../components/FReturnTop/FReturnTop'
  export default {
    name: 'coupon',
    data() {
      return {
        FHeaderCfg: {
          title: '优惠券'
        },
        FReturnTopCfg: {},


        navs: [],
        conts: [],

        contsHeight: 0,
        contHeight: 0,

        finish: false, // 判断是否加载结束
        onIndex: -1, // tab切换索引值
        ajaxing: false, // 是否正在加载中
        limit: 10, // 每次加载的数据量
        page: 1, // 页码
        criticalPoint: 200, // 加载临界点 
      }
    },
    created() {
      let _this = this

      setTimeout(function () {
        _this.navs = [{
            name: '全部',
            id: 1
          },
          {
            name: '景区',
            id: 2
          },
          {
            name: '酒店',
            id: 3
          },
          {
            name: '国内游',
            id: 4
          },
          {
            name: '出境游',
            id: 5
          },
          {
            name: '周边游',
            id: 6
          },
          {
            name: '双飞游',
            id: 7
          }
        ]
        _this.navs.forEach(function () {
          _this.conts.push([])
        })
        _this.changeNav(0)
      }, 200)
    },
    mounted() {
      this.FReturnTopCfg = this.$refs.contsWrap
      this.bindScroll()
    },
    methods: {
      bindScroll() {
        let _this = this,
          contsWrap = _this.$refs.contsWrap

        contsWrap.addEventListener('scroll', function () {
          let maxScroll = _this.contHeight - _this.contsHeight
          if (maxScroll - contsWrap.scrollTop <= _this.criticalPoint && !_this.ajaxing && !_this.finish) {
            _this.productDetail()
          }
        })
      },
      async productDetail() {
        let _this = this,
          $ = _this.$,
          load = _this.page == 1

        _this.ajaxing = true

        let res = await $.axiosPost({
          url: _this.api.wechatSign,
          param: {
            url: document.location.href,
            page: _this.page
          },
          load: load
        })
        if (!res) {
          _this.ajaxing = false
          return
        }

        let limit = _this.page < 9 ? _this.limit : 5

        let data = []
        for (let i = 0; i < limit; i++) {
          data.push({
            'invalid': false
          })
        }
        _this.handleData(data)
      },
      handleData(data) {
        let _this = this,
          index = _this.onIndex

        if (data.length < _this.limit) {
          _this.finish = true
        }

        data = _this.conts[index].concat(data)
        _this.conts.splice(index, 1, data)

        _this.$nextTick(function () {
          _this.contsHeight = _this.$refs.contsWrap.clientHeight
          _this.contHeight = _this.$refs.contWrap[index].clientHeight
        })

        _this.ajaxing = false
        _this.page++
      },
      changeNav(i) {
        let _this = this

        if (i == _this.onIndex) {
          return
        }

        _this.onIndex = i
        _this.finish = false
        _this.page = 1

        _this.conts[i] = []
        _this.productDetail()
      }
    },
    components: {
      FHeader,
      FReturnTop
    }
  }
</script>