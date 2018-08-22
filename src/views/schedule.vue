<template>
  <div class="schedule-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      9月20号之后开放
    </div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'schedule',
    data() {
      return {
        FHeaderCfg: {
          title: '选择日期和人数'
        }
      }
    },
    components: {
      FHeader
    }
  }
</script>