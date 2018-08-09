<template>
  <div class="demo-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody"></div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'demo',
    data() {
      return {
        FHeaderCfg: {
          title: '腋毛╮超级长'
        }
      }
    },
    components: {
      FHeader
    }
  }
</script>