<template>
  <div class="schedule-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <FKalendar :config="FKalendarCfg" v-on:res="resFKalendar"></FKalendar>
    </div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import FKalendar from '../components/FKalendar/FKalendar'
  export default {
    name: 'schedule',
    data() {
      return {
        FHeaderCfg: {
          title: '选择日期和人数'
        },
        FKalendarCfg: []
      }
    },
    created() {
      let _this = this
      setTimeout(function() {
        _this.FKalendarCfg = [
          {
            price: 10,
            allowance: 0,
            time: '2018-08-22'
          },
          {
            price: 360,
            allowance: 10,
            time: '2018-08-23'
          },
          {
            price: 100,
            allowance: 6,
            time: '2018-08-24'
          },
          {
            price: 120,
            allowance: 15,
            time: '2018-08-26'
          },
          {
            price: 300,
            allowance: 25,
            time: '2018-08-29'
          },
          {
            price: 500,
            allowance: 1,
            time: '2018-09-01'
          },
        ]
      }, 200)
    },
    methods: {
      resFKalendar(time) {
        console.log(time);
      }
    },
    components: {
      FHeader,
      FKalendar
    }
  }
</script>