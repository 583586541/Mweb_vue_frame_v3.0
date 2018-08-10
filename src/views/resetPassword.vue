<template>
  <div class="resetPassword-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <form>
        <div class="FCell">
          <div class="key iphone"></div>
          <div class="val">
            <input class="input" type="tel" maxlength="11" placeholder="请输入手机号码" v-model.trim="iphone">
            <span class="icon empty" v-show="iphone" @click="iphone = ''"></span>
          </div>
        </div>
        <div class="FCell Msg-code">
          <div class="key msg-code"></div>
          <div class="val">
            <input class="input" type="tel" maxlength="6" placeholder="请输入短信验证码" v-model.trim="msgCode">
            <FMsgCode v-on:FClick="getFindPasswordCode" ref="FMsgCode"></FMsgCode>
          </div>
        </div>
        <div class="FCell Password">
          <div class="key password"></div>
          <div class="val">
            <input class="input" :type="visualization ? 'text' : 'password'" maxlength="16" placeholder="6-16位字符的密码（数字和字母组成）" v-model.trim="password">
            <span :class="['icon', visualization ? 'EO' : 'EC']" @click="visualization = !visualization"></span>
          </div>
        </div>
        <div class="do-update-password">
          <input type="button" value="重置密码" @click="updatePsd">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {
    md5
  } from 'vux'
  import FHeader from '../components/FHeader/FHeader'
  import FMsgCode from '../components/FMsgCode/FMsgCode'
  export default {
    name: 'resetPassword',
    data() {
      return {
        FHeaderCfg: {
          title: '忘记密码'
        },
        iphone: '',
        msgCode: '',
        password: '',
        visualization: false
      }
    },
    created() {
      let _this = this

      if (_this.api.ROOT) {
        _this.iphone = '19959522028'
        // _this.msgCode = '123456'
        _this.password = 'a123456'
      }
    },
    methods: {
      async getFindPasswordCode() {
        let _this = this,
          $ = _this.$

        if (!$.regTest(_this.iphone, 'iphone')) {
          return
        }
        let res = await $.axiosPost({
          url: _this.api.getFindPasswordCode,
          param: {
            phone: _this.iphone,
            sign: md5(_this.iphone + 'nb').toUpperCase()
          },
          load: true
        })
        if (!res) {
          return
        }
        _this.$refs.FMsgCode.secondReduce()
      },
      async updatePsd() {
        let _this = this,
          $ = _this.$

        if (!$.regTest(_this.iphone, 'iphone')) {
          return
        }
        if (!$.regTest(_this.msgCode, 'msgCode')) {
          return
        }
        if (!$.regTest(_this.password, 'password')) {
          return
        }

        let res = await $.axiosPost({
          url: _this.api.updatePsd,
          param: {
            phone: _this.iphone,
            messageCode: _this.msgCode,
            newPassWord: md5(_this.password).toUpperCase()
          },
          load: true
        })
        if (!res) {
          return
        }
        console.log(res)
      },
    },
    components: {
      FHeader,
      FMsgCode
    }
  }
</script>