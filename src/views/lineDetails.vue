<!-- http://192.168.1.82:8888/#/lineDetails?productCode=cp94417232 -->
<template>
  <div class="lineDetails-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody" v-show="!initAjax">
      <div class="banner">
        <swiper class="FSwiper" :options="swiperOption" ref="swiper">
          <swiper-slide v-for="slide in swiperSlides" v-bind:key="slide.id">
            <img :src="api.OSSPATH + slide.imgUrl" :alt="slide.imgName">
          </swiper-slide>
        </swiper>
        <div class="des">
          <div class="left-side">
            <span class="departure">{{ startCity }}</span>
            <span class="supplier">{{ supplierName }}</span>
          </div>
          <div class="right-side number">编号：{{ productCode }}</div>
        </div>
        <div class="swiper-index" @click="slideClicked">{{ swiperIndex + 1 }} / {{ swiperSlides.length }}
          <em class="icon"></em>
        </div>
      </div>
      <div class="synopsis">
        <h2>{{ sellerProductName }}</h2>
        <div class="price">
          <em>&yen;</em>{{ sellPrice / 100 }}<strong>起/人</strong>
        </div>
        <ul class="tips clearfix" v-if="!$.isEmptyArr(productLable)">
          <li v-for="item in productLable" v-bind:key="item.id">{{ item }}</li>
        </ul>
      </div>
      <div class="discount" v-if="false">
        <div class="ticket cell">
          <div class="key">领券</div>
          <ul class="val clearfix">
            <li>
              <div class="rebate">&yen;200</div>
              <div class="condition">满50000元可用</div>
            </li>
            <li>
              <div class="rebate">&yen;200</div>
              <div class="condition">满50000元可用</div>
            </li>
            <li>
              <div class="rebate">&yen;200</div>
              <div class="condition">满50000元可用</div>
            </li>
          </ul>
          <div class="more" @click="$router.push('/coupon')">更多
            <em class="icon"></em>
          </div>
        </div>
        <div class="activity cell" v-show="!$.isEmptyArr(activityCfg.items)">
          <div class="key">优惠</div>
          <div class="val clearfix">
            <em class="state">已选</em>满2000元，立减100元</div>
          <div class="more" @click="activityCfg.state = true">更多
            <em class="icon"></em>
          </div>
        </div>
        <!-- <ul class="tips clearfix">
          <li>
            <em class="icon"></em>特色标签
          </li>
          <li>
            <em class="icon"></em>特色标签
          </li>
        </ul> -->
      </div>
      <div class="evaluate" v-if="false">
        <div class="fraction">
          <div class="score">4.9
            <strong>/5</strong>
          </div>
          <ul class="clearfix">
            <li>
              <div class="key">导游讲解</div>
              <div class="val">
                <FProportion :config=".8"></FProportion>
                <span>4</span>
              </div>
            </li>
            <li>
              <div class="key">行程安排</div>
              <div class="val">
                <FProportion :config="0.8"></FProportion>
                <span>4</span>
              </div>
            </li>
            <li>
              <div class="key">描述相符</div>
              <div class="val">
                <FProportion :config="0.98"></FProportion>
                <span>4.9</span>
              </div>
            </li>
            <li>
              <div class="key">好评率</div>
              <div class="val">
                <FProportion :config="0.6"></FProportion>
                <span>60%</span>
              </div>
            </li>
          </ul>
          <div class="comment">
            <dl>
              <dt>
                <img src="../assets/images/default_header.jpg" alt="">
              </dt>
              <dd>七匹狼</dd>
            </dl>
            <p>他在这里评论了一大堆内容，具体是啥也说不清楚，就是说这个产品怎么怎么好玩，玩的怎么怎么开心，导就是说这个产品怎么怎么好玩就是说这个产品怎么怎么好玩就是说这个产品怎么怎么好玩</p>
            <div class="more-comment">
              <router-link to="/comment">查看全部点评
                <em class="icon"></em>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="doubt" v-if="false">
        <div class="column-name">大家都在问</div>
        <ul>
          <li>
            <em class="icon">问</em>
            <p>这里反正就这么点位置，显示不完的这里反正就这么点位置，显示不完的</p>
            <span class="number">200个回答</span>
          </li>
          <li>
            <em class="icon">问</em>
            <p>这里反正就这么点位置，显示不完的这里反正就这么点位置，显示不完的</p>
            <span class="number">200个回答</span>
          </li>
        </ul>
        <div class="more-doubt">
          <router-link to="/doubt">查看全部提问
            <em class="icon"></em>
          </router-link>
        </div>
      </div>
      <div class="schedule">
        <div class="place">
          <span class="area"><em class="icon"></em>{{ startCity }}出发</span>
          <span class="more" @click="moreDeparture">更多出发地<em class="icon"></em></span>
        </div>
        <div class="schedule-wrap">
          <div class="list">
            <ul class="clearfix">
              <li v-for="item in productPriceStockVoList.slice(0, 7)" v-bind:key="item.id">
                <div class="day">{{ item.state }} {{ item.week }}</div>
                <div class="price">&yen;{{ item.aPrice }}</div>
              </li>
            </ul>
          </div>
          <div class="more-schedule" @click="jumpSchedule">
            <span>更多班期</span>
          </div>
        </div>

      </div>
      <ul :class="['tab-navs', { 'suspension': suspension }]" ref="tabNavs">
        <li :class="{ 'on': index == tabNavsActiveIndex }" v-for="(list, index) in tabNavsList" v-bind:key="list.id"
          @click="jumpToAnchor(index)">{{ list }}</li>
      </ul>
      <div class="tab-navs-placehoder" v-if="suspension"></div>
      <div class="pdt-feature" ref="pdtFeature">
        <div class="nominate">
          <div class="tit">产品经理推荐</div>
          <ul>
            <li>
              <em>&nbsp;</em><a :href="productFeatures.urlOne" v-if="productFeatures.urlOne">{{ productFeatures.reasonOne }}</a><span v-else>{{ productFeatures.reasonOne }}</span>
            </li>
            <li v-if="productFeatures.reasonTwo">
              <em>&nbsp;</em><a :href="productFeatures.urlTwo" v-if="productFeatures.urlTwo">{{ productFeatures.reasonTwo }}</a><span v-else>{{ productFeatures.reasonTwo }}</span>
            </li>
            <li v-if="productFeatures.reasonThree">
              <em>&nbsp;</em><a :href="productFeatures.urlThree" v-if="productFeatures.urlThree">{{ productFeatures.reasonThree }}</a><span v-else>{{ productFeatures.reasonThree }}</span>
            </li>
          </ul>
        </div>
        <div class="feature" v-if="productFeatures.recommendDes">
          <div class="tit">产品特色</div>
          <div class="html" v-html="productFeatures.recommendDes"></div>
        </div>
      </div>
      <div class="pdt-trip" ref="pdtTrip">
        <div class="tit">行程安排</div>
        <div class="html" v-html="tripIntroduce.tripContent"></div>
      </div>
      <div class="pdt-cost" ref="pdtCost">
        <div class="tit">费用说明</div>
        <div class="column-name" v-if="!$.isEmptyArr(costDesVo.costInclude)">费用包含</div>
        <ul v-if="!$.isEmptyArr(costDesVo.costInclude)">
          <li v-for="item in costDesVo.costInclude" v-bind:key="item.id">
            <em></em><div class="name">{{ item.title }}</div><div class="cont" v-html="item.content"></div>
          </li>
        </ul>
        <div class="column-name" v-if="!$.isEmptyArr(costDesVo.selfCost)">自理费用</div>
        <ul v-if="!$.isEmptyArr(costDesVo.selfCost)">
          <li v-for="item in costDesVo.selfCost" v-bind:key="item.id">
            <em></em><div class="name">{{ item.title }}</div><div class="cont" v-html="item.content"></div>
          </li>
        </ul>
      </div>
      <ul class="pdt-book-notice" ref="pdtBookNotice">
        <li @click="jumpVisaNotes" v-if="!$.isEmptyArr(visaNotes)">
          <span>签证须知</span>
          <em class="icon"></em>
        </li>
        <li @click="jumpBookNotes">
          <span>预订须知</span>
          <em class="icon"></em>
        </li>
        <li @click="jumpBuyNotes">
          <span>购买须知</span>
          <em class="icon"></em>
        </li>
      </ul>
      <div class="travels" ref="travels" style="padding: 0;margin: 0;">
        <!-- <div class="column-name">相关游记</div>
        <dl @click="$router.push('/travels')">
          <dt>
            <img src="http://pic1.win4000.com/mobile/5/57eddcba0f0af.jpg" alt="">
          </dt>
          <dd>
            <div class="title">这里写游记的标题这里写游记的标题这里写游记的标题这里写游记的标题这里写游记的标题</div>
            <div class="interact">
              <span class="page-view">
                <em class="icon"></em>839</span>
              <span class="msg">
                <em class="icon"></em>220</span>
            </div>
            <span class="more"></span>
          </dd>
        </dl>
        <dl @click="$router.push('/travels')">
          <dt>
            <img src="http://pic1.win4000.com/mobile/5/57eddcba0f0af.jpg" alt="">
          </dt>
          <dd>
            <div class="title">这里写游记的标题这里写游记的标题这里写游记的标题这里写游记的标题这里写游记的标题</div>
            <div class="interact">
              <span class="page-view">
                <em class="icon"></em>839</span>
              <span class="msg">
                <em class="icon"></em>220</span>
            </div>
            <span class="more"></span>
          </dd>
        </dl> -->
      </div>
      <div class="recommend" v-if="false">
        <div class="column-name">更多产品推荐</div>
        <ul class="clearfix">
          <li>
            <img src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/dfb94e0cf16e81f68a5c48f4dc55dbae_259_146.jpg"
              alt="">
            <div class="title">的说法萨法撒仿盛大飞的说的说法萨法撒仿的说法萨法撒仿盛大飞的说法速度方式盛大飞的说法速度方式法速度方式</div>
            <div class="price">&yen;
              <em>8888</em>
              <strong>起/人</strong>
            </div>
          </li>
          <li>
            <img src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/dfb94e0cf16e81f68a5c48f4dc55dbae_259_146.jpg"
              alt="">
            <div class="title">的说法萨法撒仿盛大飞的说的说法萨法撒仿的说法萨法撒仿盛大飞的说法速度方式盛大飞的说法速度方式法速度方式</div>
            <div class="price">&yen;
              <em>8888</em>
              <strong>起/人</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <footer v-if="!initAjax">
      <div class="tool">
        <div v-if="$.isAppClient()" class="kf" @click="serviceCfg.state = true">
          <em class="icon"></em>
          <span>在线客服</span>
        </div>
        <div v-else class="kf">
          <a href="Tel:020-85829620"><em class="icon"></em><span>在线客服</span></a>
        </div>
        <!-- <div class="collect" v-if="$.isAppClient()" @click="changeCollect">
          <em class="icon"></em>
          <span>收藏</span>
        </div> -->
      </div>
      <input type="button" value="开始预订" @click="jumpSchedule">
    </footer>
    <FReturnTop :config="FReturnTopCfg"></FReturnTop>
    <FSelect :config="activityCfg" v-on:close="activityCfg.state = false" v-on:res="resActivity"></FSelect>
    <transition name="fade">
      <section class="FSelect service-mod" v-if="serviceCfg.state">
        <div class="FSelect-mask" @click="serviceCfg.state = false"></div>
        <div class="FSelect-wrap">
          <div class="FSelect-body">
            <ul ref="items">
              <li class="telephone">
                <a href="Tel:020-85829620"><em></em>语音通话</a>
              </li>
              <li class="artificial" @click="$.mutualToApp({ project: 'appNb', password: 'nb', param: { jiba: '18cm' }})">
                <em></em>在线客服
              </li>
            </ul>
          </div>
          <div class="FSelect-close" @click="serviceCfg.state = false">取消</div>
        </div>
      </section>
    </transition>
    <FAlert :config="FAlertCfg" v-on:close="FAlertCfg.state = false"></FAlert>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import FProportion from '../components/FProportion/FProportion'
  import FReturnTop from '../components/FReturnTop/FReturnTop'
  import FSelect from '../components/FSelect/FSelect'
  import FAlert from '../components/FAlert/FAlert'
  export default {
    name: 'lineDetails',
    data() {
      return {
        initAjax: true,
        token: null,

        FHeaderCfg: {
          title: '线路详情'
        },
        FReturnTopCfg: {},

        activityCfg: {
          state: false,
          items: []
        },
        serviceCfg: {
          state: false
        },
        FAlertCfg: {
          title: '温馨提示', // 标题
          state: false, // 显示状态
          cont: '拼命研发中，敬请期待...', // 内容
        },
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: {
            disableOnInteraction: false,
          },
          on: {
            slideChangeTransitionStart: this.slideChange,
            click: this.slideClicked
          }
        },
        swiperSlides: [],
        swiperIndex: 0,
        suspension: false,
        tabNavsList: ['产品特色', '行程安排', '费用说明', '预订须知'],
        tabNavsActiveIndex: 0,

        startCity: '',
        supplierName: '',
        productCode: '',
        sellerProductName: '',
        sellPrice: '',
        productLable: '',
        productPriceStockVoList: [],
        productFeatures: [],
        tripIntroduce: '',
        costDesVo: '',

        visaNotes: [],
        bookNotes: [],
        buyNotes: [],

        joinTransportList: []

      }
    },
    computed: {
      swiper() {
        return this.$refs.swiper.swiper
      }
    },
    created() {
      let _this = this

      if (!_this.$route.query.productCode) {
        _this.$router.push('/routerLost')
        return
      }

      // if (this.$.isAppClient()) {
      //   _this.getToken()
      // } else {
      //   _this.detail()
      // }
      _this.detail()
    },
    activated() {
      this.$.stRemove('album')

      this.$.stRemove('visa')
      this.$.stRemove('book')
      this.$.stRemove('buy')

      this.$.stRemove('departure')

      let startCity = this.$.stGet('startCity')
      if (startCity) {
        this.startCity = startCity.startCityName
        this.$.stRemove('startCity')
      }
    },
    mounted() {
      this.swiper.autoplay.stop()
      this.FReturnTopCfg = this.$refs.vBody
    },
    methods: {
      // 找APP拿token
      getToken() {
        let _this = this

        window.callMethod = function (values) {
          _this.token = values
          _this.detail()
        }
      },
      async detail() {
        let _this = this,
          $ = _this.$
        
        let param = {
          productCode: _this.$route.query.productCode
        }

        // 已登录
        if (_this.token) {
          Object.assign(param, {
            'token': _this.token
          })
        }

        let res = await $.axiosPost({
          url: _this.api.detail,
          param: param,
          load: true
        })
        if (!res) {
          return
        }
        let data = res.data

        _this.swiperSlides = data.productImgVoList
        _this.startCity = data.startCity
        _this.supplierName = data.supplierName
        _this.productCode = data.productCode
        _this.sellerProductName = data.sellerProductName
        _this.sellPrice = data.sellPrice
        _this.productLable = data.productLable

        // 班期
        data.productPriceStockVoList.forEach(function(list) {
          Object.assign(list, {
            aPrice: list.adultSellPrice / 100,
            cPrice: list.childrenSellPrice / 100,
            week: '周' + _this.$.getWeek(list.sellDate),
            state: _this.$.formatDay(list.sellDate, '/').substring(5)
          })
          _this.productPriceStockVoList.push(list)
        })

        _this.productFeatures = data.productFeatures
        _this.tripIntroduce = data.tripIntroduce
        _this.costDesVo = data.costDesVo
        _this.visaNotes = data.visa
        _this.bookNotes = data.reserve
        _this.buyNotes = data.buy

        _this.joinTransportList = data.joinTransportList

        _this.initAjax = false

        _this.$nextTick(function () {
          setTimeout(function() {
            _this.swiper.autoplay.start()
            _this.addScrollEvent()
          }, 166)
        })
      },
      slideChange() {
        this.swiperIndex = this.swiper.activeIndex
      },
      slideClicked() {
        if (this.$.isEmptyArr(this.swiperSlides)) {
          return
        }
        this.$.stSet({
          'album': this.swiperSlides
        })
        this.$router.push({
          path: '/album'
        })
      },
      addScrollEvent() {
        let _this = this,
          refs = _this.$refs

        let tabNavsOffsetTop = refs.tabNavs.offsetTop,
          tabNavsClientHeight = refs.tabNavs.clientHeight,
          pdtFeatureOffsetTop = refs.pdtFeature.offsetTop - tabNavsClientHeight,
          pdtTripOffsetTop = refs.pdtTrip.offsetTop - tabNavsClientHeight,
          pdtCostOffsetTop = refs.pdtCost.offsetTop - tabNavsClientHeight,
          pdtBookNoticeOffsetTop = refs.pdtBookNotice.offsetTop - tabNavsClientHeight,
          travelsOffsetTop = refs.travels.offsetTop - tabNavsClientHeight

        refs.vBody.addEventListener('scroll', function () {
          let bodyScrollTop = refs.vBody.scrollTop
          if (bodyScrollTop >= tabNavsOffsetTop) {
            _this.suspension = bodyScrollTop < travelsOffsetTop
          } else {
            _this.suspension = false
          }
          if (_this.suspension) {
            if (bodyScrollTop >= pdtFeatureOffsetTop && bodyScrollTop < pdtTripOffsetTop) {
              _this.tabNavsActiveIndex = 0
            }
            if (bodyScrollTop >= pdtTripOffsetTop && bodyScrollTop < pdtCostOffsetTop) {
              _this.tabNavsActiveIndex = 1
            }
            if (bodyScrollTop >= pdtCostOffsetTop && bodyScrollTop < pdtBookNoticeOffsetTop) {
              _this.tabNavsActiveIndex = 2
            }
            if (bodyScrollTop >= pdtBookNoticeOffsetTop && bodyScrollTop < travelsOffsetTop) {
              _this.tabNavsActiveIndex = 3
            }
          }
        })
      },
      jumpToAnchor(i) {
        let _this = this,
          refs = _this.$refs,
          target

        if (i == _this.tabNavsActiveIndex) {
          return
        }

        let tabNavsClientHeight = refs.tabNavs.clientHeight,
          pdtFeatureOffsetTop = refs.pdtFeature.offsetTop - tabNavsClientHeight,
          pdtTripOffsetTop = refs.pdtTrip.offsetTop - tabNavsClientHeight,
          pdtCostOffsetTop = refs.pdtCost.offsetTop - tabNavsClientHeight,
          pdtBookNoticeOffsetTop = refs.pdtBookNotice.offsetTop - tabNavsClientHeight

        switch (i) {
          case 0:
            target = pdtFeatureOffsetTop
            break
          case 1:
            target = pdtTripOffsetTop
            break
          case 2:
            target = pdtCostOffsetTop
            break
          case 3:
            target = pdtBookNoticeOffsetTop
            break
        }
        refs.vBody.scrollTop = target + 1
        _this.tabNavsActiveIndex = i
      },
      resActivity(item) {
        let _this = this
        _this.$set(_this.activityCfg, 'checked', item)

        _this.$nextTick(function () {
          _this.$set(_this.activityCfg, 'state', false)
        })
      },
      jumpVisaNotes() {
        this.$.stSet({
          'visa': this.visaNotes
        })
        this.$router.push('/visaNotes')
      },
      jumpBookNotes() {
        this.$.stSet({
          'book': this.bookNotes
        })
        this.$router.push('/bookNotes')
      },
      jumpBuyNotes() {
        this.$.stSet({
          'buy': this.buyNotes
        })
        this.$router.push('/buyNotes')
      },
      moreDeparture() {
        let _this = this

        _this.$.stSet({
          'departure': _this.joinTransportList
        })
        _this.$router.push('/departure')
      },
      // 收藏、暂停开发
      changeCollect() {
        let _this = this
        if (!_this.token) {
          _this.$.mutualToApp({
            'project': 'yfly',
            'password': 'login',
            'param': { 'jiji': '18cm' }
          })
          return
        }
      },
      jumpSchedule() {
        let _this = this
        // _this.$set(_this.FAlertCfg, 'state', true)
        // return

        _this.$router.push('/schedule')
      }
    },
    components: {
      FHeader,
      FProportion,
      FReturnTop,
      FSelect,
      FAlert
    }
  }
</script>