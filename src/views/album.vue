<template>
  <div class="album-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody"></div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'album',
    data() {
      return {
        FHeaderCfg: {
          title: '相册'
        }
      }
    },
    components: {
      FHeader
    }
  }
</script>