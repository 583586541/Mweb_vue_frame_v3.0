<template>
  <div class="schedule-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <div class="FKalendar">
        <div class="FKalendar-tpl">
          <div class="details">{{ kalendarCfg.sCache.year }}年{{ $.complement(kalendarCfg.sCache.month + 1) }}月</div>
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
            's-checked': item.usable && item.time == kalendarCfg.sValue,
          }"
            v-for="item in kalendarItems" v-bind:key="item.id">
            <div class="surplus" v-if="item.usable && item.surplus <= 10">余{{ item.surplus }}</div>
            <div class="date" @click="kalendarRes(item)">{{ item.date }}</div>
            <div class="price" v-if="item.usable">&yen;{{ item.price }}</div>
          </li>
        </ul>
      </div>

      <div class="detail">
        <div class="date">{{ $.complement(kalendarCfg.sCache.month + 1) }}月{{ $.complement(kalendarCfg.sCache.date)
          }}日出发</div>
        <div class="adult">
          <div class="key">成人数量</div>
          <div class="FControlQuantity">
            <div :class="['reduce', { 'disabled': !adultNumber }]" @click="reduceQuantity('adultNumber')"></div>
            <input class="number" disabled type="text" v-model.trim="adultNumber">
            <div :class="['add', { 'disabled': adultNumber == 99 }]" @click="addQuantity('adultNumber')"></div>
          </div>
        </div>
        <div class="child">
          <div class="key">儿童数量</div>
          <div class="FControlQuantity">
            <div :class="['reduce', { 'disabled': !childNumber }]" @click="reduceQuantity('childNumber')"></div>
            <input class="number" disabled type="text" v-model.trim="childNumber">
            <div :class="['add', { 'disabled': childNumber == 99 }]" @click="addQuantity('childNumber')"></div>
          </div>
        </div>
        <div class="tips">
          <ul>
            <li>
              <em></em>
              <span>由于个资源价格实时更新，成人、儿童价格以订单结算页价格为准由于个资源价格实时更新，成人、儿童价格以订单结算页价格为准</span>
            </li>
            <li>
              <em></em>
              <span>由于个资源价格实时更新，成人、儿童价格以订单结算页价格为准由于个资源价格实时更新，成人、儿童价格以订单结算页价格为准</span>
            </li>
          </ul>
          <div class="des">*以上价格均为人均价格</div>
        </div>
      </div>
    </div>

    <footer>
      <div class="tool">
        <div class="price">
          <span>总额
            <em>￥</em>
          </span>99999.99</div>
        <div v-if="$.isAppClient()" class="kf" @click="serviceCfg.state = true">
          <em class="icon"></em>
          <span>在线客服</span>
        </div>
        <div v-else class="kf">
          <a href="Tel:19959522028">
            <em class="icon"></em>
            <span>在线客服</span>
          </a>
        </div>
      </div>
      <input :class="{ 'disabled': !adultNumber && !childNumber }" type="button" value="下一步" @click="goNext">
    </footer>

    <transition name="fade">
      <section class="FSelect service-mod" v-if="serviceCfg.state">
        <div class="FSelect-mask" @click="serviceCfg.state = false"></div>
        <div class="FSelect-wrap">
          <div class="FSelect-body">
            <ul ref="items">
              <li class="telephone">
                <a href="Tel:19959522028">
                  <em></em>语音通话</a>
              </li>
              <li class="artificial" @click="$.mutualToApp({ project: 'appNb', password: 'nb', param: { jiba: '18cm' }})">
                <em></em>在线客服
              </li>
            </ul>
          </div>
          <div class="FSelect-close" @click="serviceCfg.state = false">取消</div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'schedule',
    data() {
      return {
        FHeaderCfg: {
          title: '选择日期和人数'
        },
        serviceCfg: {
          state: false
        },
        kalendarCfg: {
          asyncData: [],
          sValue: '',
          sCache: {},
        },
        kalendarItems: [],
        adultNumber: 1,
        childNumber: 0
      }
    },
    created() {
      let _this = this

      setTimeout(function () {
        _this.handleData([{
            time: '2018-08-26',
            price: 500,
            surplus: 3
          },
          {
            time: '2018-08-27',
            price: 510,
            surplus: 23
          },
          {
            time: '2018-08-29',
            price: 100,
            surplus: 1
          },
          {
            time: '2018-08-30',
            price: 1510,
            surplus: 280
          },
          {
            time: '2018-08-31',
            price: 15,
            surplus: 20
          },
          {
            time: '2018-09-01',
            price: 200,
            surplus: 18
          },
          {
            time: '2018-09-02',
            price: 220,
            surplus: 3
          },
          {
            time: '2018-09-10',
            // price: 220,
            surplus: 300
          },
          {
            time: '2018-09-11',
            price: 10,
            surplus: 0
          },
        ])
      }, 16)
    },
    methods: {
      handleData(data) {
        let _this = this,
          arr = []
        data.forEach(item => {
          if (item.surplus && item.price) {
            arr.push(item)
          }
        })
        let sValue = arr[0].time
        Object.assign(_this.kalendarCfg, {
          sValue: sValue,
          asyncData: arr
        })
        _this.kalendarInit(sValue)
      },
      kalendarInit(sValue) {
        let _this = this
        Object.assign(_this.kalendarCfg, {
          sCache: _this.$.splitDay(sValue)
        })
        _this.prevMonthTpl()
      },
      prevMonthTpl() {
        let _this = this,
          $ = _this.$,
          year = _this.kalendarCfg.sCache.year,
          month = _this.kalendarCfg.sCache.month,
          date = _this.kalendarCfg.sCache.date

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
          asyncData = _this.kalendarCfg.asyncData,
          year = _this.kalendarCfg.sCache.year,
          month = _this.kalendarCfg.sCache.month + 1,
          date = _this.kalendarCfg.sCache.date

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
              for (let t = 0; t < asyncData.length; t++) {
                if (time == asyncData[t].time) {
                  Object.assign(record, {
                    usable: true
                  }, asyncData[t])
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
          year = _this.kalendarCfg.sCache.year,
          month = _this.kalendarCfg.sCache.month + 1,
          date = _this.kalendarCfg.sCache.date
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
        _this.kalendarItems = data.concat(items)
      },
      jumpPrevMonth() {
        let _this = this,
          year = _this.kalendarCfg.sCache.year,
          month = _this.kalendarCfg.sCache.month

        month--
        if (month < 0) {
          month = 11
          year--
        }
        Object.assign(_this.kalendarCfg.sCache, {
          year: year,
          month: month
        })
        _this.prevMonthTpl()
      },
      jumpNextMonth() {
        let _this = this,
          year = _this.kalendarCfg.sCache.year,
          month = _this.kalendarCfg.sCache.month

        month++
        if (month > 11) {
          month = 0
          year++
        }
        Object.assign(_this.kalendarCfg.sCache, {
          year: year,
          month: month
        })
        _this.prevMonthTpl()
      },
      kalendarRes(item) {
        let _this = this

        if (!item.usable) {
          return
        }
        Object.assign(_this.kalendarCfg, {
          sValue: item.time,
          sCache: _this.$.splitDay(item.time)
        })
      },
      reduceQuantity(key) {
        let _this = this,
          that = _this[key]
        if (!that) {
          return
        }
        _this[key]--
      },
      addQuantity(key) {
        let _this = this,
          that = _this[key]
        if (that == 99) {
          return
        }
        _this[key]++
      },
      goNext() {
        let _this = this

        if (!_this.adultNumber && !_this.childNumber) {
          return
        }

        _this.$router.push('/resource')
      }
    },
    components: {
      FHeader
    }
  }
</script>