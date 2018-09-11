<template>
  <div class="FScrollMore" ref="wrap">
    <ul class="list" ref="cont">
      <li v-for="(item, index) in list" v-bind:key="item.id" @click="res(item)">
        {{ index + 1 }}
      </li>
    </ul>
    <div class="loading" v-show="config.requesting && config.page > 1">
      <em class="icon"></em>正在加载
    </div>
    <div class="no-more" v-show="config.finish">没有更多了~</div>
    <FReturnTop :config="FReturnTopCfg"></FReturnTop>
  </div>
</template>

<script>
  import FReturnTop from '../FReturnTop/FReturnTop'
  export default {
    props: ['config'],
    data() {
      return {
        list: [],
        wrapHeight: 0,
        contHeight: 0,

        FReturnTopCfg: {},
      }
    },
    computed: {
      newly() {
        return this.config.newly
      },
      page() {
        return this.config.page
      }
    },
    mounted() {
      let _this = this

      _this.wrapHeight = _this.$refs.wrap.clientHeight
      _this.FReturnTopCfg = _this.$refs.wrap

      _this.bindScroll()
    },
    methods: {
      bindScroll() {
        let _this = this,
          config = _this.config,
          wrap = _this.$refs.wrap

        wrap.addEventListener('scroll', function () {
          if (_this.contHeight - _this.wrapHeight - wrap.scrollTop <= config.distance && !config.requesting && !config.finish) {
            _this.$emit('more')
          }
        })
      },
      res(item) {
        this.$emit('res', item)
      }
    },
    watch: {
      newly(val) {
        let _this = this
        _this.list = _this.list.concat(val)

        _this.$nextTick(function () {
          _this.contHeight = _this.$refs.cont.clientHeight
        })
      },
      page(nVal, oVal) {
        if (nVal < oVal) {
          this.list = []
        }
      }
    },
    components: {
      FReturnTop
    }
  }
</script>