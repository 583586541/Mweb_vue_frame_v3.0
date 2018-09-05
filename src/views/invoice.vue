<template>
  <div class="invoice-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">

      <div class="type">
        <div class="mod-name">发票类型</div>
        <div class="FCell">
          <div class="key">开具类型</div>
          <div class="val" @click="changeTargetType">
            <span :class="['text', { 'placeholder': !targetTypeSelectCfg.checked.name }]">{{
              targetTypeSelectCfg.checked.name }}</span>
            <span class="icon more"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">发票类型</div>
          <div class="val" @click="changeInvoiceType">
            <span :class="['text', { 'placeholder': !invoiceTypeSelectCfg.checked.name }]">{{
              invoiceTypeSelectCfg.checked.name }}</span>
            <span class="icon more"></span>
          </div>
        </div>
      </div>

      <div class="personal info" v-show="targetTypeSelectCfg.checked.code == 1">
        <div class="mod-name">发票信息</div>
        <div class="FCell">
          <div class="key">发票抬头</div>
          <div class="val">
            <input class="input" type="text" placeholder="请填写准确的抬头名称" v-model.trim="personal.title">
            <span class="icon empty" v-show="personal.title" @click="personal.title = ''"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">电话号码</div>
          <div class="val">
            <input class="input" type="tel" maxlength="11" placeholder="请输入有效的电话号码" v-model.trim="personal.iphone">
            <span class="icon empty" v-show="personal.iphone" @click="personal.iphone = ''"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">电子邮箱</div>
          <div class="val">
            <input class="input" type="text" placeholder="请输入有效的电子邮箱" v-model.trim="personal.email">
            <span class="icon empty" v-show="personal.email" @click="personal.email = ''"></span>
          </div>
        </div>
      </div>

      <div class="enterprise info" v-show="targetTypeSelectCfg.checked.code == 2">
        <div class="mod-name">发票信息</div>
        <div class="FCell">
          <div class="key">发票抬头</div>
          <div class="val">
            <input class="input" type="text" placeholder="请填写准确的抬头名称" v-model.trim="enterprise.title">
            <span class="icon empty" v-show="enterprise.title" @click="enterprise.title = ''"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">税务号</div>
          <div class="val">
            <input class="input" type="text" placeholder="请输入税务登记号" v-model.trim="enterprise.taxNumber">
            <span class="icon empty" v-show="enterprise.taxNumber" @click="enterprise.taxNumber = ''"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">单位地址</div>
          <div class="val">
            <input class="input" type="text" placeholder="请填写收票单位注册地址" v-model.trim="enterprise.address">
            <span class="icon empty" v-show="enterprise.address" @click="enterprise.address = ''"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">单位电话</div>
          <div class="val">
            <input class="input" type="text" placeholder="请填写单位电话号码" v-model.trim="enterprise.tel">
            <span class="icon empty" v-show="enterprise.tel" @click="enterprise.tel = ''"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">开户银行</div>
          <div class="val">
            <input class="input" type="text" placeholder="请填写收票单位的开户银行" v-model.trim="enterprise.bank">
            <span class="icon empty" v-show="enterprise.bank" @click="enterprise.bank = ''"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">银行账号</div>
          <div class="val">
            <input class="input" type="text" placeholder="请填写收票单位的银行账号" v-model.trim="enterprise.bankNum">
            <span class="icon empty" v-show="enterprise.bankNum" @click="enterprise.bankNum = ''"></span>
          </div>
        </div>
      </div>

    </div>

    <footer>
      <div class="complete">保存</div>
    </footer>

    <FSelect :config="targetTypeSelectCfg" v-on:close="targetTypeSelectCfg.state = false" v-on:res="resTargetType"></FSelect>
    <FSelect :config="invoiceTypeSelectCfg" v-on:close="invoiceTypeSelectCfg.state = false" v-on:res="resInvoiceType"></FSelect>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import FSelect from '../components/FSelect/FSelect'
  export default {
    name: 'invoice',
    data() {
      return {
        FHeaderCfg: {
          title: '编辑发票信息'
        },
        targetTypeSelectCfg: {
          state: false,
          items: [{
              name: '个人',
              code: 1
            },
            {
              name: '企业',
              code: 2
            },
          ],
          checked: {
            code: 1,
            name: '个人'
          }
        },
        invoiceTypeSelectCfg: {
          state: false,
          items: [{
              name: '增值税普通发票',
              code: 1
            }
          ],
          checked: {
            code: 1,
            name: '增值税普通发票'
          }
        },

        personal: {
          title: '',
          iphone: '',
          email: ''
        },

        enterprise: {
          title: '',
          taxNumber: '',
          address: '',
          tel: '',
          bank: '',
          bankNum: ''
        }
      }
    },
    methods: {
      changeTargetType() {
        Object.assign(this.targetTypeSelectCfg, {
          state: true,
        })
      },
      changeInvoiceType() {
        Object.assign(this.invoiceTypeSelectCfg, {
          state: true,
        })
      },
      resTargetType(item) {
        let _this = this
        _this.$set(_this.targetTypeSelectCfg, 'checked', item)

        _this.$nextTick(function () {
          _this.$set(_this.targetTypeSelectCfg, 'state', false)
        })
      },
      resInvoiceType(item) {
        let _this = this
        _this.$set(_this.invoiceTypeSelectCfg, 'checked', item)

        _this.$nextTick(function () {
          _this.$set(_this.invoiceTypeSelectCfg, 'state', false)
        })
      }
    },
    components: {
      FHeader,
      FSelect
    }
  }
</script>