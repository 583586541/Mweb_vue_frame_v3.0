<template>
  <div class="addUser-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <div class="user-name">
        <div class="mod-title">游客姓名</div>
        <div class="FCell">
          <div class="key">中文姓名</div>
          <div class="val">
            <input class="input" type="text" placeholder="请输入中文姓名" v-model.trim="cnName">
            <span class="icon empty" v-show="cnName" @click="cnName = ''"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">姓（拼音）</div>
          <div class="val">
            <input class="input" type="text" placeholder="请输入姓拼音自动转为英文大写" v-model.trim="usXing">
            <span class="icon empty" v-show="usXing" @click="usXing = ''"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">名（拼音）</div>
          <div class="val">
            <input class="input" type="text" placeholder="请输入名拼音自动转为英文大写" v-model.trim="usMing">
            <span class="icon empty" v-show="usMing" @click="usMing = ''"></span>
          </div>
        </div>
      </div>
      <div class="card-info">
        <div class="mod-title">证件信息</div>
        <div class="FCell">
          <div class="key">证件类型</div>
          <div class="val" @click="changeCardType">
            <span :class="['text', { 'placeholder': !cardTypeSelectCfg.checked.name }]">{{
              cardTypeSelectCfg.checked.name }}</span>
            <span class="icon more"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">证件号码</div>
          <div class="val">
            <input class="input" type="text" placeholder="请输入证件号码" v-model.trim="cardId">
            <span class="icon empty" v-show="cardId" @click="cardId = ''"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">国籍</div>
          <div class="val">
            <span class="text">中国大陆</span>
          </div>
        </div>
      </div>
      <div class="other-info">
        <div class="mod-title">其他信息</div>
        <div class="FCell">
          <div class="key">性别</div>
          <div class="val" @click="changeSexType">
            <span :class="['text', { 'placeholder': !sexTypeSelectCfg.checked.name }]">{{ sexTypeSelectCfg.checked.name
              }}</span>
            <span class="icon more"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">出生日期</div>
          <div class="val" @click="FCalendarCfg.state = true">
            <span :class="['text', { 'placeholder': !FCalendarCfg.value }]">{{ FCalendarCfg.value ? FCalendarCfg.value
              : '请选择出生日期' }}</span>
            <span class="icon more"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">客户类型</div>
          <div class="val" @click="changeVocationType">
            <span :class="['text', { 'placeholder': !vocationTypeSelectCfg.checked.name }]">{{
              vocationTypeSelectCfg.checked.name }}</span>
            <span class="icon more"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">手机号码</div>
          <div class="val">
            <input class="input" type="tel" maxlength="11" placeholder="请输入手机号码" v-model.trim="iphone">
            <span class="icon empty" v-show="iphone" @click="iphone = ''"></span>
          </div>
        </div>
      </div>
      <p class="des">*为了保障您的出行顺利，请确保旅行结束日期至少比证件有效期早6个月，并准确填写真实信息</p>
    </div>
    <footer>
      <div class="complete">保存</div>
    </footer>
    <FSelect :config="cardTypeSelectCfg" v-on:close="cardTypeSelectCfg.state = false" v-on:res="resCardType"></FSelect>
    <FSelect :config="sexTypeSelectCfg" v-on:close="sexTypeSelectCfg.state = false" v-on:res="resSex"></FSelect>
    <FCalendar :config="FCalendarCfg" v-on:close="FCalendarCfg.state = false" v-on:res="resFCalendar"></FCalendar>
    <FSelect :config="vocationTypeSelectCfg" v-on:close="vocationTypeSelectCfg.state = false" v-on:res="resVocation"></FSelect>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import FSelect from '../components/FSelect/FSelect'
  import FCalendar from '../components/FCalendar/FCalendar'
  export default {
    name: 'addUser',
    data() {
      return {
        FHeaderCfg: {
          title: '新增出行人'
        },
        cardTypeSelectCfg: {
          state: false,
          items: [{
              name: '护照',
              code: 1
            },
            {
              name: '身份证',
              code: 2
            },
            {
              name: '军官证',
              code: 3
            },
            {
              name: '港澳通行证',
              code: 4
            },
            {
              name: '台湾通行证',
              code: 5
            },
            {
              name: '其他',
              code: 6
            }
          ],
          checked: {
            code: 1,
            name: '护照'
          }
        },
        sexTypeSelectCfg: {
          state: false,
          items: [{
              name: '男',
              code: 1
            },
            {
              name: '女',
              code: 2
            }
          ],
          checked: {
            code: 1,
            name: '男'
          }
        },
        vocationTypeSelectCfg: {
          state: false,
          items: [{
              name: '在职',
              code: 1
            },
            {
              name: '自由职业',
              code: 2
            },
            {
              name: '在校学生',
              code: 3
            },
            {
              name: '退休',
              code: 4
            },
            {
              name: '学龄前儿童',
              code: 5
            }
          ],
          checked: {
            code: 1,
            name: '在职'
          }
        },
        FCalendarCfg: {
          state: false,
          value: '',
          start: '',
          end: this.$.getThatDay(0)
        },
        cnName: '',
        usXing: '',
        usMing: '',
        cardId: '',
        iphone: ''
      }
    },
    methods: {
      changeCardType() {
        Object.assign(this.cardTypeSelectCfg, {
          state: true,
        })
      },
      changeSexType() {
        Object.assign(this.sexTypeSelectCfg, {
          state: true,
        })
      },
      changeVocationType() {
        Object.assign(this.vocationTypeSelectCfg, {
          state: true,
        })
      },
      resCardType(item) {
        let _this = this
        _this.$set(_this.cardTypeSelectCfg, 'checked', item)

        _this.$nextTick(function () {
          _this.$set(_this.cardTypeSelectCfg, 'state', false)
        })
      },
      resSex(item) {
        let _this = this
        _this.$set(_this.sexTypeSelectCfg, 'checked', item)

        _this.$nextTick(function () {
          _this.$set(_this.sexTypeSelectCfg, 'state', false)
        })
      },
      resVocation(item) {
        let _this = this
        _this.$set(_this.vocationTypeSelectCfg, 'checked', item)

        _this.$nextTick(function () {
          _this.$set(_this.vocationTypeSelectCfg, 'state', false)
        })
      },
      resFCalendar(res) {
        this.$set(this.FCalendarCfg, 'value', res.time)
      }
    },
    components: {
      FHeader,
      FSelect,
      FCalendar
    }
  }
</script>