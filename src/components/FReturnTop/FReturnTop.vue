<template>
  <div class="FReturnTop" v-if="state" @click="execute"></div>
</template>

<script>
  export default {
    props: ['config'],
    data() {
      return {
        ele: {},
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
          _this.state = _this.ele.scrollTop > _this.limit
        })
      },
      execute() {
        if (this.$.isEmptyObj(this.ele)) {
          return
        }
        this.ele.scrollTo(0, 0)
      }
    },
    watch: {
      cfg() {
        this.bindEle()
      }
    }
  }
</script>