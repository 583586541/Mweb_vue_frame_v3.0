/**
 * 引入
 */
// import weixinShare from '../assets/js/weixinShare'

/**
 * 验签&自定义分享
 */
// weixinShare.weixinSign({
//   url: this.api.wechatSign,
//   param: {
//     url: document.location.href
//   },
//   load: true,
//   custom: {
//     title: 'HTML5移动端开发框架v3.0',
//     desc: 'Author: Junbing Fu, Last update: 2018/08/08',
//     link: document.location.href,
//     imgUrl: 'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1528880799157105466.jpeg'
//   }
// })
import Vue from 'vue'
import {
  WechatPlugin
} from 'vux'
Vue.use(WechatPlugin)

import fn from './fn'
export default {
  async weixinSign(data) {
    if (!fn.isWeixinClient()) {
      return false
    }
    fn.correctWeixinShareHref()
    let res = await fn.axiosPost(data)
    if (!res) {
      return
    }
    Vue.wechat.config({
      debug: false,
      appId: res.data.appid,
      timestamp: res.data.timestamp,
      nonceStr: res.data.nonceStr,
      signature: res.data.signature,
      jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
    })
    this.customWeixinShare(data.custom)
  },
  customWeixinShare(custom) {
    Vue.wechat.ready(function () {
      Vue.wechat.onMenuShareAppMessage({ // 分享给朋友
        title: custom.title,
        desc: custom.desc,
        link: custom.link,
        imgUrl: custom.imgUrl,
        success: function () {},
        cancel: function () {}
      })
      Vue.wechat.onMenuShareTimeline({ // 分享到朋友圈
        title: custom.title,
        link: custom.link,
        imgUrl: custom.imgUrl,
        success: function () {},
        cancel: function () {}
      })
    })
  }
}