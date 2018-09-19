<template>
  <div id="app" :class="{'no-head-state': noHeadState}">
    <navigation>
      <router-view></router-view>
    </navigation>
  </div>
</template>

<script>
  import weixinShare from './assets/js/weixinShare'
  export default {
    name: 'App',
    data() {
      return {
        noHeadState: this.$.isAppClient() || this.$.isWeixinClient()
      }
    },
    created() {
      this.updateTitle()
      this.navigation()

      let routeName = this.$route.name
      if (routeName == 'lineDetails' || routeName == 'register') {
        return
      }
      weixinShare.weixinSign({
        url: this.api.wechatSign, // 验签接口
        param: { // 参数
          url: document.location.href
        },
        load: false, // 请求过程中是否展示全屏loading
        custom: { // 自定义分享内容
          title: '牛掰旅游',
          desc: '品质旅游，就上牛掰',
          link: 'http://mweb.gznbly.com/cpxl/#/register?recommendId=18720262936',
          imgUrl: 'https://niub-dev.oss-cn-shanghai.aliyuncs.com/logo.png'
        }
      })
    },
    methods: {
      navigation() {
        this.$navigation.on('forward', (to, from) => {
          this.updateTitle()
        })
        this.$navigation.on('back', (to, from) => {
          this.updateTitle()
        })
        this.$navigation.on('replace', (to, from) => {
          this.updateTitle()
        })
      },
      updateTitle() {
        document.title = this.$route.meta.title
      }
    },
  }
</script>