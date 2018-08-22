<template>
  <div class="FKalendar">
    <div class="FKalendar-tpl">
      <div class="details">{{ cache.year }}年{{ $.complement(cache.month + 1) }}月</div>
      <div class="ctl-btn">
        <span class="prev" @click="jumpPrevMonth"></span>
        <span class="next" @click="jumpNextMonth"></span>
      </div>
    </div>
    <ul class="FKalendar-week-items">
      <li>日</li>
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
    </ul>
    <ul class="FKalendar-date-items clearfix">
      <li :class="{
        'disabled': !item.usable,
        'checked': item.usable && item.time == value
      }" v-for="item in dateItems" v-bind:key="item.id" @click="res(item)">
        <div class="allowance" v-if="item.allowance <= 10">余{{ item.allowance }}</div>
        <div class="date">{{ item.date }}</div>
        <div class="price">&yen;{{ item.price }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['config'],
    data() {
      return {
        dateItems: [],
        value: '',
        cache: {}
      }
    },
    methods: {
      init() {
        let _this = this, config = _this.config

        for (let i = 0; i < config.length; i++) {
          if (config[i].allowance && config[i].price) {
            _this.value = config[i].time
            break
          }
        }

        _this.value = _this.value ? _this.value : _this.$.getThatDay(1)
        _this.cache = _this.$.splitDay(_this.value)
        _this.$emit('res', _this.value)
        _this.prevMonthTpl()
      },
      prevMonthTpl() {
        let _this = this,
          $ = _this.$,
          year = _this.cache.year,
          month = _this.cache.month,
          date = _this.cache.date
          
        let leng = new Date(year, month, 1).getDay()
        if (leng == 0) {
          leng = 7
        }
        if (month == 0) {
          month = 12
          year--
        }
        let dates = new Date(year, month, 0).getDate(),
          items = []
        month = $.complement(month)
        for (let i = (dates - leng); i < dates; i++) {
          items.push({
            date: i + 1,
            time: year + '-' + month + '-' + $.complement(i + 1),
            usable: false
          })
        }
        _this.thisMonthTpl(items)
      },
      thisMonthTpl(data) {
        let _this = this,
          $ = _this.$,
          config = _this.config,
          year = _this.cache.year,
          month = _this.cache.month + 1,
          date = _this.cache.date

        let dates = new Date(year, month, 0).getDate(),
          items = []
        month = $.complement(month)

        outer:
        for (let i = 0; i < dates; i++) {
          let time = year + '-' + month + '-' + $.complement(i + 1)
          let record = {
            date: i + 1,
            time: time,
            usable: false
          }
          inner:
          for (let c = 0; c < config.length; c++) {
            if (config[c].time == time && config[c].allowance) {
              Object.assign(record, { usable: true }, config[c])
              break inner
            }
          }
          items.push(record)
        }
        data = data.concat(items)
        _this.nextMonthTpl(data)
      },
      nextMonthTpl(data) {
        let _this = this,
          $ = _this.$,
          year = _this.cache.year,
          month = _this.cache.month + 1,
          date = _this.cache.date
        let leng = 42 - data.length
        if (month == 12) {
          month = 0
          year++
        }
        let items = []
        month = $.complement(month + 1)

        for (let i = 0; i < leng; i++) {
          items.push({
            date: i + 1,
            time: year + '-' + month + '-' + $.complement(i + 1),
            usable: false
          })
        }
        _this.dateItems = []
        _this.dateItems = data.concat(items)
      },
      jumpPrevMonth() {
        let _this = this,
          year = _this.cache.year,
          month = _this.cache.month

        month--
        if (month < 0) {
          month = 11
          year--
        }
        Object.assign(_this.cache, {
          year: year,
          month: month
        })
        _this.prevMonthTpl()
      },
      jumpNextMonth() {
        let _this = this,
          year = _this.cache.year,
          month = _this.cache.month

        month++
        if (month > 11) {
          month = 0
          year++
        }
        Object.assign(_this.cache, {
          year: year,
          month: month
        })
        _this.prevMonthTpl()
      },
      res(item) {
        let _this = this

        if (!item.usable) {
          return
        }
        
        _this.value = item.time
        _this.cache = _this.$.splitDay(_this.value)
        _this.$emit('res', _this.value)
      }
    },
    watch: {
      config() {
        this.init()
      }
    }
  }
</script>