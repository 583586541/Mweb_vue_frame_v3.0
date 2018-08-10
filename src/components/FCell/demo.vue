<template>
  <div class="demo-v v-wrap">
    <div class="v-body" ref="vBody">

      <!-- 可输入 -->
      <div class="FCell">
        <div class="key">身份证</div>
        <div class="val">
          <input class="input" type="text" placeholder="请输入身份证号码" v-model.trim="IdCard">
          <span class="icon empty" v-show="IdCard" @click="IdCard = ''"></span>
        </div>
      </div>
      <!-- 不可输入 -->
      <div class="FCell">
        <div class="key">所在地区</div>
        <div class="val" @click="change">
          <span :class="['text', { 'placeholder': !address }]">{{ address ? address : '请选择所在地区' }}</span>
          <span class="icon more"></span>
        </div>
      </div>
      <!-- 设定密码 -->
      <div class="FCell Password">
        <div class="key password"></div>
        <div class="val">
          <input class="input" :type="visualization ? 'text' : 'password'" placeholder="请输入6-16位字母和数字" v-model.trim="password">
          <span :class="['icon', visualization ? 'EO' : 'EC']" @click="visualization = !visualization"></span>
        </div>
      </div>
      <!-- 发送验证码 -->
      <div class="FCell Msg-code">
        <div class="key msg-code"></div>
        <div class="val">
          <input class="input" type="tel" maxlength="6" placeholder="请输入短信验证码" v-model.trim="msgCode">
          <FMsgCode v-on:FClick="getRegisterCode" ref="FMsgCode"></FMsgCode><!-- 详见FMsgCode组件 -->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'demo',
    data() {
      return {
        IdCard: '',
        address: '',

        password: '',
        visualization: false,

        msgCode: ''
      }
    },
    methods: {
      change() {
        console.log('do some things')
      }
    }
  }
</script>