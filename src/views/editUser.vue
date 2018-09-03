<template>
  <div class="editUser-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody"></div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'editUser',
    data() {
      return {
        FHeaderCfg: {
          title: '编辑出行人'
        }
      }
    },
    components: {
      FHeader
    }
  }
</script>