<template>
  <div class="album-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <ul class="clearfix">
        <li v-for="list in thumbnails" v-bind:key="list.id" @click="previewer(list)">
          <img :src="list">
        </li>
      </ul>
    </div>
    <FReturnTop :config="FReturnTopCfg"></FReturnTop>
    <FPreviewer :config="FPreviewerCfg" v-on:close="FPreviewerCfg.state = false"></FPreviewer>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import FReturnTop from '../components/FReturnTop/FReturnTop'
  import FPreviewer from '../components/FPreviewer/FPreviewer'
  export default {
    name: 'album',
    data() {
      return {
        FHeaderCfg: {
          title: '相册'
        },
        FReturnTopCfg: {},
        FPreviewerCfg: {
          state: false
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
          'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471723900535567.jpg',
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
    mounted() {
      this.FReturnTopCfg = this.$refs.vBody
    },
    methods: {
      tailor(data) {
        let _this = this

        data.forEach(function (list) {
          _this.thumbnails.push(list + '?x-oss-process=image/crop,x_165,y_0,w_420,h_420')
        })
      },
      previewer(item) {
        let _this = this,
          imgIndex = Math.floor(Math.random() * 15)

        Object.assign(_this.FPreviewerCfg, {
          state: true,
          activeIndex: imgIndex,
          imgs: [
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
            'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471723900535567.jpg',
          ],
          desc: [
            '第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张',
            '第2张', '第3张', '第4张', '第5张', '第6张', '第7张', '', '第9张', '第10张', '第11张', '第12张', '第13张', '第14张',
            '第15张'
          ]
        })
      }
      // seeImgZoom(i) {
      //   this.$router.push({
      //     path: '/imgZoom',
      //     query: {
      //       id: i
      //     }
      //   })
      // }
    },
    components: {
      FHeader,
      FReturnTop,
      FPreviewer
    }
  }
</script>