<template>
  <div class="resource-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <div class="trip">
        <div class="mod-name">行程</div>
        <div class="detail">
          <div class="set-meal">14日游套餐</div>
          <div class="date">08月26号</div>
        </div>
      </div>

      <div class="mandatory">
        <div class="mod-name">必选</div>
        <div class="detail">
          <div class="combined-transport">联运段</div>
          <ul class="list">
            <li>您的出发城市（客人自行前往）—北京</li>
          </ul>
          <div class="subtotal">
            <span class="number">1份</span>
            <span class="univalent">
              <em>&yen;</em><strong>100</strong>/1份</span>
          </div>
        </div>
      </div>

      <div class="other-service">
        <div class="mod-name">其他服务</div>
        <ul class="list">
          <li v-for="item in otherService" v-bind:key="item.id">
            <span :class="['checkbox', { 'checked': item.state }]" @click="item.state = !item.state"></span>
            <div class="detail">{{ item.detail }}</div>
            <div class="right-side">
              <div class="price">
                <em>&yen;</em><strong>100</strong>/1份</span>
              </div>
              <div class="explain" @click="FRichTextPopupCfg.state = true">说明<em class="icon"></em></div>
            </div>
          </li>
        </ul>
      </div>

      <div class="room">
        <div class="mod-name">房间数</div>
        <div class="detail">
          <div class="key">需支付房差费<em>&yen;500</em></div>
          <div class="FControlQuantity">
            <div :class="['reduce', { 'disabled': !roomNumber }]" @click="reduceQuantity('roomNumber')"></div>
            <input class="number" disabled type="text" v-model.trim="roomNumber">
            <div :class="['add', { 'disabled': roomNumber == 99 }]" @click="addQuantity('roomNumber')"></div>
          </div>
        </div>
      </div>

      <div class="agreement">点击查看<router-link to="/index">《牛掰用户注册协议》</router-link>等重要内容</div>

    </div>

    <footer>
      <div class="tool">
        <div class="price">
          <span>
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
      <input type="button" value="下一步" @click="goNext">
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

    <FRichTextPopup :config="FRichTextPopupCfg" v-on:close="FRichTextPopupCfg.state = false"></FRichTextPopup>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import FRichTextPopup from '../components/FRichTextPopup/FRichTextPopup'
  export default {
    name: 'resource',
    data() {
      return {
        FHeaderCfg: {
          title: '选择资源'
        },
        serviceCfg: {
          state: false
        },
        FRichTextPopupCfg: {
          state: false,
          title: '标题',
          html: '测试文字'
        },
        otherService: [{
            state: true,
            detail: '这里是上产品时写的服务名称，可以多行全展示',
            price: '250',
            des: '这里是详细说明'
          },
          {
            state: true,
            detail: '这里是上产品时写的服务名称，可以多行全展示',
            price: '300',
            des: '这里是详细说明'
          },
          {
            state: true,
            detail: '这里是上产品时写的服务名称，可以多行全展示',
            price: '300',
            des: '这里是详细说明'
          },
          {
            state: true,
            detail: '这里是上产品时写的服务名称，可以多行全展示',
            price: '300',
            des: '这里是详细说明'
          },
          {
            state: true,
            detail: '这里是上产品时写的服务名称，可以多行全展示',
            price: '300',
            des: '这里是详细说明'
          },
        ],
        roomNumber: 1
      }
    },
    methods: {
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

        _this.$router.push('/fillOrder')
      }
    },
    components: {
      FHeader,
      FRichTextPopup
    }
  }
</script>