<template>
  <div class="FKalendar">
    <div class="FKalendar-tpl">
      <div class="details">{{ sCache.year }}年{{ $.complement(sCache.month + 1) }}月</div>
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
        's-checked': item.usable && item.time == config.sValue,
        'e-checked': item.usable && !config.onceClick && item.time == config.eValue,
        'period': !config.onceClick && item.period
      }" v-for="item in dateItems" v-bind:key="item.id">
        <div class="tip" v-if="item.usable && !config.onceClick && countClick == 2 && item.time == config.sValue">请选择结束时间</div>
        <div class="date" @click="res(item)">{{ item.date }}</div>
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
        sCache: {},
        countClick: 1
      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        let _this = this,
          sValue = _this.config.sValue

        _this.sCache = _this.$.splitDay(sValue)
        _this.prevMonthTpl()
      },
      prevMonthTpl() {
        let _this = this,
          $ = _this.$,
          year = _this.sCache.year,
          month = _this.sCache.month,
          date = _this.sCache.date

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
          year = _this.sCache.year,
          month = _this.sCache.month + 1,
          date = _this.sCache.date,
          start = _this.config.start,
          end = _this.config.end

        let dates = new Date(year, month, 0).getDate(),
          items = []
        month = $.complement(month)

        for (let i = 0; i < dates; i++) {
          let time = year + '-' + month + '-' + $.complement(i + 1)
          let record = {
            date: i + 1,
            time: time,
            usable: true
          }
          if (start && start > time || end && end < time) {
            Object.assign(record, {
              usable: false
            })
          }
          items.push(record)
        }
        data = data.concat(items)
        _this.nextMonthTpl(data)
      },
      nextMonthTpl(data) {
        let _this = this,
          $ = _this.$,
          year = _this.sCache.year,
          month = _this.sCache.month + 1,
          date = _this.sCache.date
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

        if (!_this.config.onceClick) {
          _this.addPeriodState()
        }
      },
      jumpPrevMonth() {
        let _this = this,
          year = _this.sCache.year,
          month = _this.sCache.month

        month--
        if (month < 0) {
          month = 11
          year--
        }
        Object.assign(_this.sCache, {
          year: year,
          month: month
        })
        _this.prevMonthTpl()
      },
      jumpNextMonth() {
        let _this = this,
          year = _this.sCache.year,
          month = _this.sCache.month

        month++
        if (month > 11) {
          month = 0
          year++
        }
        Object.assign(_this.sCache, {
          year: year,
          month: month
        })
        _this.prevMonthTpl()
      },
      res(item) {
        let _this = this,
          config = _this.config
        // 不可点击
        if (!item.usable) {
          return
        }
        // 单选
        if (config.onceClick) {
          _this.$emit('res', item.time, null)
          return
        }
        // 双选
        if (_this.countClick == 1) {
          _this.countClick = 2
          _this.$emit('res', item.time, '')
          _this.delPeriodState()
        } else {
          if (item.time < config.sValue) {
            _this.countClick = 2
            _this.$emit('res', item.time, '')
          } else {
            _this.countClick = 1
            _this.$emit('res', config.sValue, item.time)
            _this.addPeriodState()
          }
        }
      },
      addPeriodState() {
        let _this = this,
          sValue = _this.config.sValue,
          eValue = _this.config.eValue
        _this.dateItems.forEach(function (item, i) {
          if (item.usable && item.time > sValue && item.time < eValue) {
            Object.assign(_this.dateItems[i], {
              period: true
            })
          } else {
            Object.assign(_this.dateItems[i], {
              period: false
            })
          }
        })
      },
      delPeriodState() {
        let _this = this
        _this.dateItems.forEach(function (item, i) {
          Object.assign(_this.dateItems[i], {
            period: false
          })
        })
      }
    }
  }
</script>