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

      weixinShare.weixinSign({
        url: this.api.wechatSign, // 验签接口
        param: { // 参数
          url: document.location.href
        },
        load: true, // 请求过程中是否展示全屏loading
        custom: { // 自定义分享内容
          title: 'HTML5移动端开发框架v3.0',
          desc: 'Author: Junbing Fu, Last update: 2018/09/12',
          link: document.location.href,
          imgUrl: 'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1528880799157105466.jpeg'
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