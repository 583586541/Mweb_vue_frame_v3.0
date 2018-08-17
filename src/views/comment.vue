<template>
  <div class="comment-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody"></div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'comment',
    data() {
      return {
        FHeaderCfg: {
          title: '点评'
        }
      }
    },
    components: {
      FHeader
    }
  }
</script>