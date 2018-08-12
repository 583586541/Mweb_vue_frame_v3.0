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
            <span class="departure">阿富汗出发</span><span class="supplier">龙游天下旅行社</span>
          </div>
          <div class="right-side number">编号：6546586546</div>
        </div>
        <div class="swiper-index">{{ swiperIndex + 1 }} / {{ swiperSlides.length }}<em class="icon"></em></div>
      </div>
    </div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
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
        swiperIndex: 0
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
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534075489919&di=b410861c0c55120d4120a05c4c3e6fb3&imgtype=0&src=http%3A%2F%2Fcyf-img.bdstatic.com%2Fimg_597a99a1274d6_04e114e865b6c47aed629806cf9cdd03.jpg',
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3668980994,1518258247&fm=11&gp=0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534075548926&di=2ce14702678773e9713a91046def53a2&imgtype=0&src=http%3A%2F%2Fwww.huacolor.com%2Farticle%2FUploadPic%2F2016-12%2F2016121518487991.jpg',
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
    },
    components: {
      FHeader
    }
  }
</script>