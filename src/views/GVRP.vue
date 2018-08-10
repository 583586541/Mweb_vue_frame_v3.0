<template>
  <div class="GVRP-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">11111111111111</div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'GVRP',
    data() {
      return {
        FHeaderCfg: {
          title: '牛掰用户注册协议'
        }
      }
    },
    components: {
      FHeader
    }
  }
</script>