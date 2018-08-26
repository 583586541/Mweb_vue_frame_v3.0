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

      <div class="instant-confirmation">
        <span class="checkbox"></span>
        <div class="cont">
          <div class="name">即时确认</div>
          <div class="des">本产品付款后快速确认资源，放心期待哦您的出行本产品付款后快速确认资源，放心期待行</div>
        </div>
      </div>

      <div class="passenger-info"></div>

    </div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'fillOrder',
    data() {
      return {
        FHeaderCfg: {
          title: '填写信息'
        }
      }
    },
    components: {
      FHeader
    }
  }
</script>