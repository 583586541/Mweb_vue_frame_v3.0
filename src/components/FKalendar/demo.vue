<template>
  <div class="demo-v v-wrap">
    <div class="v-body" ref="vBody">
      <div>开始时间：{{ FKalendarCfg.sValue }}</div>
      <div v-if="!FKalendarCfg.onceClick">结束时间：{{ FKalendarCfg.eValue }}</div>
      <div @click="FKalendarCfg.onceClick = !FKalendarCfg.onceClick">点击切换模式     当前: {{ FKalendarCfg.onceClick ? '单选' : '两选' }}</div>
      <FKalendar :config="FKalendarCfg" v-on:res="resFKalendar"></FKalendar>
    </div>
  </div>
</template>

<script>
  import FKalendar from '../components/FKalendar/FKalendar'
  export default {
    name: 'demo',
    data() {
      return {
        FKalendarCfg: {
          onceClick: false,
          sValue: this.$.getThatDay(1),
          eValue: this.$.getThatDay(2),
          start: this.$.getThatDay(1),
          end: this.$.getThatDay(45)
        }
      }
    },
    methods: {
      resFKalendar(sTime, eTime) {
        Object.assign(this.FKalendarCfg, {
          sValue: sTime,
          eValue: eTime
        })
      }
    },
    components: {
      FKalendar
    }
  }
</script>