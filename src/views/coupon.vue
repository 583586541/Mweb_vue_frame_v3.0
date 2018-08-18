<template>
  <div class="coupon-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">正在开发中...</div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'coupon',
    data() {
      return {
        FHeaderCfg: {
          title: '优惠券'
        }
      }
    },
    components: {
      FHeader
    }
  }
</script>