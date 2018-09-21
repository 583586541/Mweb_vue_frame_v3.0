<template>
  <div class="downApp-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <div class="prompt">恭喜注册成功！</div>
      <p>下载牛掰旅游，开启你牛掰的人生</p>
      <img src="../assets/images/logo.png" alt="logo">
      <div class="url">
        <a :href="downSrc">点击下载</a>
      </div>
    </div>
    <div class="guide" v-if="$.isWeixinClient()">
      <img src="../assets/images/guide_down.png" alt="请前往浏览器下载">
    </div> 
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'downApp',
    data() {
      return {
        FHeaderCfg: {
          title: '下载App'
        },
        downSrc: ''
      }
    },
    created() {
      let _this = this

      if (_this.$.getPhoneSystem() == 'iPhone') {
        _this.downSrc = 'http://oss.gznbly.com/ios/niub.ipa'
      } else {
        _this.downSrc = 'http://oss.gznbly.com/android/niub.apk'
      }
    },
    components: {
      FHeader
    }
  }
</script>