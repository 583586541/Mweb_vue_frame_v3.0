<template>
  <div class="album-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <ul class="clearfix">
        <li v-for="(list, index) in thumbnails" v-bind:key="list.id" @click="seeImgZoom(index)">
          <img :src="list" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'album',
    data() {
      return {
        FHeaderCfg: {
          title: '相册'
        },
        thumbnails: [],
      }
    },
    created() {
      let _this = this

      setTimeout(function () {
        _this.tailor([
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471589386361552.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471610801337121.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471619631454231.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471630905765623.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471637782772625.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471644966301223.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471652420162237.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471659359450747.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471666400140663.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471673847553720.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471691916163374.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471700229462437.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471709146356773.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471716496161432.jpg',
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471723900535567.jpg'
        ])
      }, 200)
    },
    methods: {
      tailor(data) {
        let _this = this

        data.forEach(function(list) {
          _this.thumbnails.push(list + '?x-oss-process=image/crop,x_165,y_0,w_420,h_420')
        })
      },
      seeImgZoom(i) {
        this.$router.push({
          path: '/imgZoom',
          query: {
            id: i
          }
        })
      }
    },
    components: {
      FHeader
    }
  }
</script>