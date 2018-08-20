<template>
  <transition name="fade">
    <section class="FCalendar" v-if="config.state">
      <div class="FCalendar-mask" @click="close"></div>
      <div class="FCalendar-wrap">
        <div class="FCalendar-body">
          <div class="date-modular" v-show="operateModular == 0">
            <div class="FCalendar-header">
              <div class="prev">
                <span class="prev-month" @click="jumpPrevMonth"></span>
              </div>
              <div class="year-month" @click="showYearModular">{{ cache.year }}年{{ $.complement(cache.month + 1) }}月</div>
              <div class="next">
                <span class="next-month" @click="jumpNextMonth"></span>
              </div>
            </div>
            <ul class="FCalendar-week-list">
              <li>日</li>
              <li>一</li>
              <li>二</li>
              <li>三</li>
              <li>四</li>
              <li>五</li>
              <li>六</li>
            </ul>
            <ul class="FCalendar-date-list clearfix">
              <li :class="{
              'disabled': !item.usable,
              'checked': config.value == item.time
            }" v-for="item in items" v-bind:key="item.id">
                <div class="date" @click="res(item)">{{ item.date }}</div>
              </li>
            </ul>
          </div>
          <div class="year-modular" v-show="operateModular == 1">
            <div class="FCalendar-header">
              <div class="prev">
                <span class="prev-years" @click="jumpPrevYears"></span>
              </div>
              <div class="year-month">{{ yearItems[0] }} - {{ yearItems[11] }}</div>
              <div class="next">
                <span class="next-years" @click="jumpNextYears"></span>
              </div>
            </div>
            <ul class="FCalendar-year-items clearfix">
              <li :class="{ 'checked': item == cache.year }" v-for="item in yearItems" v-bind:key="item.id">
                <div @click="showMonthModular(item)">{{ item }}</div>
              </li>
            </ul>
          </div>
          <div class="month-modular" v-show="operateModular == 2">
            <div class="FCalendar-header">
              <div class="prev">
                <span class="prev-year" @click="jumpPrevYear"></span>
              </div>
              <div class="year-month">{{ cache.year }}年</div>
              <div class="next">
                <span class="next-year" @click="jumpNextYear"></span>
              </div>
            </div>
            <ul class="FCalendar-month-items clearfix">
              <li :class="{ 'checked': index == cache.month  }" v-for="(item, index) in monthItems" v-bind:key="item.id">
                <div @click="showDateModular(index)">{{ item }}</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="FCalendar-close" @click="close">取消</div>
      </div>
    </section>
  </transition>
</template>

<script>
  export default {
    props: ['config'],
    data() {
      return {
        value: String,
        cache: {},
        items: [],
        yearItems: [],
        monthItems: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        operateModular: 0
      }
    },
    computed: {
      state() {
        return this.config.state
      }
    },
    methods: {
      init() {
        let _this = this,
          value = _this.config.value

        _this.value = value ? value : _this.$.getThatDay(0)
        _this.cache = _this.$.splitDay(_this.value)

        _this.prevMonthTpl()
      },
      createYearItems(year) {
        let _this = this

        let residue = year % 12
        residue = residue ? residue - 1 : 11

        let items = []

        for (let i = 0; i < residue; i++) {
          items.unshift(year - i - 1)
        }
        items.push(year)

        let leng = 12 - items.length
        for (let i = 0; i < leng; i++) {
          items.push(year + i + 1)
        }
        _this.yearItems = []
        _this.yearItems = items
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
          year = _this.cache.year,
          month = _this.cache.month + 1,
          date = _this.cache.date,
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
        _this.items = []
        _this.items = data.concat(items)
      },
      jumpPrevYear() {
        let _this = this,
          year = _this.cache.year

        year--
        Object.assign(_this.cache, {
          year: year
        })
        _this.prevMonthTpl()
      },
      jumpNextYear() {
        let _this = this,
          year = _this.cache.year

        year++
        Object.assign(_this.cache, {
          year: year
        })
        _this.prevMonthTpl()
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
      jumpPrevYears() {
        let _this = this
        _this.createYearItems(_this.yearItems[0] - 1)
      },
      jumpNextYears() {
        let _this = this
        _this.createYearItems(_this.yearItems[11] + 1)
      },
      showYearModular() {
        let _this = this

        _this.createYearItems(_this.cache.year)
        _this.operateModular = 1
      },
      showMonthModular(item) {
        let _this = this
        Object.assign(_this.cache, {
          year: item
        })
        _this.operateModular = 2
      },
      showDateModular(i) {
        let _this = this
        Object.assign(_this.cache, {
          month: i
        })
        _this.operateModular = 0
        _this.prevMonthTpl()
      },
      close() {
        this.$emit('close')
      },
      res(item) {
        let _this = this
        if (!item.usable) {
          return
        }
        _this.close()
        _this.$emit('res', item)
      }
    },
    watch: {
      state(val) {
        if (val) {
          this.init()
          this.operateModular = 0
        }
      }
    }
  }
</script>