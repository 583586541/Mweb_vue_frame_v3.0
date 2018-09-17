<template>
  <div class="visaNotes-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <div class="item" v-for="item in items" v-bind:key="item.id">
        <div class="column-name" v-html="item.title"></div>
        <div class="column-cont" v-html="item.content"></div>
      </div>
    </div>
    <FReturnTop :config="FReturnTopCfg"></FReturnTop>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import FReturnTop from '../components/FReturnTop/FReturnTop'
  export default {
    name: 'visaNotes',
    data() {
      return {
        FHeaderCfg: {
          title: '签证须知'
        },
        FReturnTopCfg: {},
        items: []
      }
    },
    created() {
      let _this = this

      _this.items = _this.$.stGet('visa')
      if (!_this.items) {
        _this.$router.push('/routerLost')
        return
      }
    },
    mounted() {
      this.FReturnTopCfg = this.$refs.vBody
    },
    components: {
      FHeader,
      FReturnTop
    }
  }
</script>