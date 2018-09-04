<template>
  <div class="FReturnTop" v-if="state" @click="execute"></div>
</template>

<script>
  export default {
    props: ['config'],
    data() {
      return {
        ele: {},
        finished: true,
        state: false,
        limit: 999
      }
    },
    computed: {
      cfg() {
        return this.config
      }
    },
    methods: {
      bindEle() {
        let _this = this
        
        _this.ele = _this.cfg
        _this.ele.addEventListener('scroll', function() {
          let eleScrollTop = _this.ele.scrollTop
          if (_this.finished) {
            _this.state = eleScrollTop > _this.limit
          }
          if (!eleScrollTop) {
            _this.finished = true
          }
        })
      },
      execute() {
        let _this = this
        if (_this.$.isEmptyObj(_this.ele)) {
          return
        }
        _this.finished = false
        _this.state = false
        
        _this.$.scrollYAxis({
          ele: _this.ele,
          target: 0
        })
      }
    },
    watch: {
      cfg() {
        this.bindEle()
      }
    }
  }
</script>