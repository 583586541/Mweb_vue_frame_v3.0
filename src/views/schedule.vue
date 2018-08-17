<template>
  <div class="schedule-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody"></div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'schedule',
    data() {
      return {
        FHeaderCfg: {
          title: '更多班期'
        }
      }
    },
    components: {
      FHeader
    }
  }
</script>