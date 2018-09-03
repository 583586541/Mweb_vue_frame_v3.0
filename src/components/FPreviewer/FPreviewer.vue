<template>
  <transition name="fade">
    <section class="FPreviewer" v-show="config.state">
      <div class="FPreviewer-head" v-show="!fullMode">
        <span class="close" @click="close"></span>{{ activeIndex + 1 }}/{{ imgs.length }}</div>
      <div class="FPreviewer-body" @click="fullMode = !fullMode">
        <swiper class="FSwiper" :options="swiperOption" ref="swiper">
          <swiper-slide v-for="slide in imgs" v-bind:key="slide.id">
            <img :src="slide">
          </swiper-slide>
        </swiper>
      </div>
      <p class="FPreviewer-text" v-show="!fullMode && desc[activeIndex]">{{ desc[activeIndex] }}</p>
    </section>
  </transition>
</template>

<script>
  export default {
    props: ['config'],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          on: {
            slideChangeTransitionStart: this.slideChange
          }
        },
        imgs: [],
        desc: [],
        activeIndex: 0,

        fullMode: false
      }
    },
    computed: {
      state() {
        return this.config.state
      },
      swiper() {
        return this.$refs.swiper.swiper
      }
    },
    methods: {
      toUpdate() {
        let _this = this

        _this.imgs = _this.config.imgs
        _this.desc = _this.config.desc ? _this.config.desc : []
        _this.activeIndex = _this.config.activeIndex

        _this.$nextTick(() => {
          _this.swiper.update()
          _this.swiper.slideTo(_this.activeIndex, 0, true)
        })
      },
      slideChange() {
        let _this = this
        _this.fullMode = false
        _this.activeIndex = Number(_this.swiper.activeIndex)
      },
      close() {
        this.$emit('close')
      }
    },
    watch: {
      state(val) {
        if (val) {
          this.toUpdate()
        }
      }
    }
  }
</script>