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
    </div>

    <FAlert :config="FAlertCfg" v-on:close="FAlertCfg.state = false"></FAlert>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import FAlert from '../components/FAlert/FAlert'
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
        }
      }
    },
    components: {
      FHeader,
      FAlert
    }
  }
</script>