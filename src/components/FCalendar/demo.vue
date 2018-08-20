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
          value: '2018-08-06',
          start: '1918-08-05',
          end: '2018-08-21'
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
