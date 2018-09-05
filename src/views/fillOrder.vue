<template>
  <div class="fillOrder-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>

    <div class="v-body" ref="vBody">

      <div class="pdt-detail">
        <div class="mod-name">产品信息</div>
        <div class="detail">
          <div class="pdt-name">里是产品名称可以多行全展里是产品</div>
          <div class="passenger-date clearfix">
            <span class="date">07月27日出发</span>
            <span class="adult">4成人</span>
            <span class="child">1儿童</span>
          </div>
        </div>
      </div>

      <div class="instant-confirmation" v-if="false">
        <span class="checkbox"></span>
        <div class="cont">
          <div class="name">即时确认</div>
          <div class="des">本产品付款后快速确认资源，放心期待哦您的出行本产品付款后快速确认资源，放心期待行</div>
        </div>
      </div>

      <div class="passenger-info">
        <div class="mod-name"><span>出行人信息</span><span class="limit" @click="FAlertCfg.state = true">预订限制</span></div>
        <ul class="user-list">
          <li class="clearfix">
            <span class="type fl">成人</span>
            <span class="name fl">二狗子 GOUZI/ER</span>
            <span class="more fr"></span>
          </li>
        </ul>
        <div class="add-user">
          <span @click="$router.push('/selectUser')">选择出行人</span>
        </div>
        <div class="change-user">
          <span>更换出行人</span>
        </div>
        <div class="des">为了您顺利出行，请务必保证填写项与出游所持证件一致</div>
      </div>

      <div class="contacts-info">
        <div class="mod-name">联系人信息</div>
        <div class="FCell">
          <div class="key">姓名</div>
          <div class="val">
            <input class="input" type="text" placeholder="请输入联系人姓名" v-model.trim="contactsName">
            <span class="icon empty" v-show="contactsName" @click="contactsName = ''"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">手机号码</div>
          <div class="val">
            <input class="input" type="tel" maxlength="11" placeholder="请输入手机号码" v-model.trim="contactsIphone">
            <span class="icon empty" v-show="contactsIphone" @click="contactsIphone = ''"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">电子邮箱</div>
          <div class="val">
            <input class="input" type="text" placeholder="请输入邮箱，用于接收出团通知书" v-model.trim="contactsEmail">
            <span class="icon empty" v-show="contactsEmail" @click="contactsEmail = ''"></span>
          </div>
        </div>

      </div>

      <div class="other">
        <div class="FCell">
          <div class="key">优惠券</div>
          <div class="val" @click="changeCouponType">
            <span :class="['text', { 'placeholder': !couponTypeSelectCfg.checked.name }]">{{
              couponTypeSelectCfg.checked.name }}</span>
            <span class="icon more"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">发票</div>
          <div class="val" @click="$router.push('/invoice')">
            <span :class="['text', { 'placeholder': !coupon }]">{{ coupon ? coupon : '请输入发票信息' }}</span>
            <span class="icon more"></span>
          </div>
        </div>
        <div class="FCell">
          <div class="key">特殊需求</div>
          <div class="val"  @click="$router.push('/specialNeeds')">
            <span :class="['text', { 'placeholder': !specialNeeds }]">{{ specialNeeds ? specialNeeds : '请输入特殊需求' }}</span>
            <span class="icon more"></span>
          </div>
        </div>
      </div>

    </div>

    <footer>
      <div class="tool">
        <div class="price">
          <span>
            <em>￥</em>
          </span>99999.99
        </div>
        <div :class="['detail', {'show-state': priceDetail.state }]" @click="priceDetail.state = !priceDetail.state">
          <span>明细</span><em class="icon"></em>
        </div>
      </div>
      <input type="button" value="去支付" @click="1">
    </footer>

    <FAlert :config="FAlertCfg" v-on:close="FAlertCfg.state = false"></FAlert>
    <FSelect :config="couponTypeSelectCfg" v-on:close="couponTypeSelectCfg.state = false" v-on:res="resCouponType"></FSelect>
    <transition name="fade">
      <section class="detail-mod" v-if="priceDetail.state">
        <div class="mask" @click="priceDetail.state = false"></div>
        <div class="wrap">
          <div class="header">消费明细</div>
          <div class="body">
            <ul>
              <li>
                <span class="key">成人套餐</span>
                <span class="sum-price">&yen;45*4</span>
              </li>
              <li>
                <span class="key">儿童套餐</span>
                <span class="sum-price">&yen;45*4</span>
              </li>
              <li>
                <span class="key">房差价</span>
                <span class="sum-price">&yen;45*4</span>
              </li>
              <li>
                <span class="key">附加服务</span>
                <span class="sum-price">&yen;45*4</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </transition>
    <transition name="fade">
      <section class="fast-login" v-if="needLogin">
        <div class="mask"></div>
        <div class="wrap">
          <div class="header">快速登录</div>
          <div class="body">
            <div class="FCell">
              <div class="key login-iphone"></div>
              <div class="val">
                <input class="input" type="tel" maxlength="11" placeholder="请输入手机号码" v-model.trim="loginIphone">
                <span class="icon empty" v-show="loginIphone" @click="loginIphone = ''"></span>
              </div>
            </div>
            <div class="FCell Msg-code">
              <div class="key msg-code"></div>
              <div class="val">
                <input class="input" type="tel" maxlength="6" placeholder="请输入短信验证码" v-model.trim="loginMsgCode">
                <FMsgCode v-on:FClick="getRegisterCode" ref="FMsgCode"></FMsgCode>
              </div>
            </div>
            <p class="des">登录即表示同意<router-link to="/GVRP">《牛掰用户注册协议》</router-link>
            </p>
          </div>
          <div class="footer">
            <div>登录</div>
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
  import {
    md5
  } from 'vux'
  import FHeader from '../components/FHeader/FHeader'
  import FAlert from '../components/FAlert/FAlert'
  import FSelect from '../components/FSelect/FSelect'
  import FMsgCode from '../components/FMsgCode/FMsgCode'
  export default {
    name: 'fillOrder',
    data() {
      return {
        FHeaderCfg: {
          title: '填写信息'
        },
        FAlertCfg: {
          state: false,
          title: '预订限制',
          html: '的说法撒发生发生'
        },
        couponTypeSelectCfg: {
          state: false,
          items: [{
              name: '满100减20',
              code: 1
            },
            {
              name: '满1000减200',
              code: 2
            },
            {
              name: '满10000减2000',
              code: 3
            },
            {
              name: '满1减2',
              code: 4
            },
            {
              name: '满100减2',
              code: 5
            },
            {
              name: '满100减200',
              code: 6
            }
          ],
          checked: {
            code: 1,
            name: '满100减20'
          }
        },

        contactsName: '',
        contactsIphone: '',
        contactsEmail: '',
        coupon: '',
        specialNeeds: '',

        priceDetail: {
          state: false
        },

        needLogin: false,
        loginIphone: '',
        loginMsgCode: ''
      }
    },
    methods: {
      changeCouponType() {
        Object.assign(this.couponTypeSelectCfg, {
          state: true,
        })
      },
      resCouponType(item) {
        let _this = this
        _this.$set(_this.couponTypeSelectCfg, 'checked', item)

        _this.$nextTick(function () {
          _this.$set(_this.couponTypeSelectCfg, 'state', false)
        })
      },
      // 发送验证码
      async getRegisterCode() {
        let _this = this,
          $ = _this.$

        if (!$.regTest(_this.loginIphone, 'iphone')) {
          return
        }
        let res = await $.axiosPost({
          url: _this.api.getRegisterCode,
          param: {
            phone: _this.loginIphone,
            sign: md5(_this.loginIphone + 'nb').toUpperCase()
          },
          load: true
        })
        if (!res) {
          return
        }
        _this.$refs.FMsgCode.secondReduce()
      },
    },
    components: {
      FHeader,
      FAlert,
      FSelect,
      FMsgCode
    }
  }
</script>