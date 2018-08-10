<template>
  <div class="register-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <form>
        <div class="FCell">
          <div class="key iphone"></div>
          <div class="val">
            <input class="input" type="tel" maxlength="11" placeholder="请输入手机号码" v-model="iphone">
            <span class="icon empty" v-show="iphone" @click="iphone = ''"></span>
          </div>
        </div>
        <div class="FCell Msg-code">
          <div class="key msg-code"></div>
          <div class="val">
            <input class="input" type="tel" maxlength="6" placeholder="请输入短信验证码" v-model="msgCode">
            <FMsgCode v-on:FClick="getRegisterCode" ref="FMsgCode"></FMsgCode>
          </div>
        </div>
        <div class="FCell Password">
          <div class="key password"></div>
          <div class="val">
            <input class="input" :type="visualization ? 'text' : 'password'" maxlength="16" placeholder="密码，6-16位字母或数字" v-model="password">
            <span :class="['icon', visualization ? 'EO' : 'EC']" @click="visualization = !visualization"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key referral-code"></div>
          <div class="val">
            <input class="input" type="text" placeholder="注册推荐码" v-model="referralCode">
            <span class="icon empty" v-show="referralCode" @click="referralCode = ''"></span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { md5 } from 'vux'
  import FHeader from '../components/FHeader/FHeader'
  import FMsgCode from '../components/FMsgCode/FMsgCode'
  export default {
    name: 'register',
    data() {
      return {
        FHeaderCfg: {
          title: '注册'
        },
        iphone: '',
        msgCode: '',
        password: '',
        visualization: false,
        referralCode: ''
      }
    },
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
      },
    },
    components: {
      FHeader,
      FMsgCode
    }
  }
</script>