<template>
  <div class="travels-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody"></div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'travels',
    data() {
      return {
        FHeaderCfg: {
          title: '相关游记'
        }
      }
    },
    components: {
      FHeader
    }
  }
</script>