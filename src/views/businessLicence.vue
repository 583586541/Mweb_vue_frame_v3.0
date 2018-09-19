<template>
  <div class="businessLicence-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <img src="../assets/images/yyzz.jpg">
    </div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'businessLicence',
    data() {
      return {
        FHeaderCfg: {
          title: '营业执照'
        }
      }
    },
    components: {
      FHeader
    }
  }
</script>