<template>
  <div class="demo-v v-wrap">
    <div class="v-body" ref="vBody">
      <FProportion :config=".8"></FProportion>
    </div>
  </div>
</template>

<script>
  import FProportion from '../components/FProportion/FProportion'
  export default {
    name: 'demo',
    components: {
      FProportion
    }
  }
</script>