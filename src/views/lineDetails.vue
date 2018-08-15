<template>
  <div class="lineDetails-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <div class="banner">
        <swiper class="FSwiper" :options="swiperOption" ref="swiper">
          <swiper-slide v-for="slide in swiperSlides" v-bind:key="slide.id">
            <img :src="slide">
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
        <div class="des">
          <div class="left-side">
            <span class="departure">阿富汗出发</span>
            <span class="supplier">龙游天下旅行社</span>
          </div>
          <div class="right-side number">编号：6546586546</div>
        </div>
        <div class="swiper-index">{{ swiperIndex + 1 }} / {{ swiperSlides.length }}
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
      <div class="discount" v-if="true">
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
          <div class="more">更多
            <em class="icon"></em>
          </div>
        </div>
        <div class="activity cell">
          <div class="key">优惠</div>
          <div class="val clearfix">
            <em class="state">已选</em>满2000元，立减100元</div>
          <div class="more">更多
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
      <div class="schedule" v-if="true">
        <div class="place">
          <span class="area">
            <em class="icon"></em>广州出发</span>
          <router-link class="more" to="/moreArea">更多出发地
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
            <router-link to="/moreSchedule">更多班期</router-link>
          </div>
        </div>

      </div>
      <div class="detail">
        <ul :class="['tab-navs', { 'suspension': suspension }]" ref="tabNavs">
          <li>产品特色</li>
          <li>行程安排</li>
          <li>费用说明</li>
          <li>预订须知</li>
        </ul>
        <div class="tab-cont">
          测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多测试与喜爱多多多多
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import FProportion from '../components/FProportion/FProportion'
  export default {
    name: 'lineDetails',
    data() {
      return {
        FHeaderCfg: {
          title: '线路详情'
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
        suspension: false
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
          'http://img.zcool.cn/community/01219159455828a8012193a3408af8.jpg@3000w_1l_2o_100sh.jpg',
          'http://img.zcool.cn/community/01986958837303a801219c77d8057f.jpg@1280w_1l_2o_100sh.jpg',
          'http://pic1.win4000.com/mobile/5/57eddcba0f0af.jpg',
        ]
        _this.$nextTick(function () {
          _this.swiper.autoplay.start()
          _this.addEventScroll()
        })
      }, 200)
    },
    mounted() {
      this.swiper.autoplay.stop()
    },
    methods: {
      slideChange() {
        this.swiperIndex = this.swiper.activeIndex
      },
      slideClicked() {
        console.log('你点击了swpier')
      },
      addEventScroll() {
        let _this = this,
          refs = this.$refs
        let tabNavsOffsetTop = refs.tabNavs.offsetTop
        
        refs.vBody.addEventListener('scroll', function () {
          if (refs.vBody.scrollTop > tabNavsOffsetTop) {
            _this.suspension = true
          } else {
            _this.suspension = false
          }
        })
      },
      goAnchor(selector) {
        var anchor = this.$el.querySelector(selector)
        this.$.scrollYAxis({
          ele: this.$refs.vBody,
          target: anchor.offsetTop,
          speed: 10000
        })
        // this.$refs.vBody.scrollTop = anchor.offsetTop
      }
    },
    components: {
      FHeader,
      FProportion
    }
  }
</script>