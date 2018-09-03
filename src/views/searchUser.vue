<template>
  <div class="searchUser-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <FSearch :config="FSearchCfg"></FSearch>
    </div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import FSearch from '../components/FSearch/FSearch'
  export default {
    name: 'searchUser',
    data() {
      return {
        FHeaderCfg: {
          title: '查找出行人'
        },
        FSearchCfg: {}
      }
    },
    components: {
      FHeader,
      FSearch
    }
  }
</script>