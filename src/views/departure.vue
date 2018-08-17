<template>
  <div class="departure-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody"></div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'departure',
    data() {
      return {
        FHeaderCfg: {
          title: '更多出发地'
        }
      }
    },
    components: {
      FHeader
    }
  }
</script>