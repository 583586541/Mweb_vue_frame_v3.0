<template>
  <div class="lineDetails-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <div class="banner">
        <swiper class="FSwiper" :options="swiperOption" ref="swiper">
          <swiper-slide v-for="slide in swiperSlides" v-bind:key="slide.id">
            <img :src="slide">
          </swiper-slide>
        </swiper>
        <div class="des">
          <div class="left-side">
            <span class="departure">阿富汗出发</span>
            <span class="supplier">龙游天下旅行社</span>
          </div>
          <div class="right-side number">编号：6546586546</div>
        </div>
        <div class="swiper-index" @click="slideClicked">{{ swiperIndex + 1 }} / {{ swiperSlides.length }}
          <em class="icon"></em>
        </div>
      </div>
      <div class="synopsis">
        <h2>海南三亚6日5晚跟团游海南三亚6日5晚跟团游海南三亚6日5三亚</h2>
        <div class="price">
          <em>&yen;</em>5668
          <strong>起/人</strong>
        </div>
        <ul class="tips clearfix">
          <li>海滨海岛</li>
          <li>沙滩</li>
          <li>海滨海岛</li>
          <li>沙滩</li>
          <li>海滨海岛</li>
          <li>沙滩</li>
          <li>海滨海岛</li>
          <li>沙滩</li>
          <li>海滨海岛</li>
          <li>沙滩</li>
        </ul>
      </div>
      <div class="discount">
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
        <div class="activity cell">
          <div class="key">优惠</div>
          <div class="val clearfix">
            <em class="state">已选</em>满2000元，立减100元</div>
          <div class="more" @click="activityCfg.state = true">更多
            <em class="icon"></em>
          </div>
        </div>
        <ul class="tips clearfix">
          <li>
            <em class="icon"></em>特色标签
          </li>
          <li>
            <em class="icon"></em>特色标签
          </li>
        </ul>
      </div>
      <div class="evaluate" v-if="true">
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
      <div class="doubt" v-if="true">
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
          <span class="area">
            <em class="icon"></em>广州出发</span>
          <router-link class="more" to="/departure">更多出发地
            <em class="icon"></em>
          </router-link>
        </div>
        <div class="schedule-wrap">
          <div class="list">
            <ul class="clearfix">
              <li>
                <div class="day">07/23 周一</div>
                <div class="price">&yen;6588</div>
              </li>
              <li>
                <div class="day">07/23 周一</div>
                <div class="price">&yen;6588</div>
              </li>
              <li>
                <div class="day">07/23 周一</div>
                <div class="price">&yen;6588</div>
              </li>
              <li>
                <div class="day">07/23 周一</div>
                <div class="price">&yen;6588</div>
              </li>
              <li>
                <div class="day">07/23 周一</div>
                <div class="price">&yen;6588</div>
              </li>
              <li>
                <div class="day">07/23 周一</div>
                <div class="price">&yen;6588</div>
              </li>
              <li>
                <div class="day">07/23 周一</div>
                <div class="price">&yen;6588</div>
              </li>
            </ul>
          </div>
          <div class="more-schedule">
            <router-link to="/schedule">更多班期</router-link>
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
              <em>&nbsp;</em>
              <span>【推荐】产品经理在这里说了一句话，不管是啥最多占两行，多了就产品【推荐】产品经理在这里说了一句话，不管是啥最多占两行，多了就产品经理在这里说了一句话，不管是啥最多占两行，多了就经理在这里说了一句话，不管是啥最多占两行，多了就</span>
            </li>
            <li>
              <em>&nbsp;</em>
              <a href="http://www.baidu.com">【推荐】产品经理在这里说了一句话，不管是啥最多占产品经理在这里说了一句话，不管是啥最多占两行，多了就产品经理在这里说了一句话，不管是啥最多占两行，多了就两行，多了就产品经理在这里说了一句话，不管是啥最多占两行，多了就</a>
            </li>
            <li>
              <em>&nbsp;</em>
              <a href="http://www.baidu.com">【推荐】产品经理在这里说了一句话，不管是啥最多占产品经理在这里说了一句话，不管是啥最多占两行，多了就产品经理在这里说了一句话，不管是啥最多占两行，多了就两行，多了就产品经理在这里说了一句话，不管是啥最多占两行，多了就</a>
            </li>
          </ul>
        </div>
        <div class="feature">
          <div class="tit">产品特色</div>
          <div class="html" v-html="1"></div>
        </div>
      </div>
      <div class="pdt-trip" ref="pdtTrip">
        <div class="tit">行程安排</div>
        <div class="html" v-html="aaaa"></div>
      </div>
      <div class="pdt-cost" ref="pdtCost">
        <div class="tit">费用说明</div>
        <div class="column-name">费用包含</div>
        <ul>
          <li>
            <em>&nbsp;</em>
            <span>产品经理在这里说了一句话，不管是啥最多占两行，多了就产品</span>
          </li>
          <li>
            <em>&nbsp;</em>
            <span>产品经理在这里说了一句话，不管是啥最多占两</span>
          </li>
          <li>
            <em>&nbsp;</em>
            <span>产品经理在这里说了一句话，不管是啥最多占两行，多了就产品产品经理在这里说了一句话，不管是啥最多占两行，多了就产品经理在这里说了一句话，不管是啥最多占两行，多了就经理在这里说了一句话，不管是啥最多占两行，多了就</span>
          </li>
        </ul>
        <div class="column-name">自理费用</div>
        <ul>
          <li>
            <em>&nbsp;</em>
            <span>产品经理在这里说了一句话，不管是啥最多占两行，多了就产品</span>
          </li>
          <li>
            <em>&nbsp;</em>
            <span>产品经理在这里说了一句话，不管是啥最多占两</span>
          </li>
          <li>
            <em>&nbsp;</em>
            <span>产品经理在这里说了一句话，不管是啥最多占两行，多了就产品产品经理在这里说了一句话，不管是啥最多占两行，多了就产品经理在这里说了一句话，不管是啥最多占两行，多了就经理在这里说了一句话，不管是啥最多占两行，多了就</span>
          </li>
        </ul>
      </div>
      <ul class="pdt-book-notice" ref="pdtBookNotice">
        <li>
          <router-link to="/a">
            <span>签证须知</span>
            <em class="icon"></em>
          </router-link>
        </li>
        <li>
          <router-link to="/a">
            <span>预定须知</span>
            <em class="icon"></em>
          </router-link>
        </li>
        <li>
          <router-link to="/a">
            <span>购买须知</span>
            <em class="icon"></em>
          </router-link>
        </li>
      </ul>
      <div class="travels" ref="travels" v-show="false">
        <div class="column-name">相关游记</div>
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
        </dl>
      </div>
      <div class="recommend">
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

    <footer>
      <div class="tool">
        <div v-if="$.isAppClient()" class="kf" @click="serviceCfg.state = true">
          <em class="icon"></em>
          <span>在线客服</span>
        </div>
        <div v-else class="kf">
          <a href="Tel:19959522028"><em class="icon"></em><span>在线客服</span></a>
        </div>
        <div class="collect" v-if="$.isAppClient()">
          <em class="icon"></em>
          <span>收藏</span>
        </div>
      </div>
      <input type="button" value="开始预订">
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
                <a href="Tel:19959522028"><em></em>语音通话</a>
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

  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import FProportion from '../components/FProportion/FProportion'
  import FReturnTop from '../components/FReturnTop/FReturnTop'
  import FSelect from '../components/FSelect/FSelect'
  export default {
    name: 'lineDetails',
    data() {
      return {
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

        aaaa: "",
      }
    },
    computed: {
      swiper() {
        return this.$refs.swiper.swiper
      }
    },
    created() {
      let _this = this

      setTimeout(function () {
        _this.swiperSlides = [
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471589386361552.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471610801337121.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471619631454231.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471630905765623.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471637782772625.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471644966301223.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471652420162237.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471659359450747.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471666400140663.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471673847553720.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471691916163374.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471700229462437.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471709146356773.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471716496161432.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471723900535567.jpg'
        ]
        _this.activityCfg.items = [{
            name: '测试1',
            code: 1
          },
          {
            name: '测试2',
            code: 2
          },
          {
            name: '测试3',
            code: 3
          },
          {
            name: '测试4',
            code: 4
          },
          {
            name: '测试5测试5测试5测试5测试5测试5测试5测试5测试5测试5测试5测试5测试5测试5',
            code: 5
          },
          {
            name: '测试6',
            code: 6
          },
          {
            name: '测试7',
            code: 7
          },
          {
            name: '测试8',
            code: 8
          },
        ]
        _this.$nextTick(function () {
          _this.swiper.autoplay.start()
          _this.addScrollEvent()
        })
      }, 200)

      // _this.productDetail()
    },
    mounted() {
      this.swiper.autoplay.stop()
      this.FReturnTopCfg = this.$refs.vBody
    },
    methods: {
      async productDetail() {
        let _this = this,
          $ = _this.$
        let res = await $.axiosPost({
          url: _this.api.productDetail,
          param: {},
          load: true
        })
        if (!res) {
          return
        }
        _this.aaaa = res.data
        console.log(res)
      },
      slideChange() {
        this.swiperIndex = this.swiper.activeIndex
      },
      slideClicked() {
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
      }
    },
    components: {
      FHeader,
      FProportion,
      FReturnTop,
      FSelect
    }
  }
</script>