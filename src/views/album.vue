<template>
  <div class="album-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <ul class="clearfix">
        <li v-for="(list, index) in thumbnails" v-bind:key="list.id" @click="previewer(index)">
          <img :src="list.imgUrl" :alt="list.imgName">
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
      let list = this.$.stGet('album')

      if (!list || this.$.isEmptyArr(list)) {
        this.$router.push('/routerLost')
        return
      }

      this.tailor(list)
    },
    mounted() {
      this.FReturnTopCfg = this.$refs.vBody
    },
    methods: {
      tailor(data) {
        let _this = this, OSSPATH = _this.api.OSSPATH, imgs = [], desc = []

        data.forEach(function (list) {
          _this.thumbnails.push({
            imgUrl: OSSPATH + list.imgUrl + '?x-oss-process=image/crop,w_420,h_420',
            imgName: list.imgName
          })

          imgs.push(OSSPATH + list.imgUrl)
          desc.push(list.imgDescribe)
        })

        Object.assign(_this.FPreviewerCfg, {
          imgs: imgs,
          desc: desc
        })
      },
      previewer(index) {
        let _this = this

        Object.assign(_this.FPreviewerCfg, {
          state: true,
          activeIndex: index
        })
      }
    },
    components: {
      FHeader,
      FReturnTop,
      FPreviewer
    }
  }
</script>