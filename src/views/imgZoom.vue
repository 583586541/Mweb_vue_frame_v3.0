<template>
  <div class="imgZoom-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <div class="pagination">{{ Number(swiperIndex) + 1 }} / {{ swiperSlides.length }}</div>
      <div class="FSwiper-wrap" @click="changeDesState">
        <swiper class="FSwiper" :options="swiperOption" ref="swiper">
          <swiper-slide v-for="slide in swiperSlides" v-bind:key="slide.id">
            <img :src="slide">
          </swiper-slide>
        </swiper>
      </div>
      <transition name="fade">
        <div class="describe" v-if="desState && slideDesLists[swiperIndex]">
          {{ slideDesLists[swiperIndex] }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'imgZoom',
    data() {
      return {
        FHeaderCfg: {
          title: '图片详情'
        },
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          on: {
            slideChangeTransitionStart: this.slideChange
          }
        },
        swiperSlides: [],
        swiperIndex: this.$route.query.id,
        slideDesLists: [],
        desState: true
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
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471723900535567.jpg',
        ]
        _this.slideDesLists = [
          '第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张',
          '第2张', '第3张', '第4张', '第5张', '第6张', '第7张', '第8张', '第9张', '第10张', '第11张', '第12张', '第13张', '第14张', '第15张'
        ]

        _this.$nextTick(() => {
          setTimeout(function () {
            _this.swiper.update()
            _this.swiper.slideTo(_this.swiperIndex, 0, true)
          }, 0)
        })
      }, 200)
    },
    methods: {
      slideChange() {
        let _this = this
        _this.desState = true
        _this.swiperIndex = _this.swiper.activeIndex
      },
      changeDesState() {
        this.desState = !this.desState
      }
    },
    components: {
      FHeader
    }
  }
</script>