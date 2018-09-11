<template>
  <transition name="fade">
    <section class="FAlert" v-if="config.state">
      <div class="FAlert-mask"></div>
      <div class="FAlert-wrap">
        <div class="FAlert-body">
          <div class="FAlert-header">{{ config.title }}</div>
          <div class="FAlert-html">{{ config.cont }}</div>
        </div>
        <div class="FAlert-close" @click="close">我知道了</div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  props: ['config'],
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

