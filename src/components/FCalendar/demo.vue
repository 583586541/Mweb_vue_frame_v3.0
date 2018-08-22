<template>
  <div class="demo-v v-wrap">
    <div class="v-body" ref="vBody">
      <div @click="FCalendarCfg.state = true">修改日期:{{ FCalendarCfg.value }}</div>
    </div>
    <FCalendar :config="FCalendarCfg" v-on:close="FCalendarCfg.state = false" v-on:res="resFCalendar"></FCalendar>
  </div>
</template>

<script>
  import FCalendar from '../components/FCalendar/FCalendar'
  export default {
    name: 'schedule',
    data() {
      return {
        FCalendarCfg: {
          state: false,
          value: this.$.getThatDay(1),
          start: this.$.getThatDay(1),
          end: this.$.getThatDay(15)
        }
      }
    },
    methods: {
      resFCalendar(res) {
        this.$set(this.FCalendarCfg, 'value', res.time)
      }
    },
    components: {
      FCalendar
    }
  }
</script>
