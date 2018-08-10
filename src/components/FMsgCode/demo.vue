<template>
  <div class="demo-v v-wrap">
    <div class="v-body" ref="vBody">
      <FMsgCode v-on:FClick="getRegisterCode" ref="FMsgCode"></FMsgCode>
    </div>
  </div>
</template>

<script>
  import { md5 } from 'vux'
  import FMsgCode from '../components/FMsgCode/FMsgCode'
  export default {
    name: 'demo',
    methods: {
      async getRegisterCode() {
        let _this = this,
          $ = _this.$
        let res = await $.axiosPost({
          url: _this.api.getRegisterCode,
          param: {
            phone: '13056215398',
            sign: md5('13056215398nb').toUpperCase()
          },
          load: true
        })
        if (!res) {
          return
        }
        _this.$refs.FMsgCode.secondReduce()
      }
    },
    components: {
      FMsgCode
    }
  }
</script>