<!-- http://192.168.1.82:8888/#/register?recommendId=19959522028 -->
<template>
  <div class="register-v v-wrap">
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
            <FMsgCode v-on:FClick="getRegisterCode" ref="FMsgCode"></FMsgCode>
          </div>
        </div>
        <div class="FCell Password">
          <div class="key password"></div>
          <div class="val">
            <input class="input" :type="visualization ? 'text' : 'password'" maxlength="16" placeholder="6-16位字符的密码（数字和字母组成）"
              v-model.trim="password">
            <span :class="['icon', visualization ? 'EO' : 'EC']" @click="visualization = !visualization"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key referral-code"></div>
          <div class="val">
            <input class="input" disabled type="tel" maxlength="11" placeholder="注册推荐码" v-model.trim="recommendId">
            <!-- <span class="icon empty" v-show="recommendId" @click="recommendId = ''"></span> -->
          </div>
        </div>
        <div class="GVRP">注册即表示同意
          <router-link to="/GVRP">《牛掰用户注册协议》</router-link>
        </div>
        <div class="do-register">
          <input type="button" value="注册" @click="register">
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
        recommendId: '13055215093'
      }
    },
    created() {
      let _this = this

      // 无推荐码，路由错误
      let recommendId = _this.$route.query.recommendId
      if (!recommendId) {
        _this.$router.push('/routerLost')
        return
      } else {
        _this.recommendId = recommendId
      }
      
      if (_this.api.ROOT) {
        _this.iphone = '19959522028'
        _this.password = 'a123123'
      }
    },
    methods: {
      async getRegisterCode() {
        let _this = this,
          $ = _this.$

        if (!$.regTest(_this.iphone, 'iphone')) {
          return
        }
        let res = await $.axiosPost({
          url: _this.api.getRegisterCode,
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
      async register() {
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
        if (!$.regTest(_this.recommendId, 'iphone', '请输入正确的注册推荐码')) {
          return
        }

        let res = await $.axiosPost({
          url: _this.api.register,
          param: {
            phone: _this.iphone,
            smsCode: _this.msgCode,
            password: md5(_this.password).toUpperCase(),
            recomCode: _this.recommendId
          },
          load: true
        })
        if (!res) {
          return
        }
        _this.$router.push({
          'path': '/downApp'
        })
      }
    },
    components: {
      FHeader,
      FMsgCode
    }
  }
</script>