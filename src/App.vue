<template>
  <div id="app" :class="{'no-head-state': noHeadState}">
    <navigation>
      <router-view></router-view>
    </navigation>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        noHeadState: this.$.isAppClient() || this.$.isWeixinClient()
      }
    },
    created() {
      this.updateTitle()
      this.navigation()
    },
    methods: {
      navigation() {
        this.$navigation.on('forward', (to, from) => {
          this.updateTitle()
        })
        this.$navigation.on('back', (to, from) => {
          this.updateTitle()
        })
        this.$navigation.on('replace', (to, from) => {
          this.updateTitle()
        })
      },
      updateTitle() {
        document.title = this.$route.meta.title
      }
    },
  }
</script>