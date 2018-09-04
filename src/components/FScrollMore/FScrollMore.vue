<template>
  <div class="FScrollMore" ref="wrap">
    <ul class="list" ref="cont">
      <li v-for="item in list" v-bind:key="item.id">
        <div class="name-sex">二狗子<span>GOUZI/ER</span>女</div>
        <div class="card">身份证<span>35032191201112538</span></div>
      </li>
    </ul>
    <div class="loading" v-show="false">
      <em class="icon"></em>正在加载
    </div>
    <div class="no-more" v-show="config.finish">没有更多了~</div>
  </div>
</template>

<script>
  export default {
    props: ['config'],
    data() {
      return {
        list: [],
        wrapHeight: 0,
        contHeight: 0
      }
    },
    computed: {
      newly() {
        return this.config.newly
      }
    },
    mounted() {
      let _this = this

      _this.wrapHeight = _this.$refs.wrap.clientHeight
      _this.bindScroll()
    },
    methods: {
      bindScroll() {
        let _this = this,
          config = _this.config,
          wrap = _this.$refs.wrap

        wrap.addEventListener('scroll', function () {
          if (_this.contHeight - _this.wrapHeight - wrap.scrollTop <= config.distance && !config.requesting && !config.finish) {
            _this.$emit('getMore')
          }
        })
      }
    },
    watch: {
      newly(val) {
        let _this = this
        _this.list = _this.list.concat(val)

        _this.$nextTick(function () {
          _this.contHeight = _this.$refs.cont.clientHeight
        })
      }
    }
  }
</script>