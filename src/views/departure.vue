<template>
  <div class="departure-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <ul class="clearfix">
        <li class="checked">
          <div class="place">北京</div>
          <div class="price">&yen;2018</div>
        </li>
        <li>
          <div class="place">北京</div>
          <div class="price">&yen;2018</div>
        </li>
        <li>
          <div class="place">北京</div>
          <div class="price">&yen;2018</div>
        </li>
        <li>
          <div class="place">北京</div>
          <div class="price">&yen;2018</div>
        </li>
        <li>
          <div class="place">北京</div>
          <div class="price">&yen;2018</div>
        </li>
        <li>
          <div class="place">北京</div>
          <div class="price">&yen;2018</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'departure',
    data() {
      return {
        FHeaderCfg: {
          title: '请选择出发地'
        }
      }
    },
    components: {
      FHeader
    }
  }
</script>