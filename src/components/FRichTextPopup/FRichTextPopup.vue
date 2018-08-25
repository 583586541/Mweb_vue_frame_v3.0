<template>
  <transition name="fade">
    <section class="FRichTextPopup" v-if="config.state">
      <div class="FRichTextPopup-mask" @click="close"></div>
      <div class="FRichTextPopup-wrap">
        <div class="FRichTextPopup-header">
          <div class="title">{{ config.title }}</div>
          <span class="close" @click="close"></span>
        </div>
        <div class="FRichTextPopup-body" v-html="config.html"></div>
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