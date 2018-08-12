<template>
  <div class="demo-v v-wrap">
    <div class="v-body" ref="vBody">
      <swiper class="FSwiper" :options="swiperOption" ref="swiper">
        <swiper-slide v-for="slide in swiperSlides" v-bind:key="slide.id">
          <img :src="slide">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'demo',
    data() {
      return {
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
        swiperSlides: []
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
          'https://ldxy.res.netease.com/qt/2015/0713_boot/images/1_eeca790.jpg',
          'https://ldxy.res.netease.com/qt/2015/0713_boot/images/2_5f52c44.jpg',
          'https://ldxy.res.netease.com/qt/2015/0713_boot/images/3_8440ee9.jpg',
          'https://ldxy.res.netease.com/qt/2015/0713_boot/images/4_0a5308e.jpg',
          'https://ldxy.res.netease.com/qt/2015/0713_boot/images/5_b87dc10.jpg'
        ]
        _this.$nextTick(function () {
          _this.swiper.autoplay.start()
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
      }
    }
  }
</script>