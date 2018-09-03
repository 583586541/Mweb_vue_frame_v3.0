<template>
  <div class="searchUser-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody"></div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'searchUser',
    data() {
      return {
        FHeaderCfg: {
          title: '查找出行人'
        }
      }
    },
    components: {
      FHeader
    }
  }
</script>