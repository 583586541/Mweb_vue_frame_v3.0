/**
 * POST请求
 */
// async fnName() {
//   let _this = this,
//     $ = _this.$
//   let res = await $.axiosPost({
//     url: _this.api.接口,
//     param: {},
//     load: true
//   })
//   if (!res) {
//     return
//   }
//   console.log(res)
// },
/**
 * GET请求
 */
// async fnName() {
//   let _this = this,
//     $ = _this.$
//   let res = await $.axiosGet({
//     url: _this.api.接口,
//     param: {},
//     load: true
//   })
//   if (!res) {
//     return
//   }
//   console.log(res)
// }

import fn from './fn'
export default {
  // 处理Axios请求成功
  dealAxiosSuc(res) {
    // 示例：接口返回状态码处理
    if (res.data.code != 1) {
      fn.sToast(res.data.msg)
      return false
    }
    return res.data
  },
  // 处理Axios请求错误
  dealAxiosErr(err) {
    let msg = 'sorry'
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          msg = '错误请求'
          break
        case 401:
          msg = '未授权，请重新登录'
          break
        case 403:
          msg = '拒绝访问'
          break
        case 404:
          msg = '请求错误，未找到该资源'
          break
        case 405:
          msg = '请求方法未允许'
          break
        case 408:
          msg = '请求超时'
          break
        case 500:
          msg = '服务器端出错'
          break
        case 501:
          msg = '网络未实现'
          break
        case 502:
          msg = '网络错误'
          break
        case 503:
          msg = '服务不可用'
          break
        case 504:
          msg = '网络超时'
          break
        case 505:
          msg = 'http版本不支持该请求'
          break
        default:
          msg = '连接错误'
      }
    } else {
      if (err.message.indexOf('timeout') !== (-1)) { // 请求超时
        msg = '请求超时'
      }
      if (err.message == 'Network Error') { // 请求跨域
        msg = '请求跨域'
      }
    }
    fn.sToast(msg, 'warn')
    return false
  }
}