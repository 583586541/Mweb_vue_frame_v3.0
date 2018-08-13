<template>
  <div class="FProportion">
    <div :style="{'width': percent}"></div>
  </div>
</template>

<script>
  export default {
    props: ['config'],
    data() {
      return {}
    },
    computed: {
      percent() {
        return this.config * 100 + '%'
      }
    }
  }
</script>