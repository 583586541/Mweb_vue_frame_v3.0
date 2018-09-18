<template>
  <div class="downApp-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <div class="prompt">恭喜注册成功！</div>
      <p>下载牛掰旅游，开启你牛掰的人生</p>
      <img src="../assets/images/logo.png" alt="logo">
      <div class="url">
        <a href="javascript:void(0);">点击下载</a>
      </div>
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
        }
      }
    },
    components: {
      FHeader
    }
  }
</script>