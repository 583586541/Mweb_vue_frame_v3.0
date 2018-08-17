<template>
  <div class="doubt-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody"></div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'doubt',
    data() {
      return {
        FHeaderCfg: {
          title: '提问'
        }
      }
    },
    components: {
      FHeader
    }
  }
</script>