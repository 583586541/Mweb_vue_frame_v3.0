<template>
  <div class="aboutUs-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <h2>企业简介</h2>
      <p>广州牛掰旅游科技有限公司（以下简称牛掰旅游）于2017年11月15日正式注册成立。牛掰旅游以“纯玩品质旅游，悦享贴心服务”为服务宗旨，提供包含周边游、国内游、出境游等高质感纯玩的旅游服务，是针对当代旅行发烧友着力打造的在线个性化旅游定制平台。</p>
      <p>为满足现代旅游爱好者对旅游品质、服务和体验提出的更高要求，牛掰旅游向OTA平台发力，并不断拓展旅行产品服务，包括景点门票预订、机票预订、度假酒店预订等多个领域，致力于全方位提高用户的旅行体验，真正享受旅行的快乐。目前，牛掰旅游的注册会员已达一千万。</p>
      <h2>企业口号</h2>
      <p>品质旅游，就上牛掰</p>
      <h2>企业使命</h2>
      <p>优质旅游，创造快乐</p>
      <h2>经营理念</h2>
      <p>客户至上、求实创新、勇争一流、不断超越</p>
      <h2>企业文化</h2>
      <p>诚信为本：以诚信为基础，办实事、求实效；</p>
      <p>优质服务：以客户需求为导向，以服务赢市场；</p>
      <p>同心进取：做优秀团队，创更大价值；</p>
      <h2>企业优势</h2>
      <p>专业团队：高效运作，竭力打造精品旅游路线</p>
      <p>资源集中：利用互联网优势，深度整合上下游资源</p>
      <p>配套服务：客服全程贴心服务，出行无忧</p>
    </div>
    <FReturnTop :config="FReturnTopCfg"></FReturnTop>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import FReturnTop from '../components/FReturnTop/FReturnTop'
  export default {
    name: 'aboutUs',
    data() {
      return {
        FHeaderCfg: {
          title: '广州牛掰旅游科技有限公司'
        },
        FReturnTopCfg: {}
      }
    },
    mounted() {
      this.FReturnTopCfg = this.$refs.vBody
    },
    components: {
      FHeader,
      FReturnTop
    }
  }
</script>