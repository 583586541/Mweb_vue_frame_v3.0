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
      fn.sToast(res.data.message, 'warn')
      return false
    }
    return res.data.data
  },
  // 处理Axios请求错误
  dealAxiosErr(err) {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '错误请求'
          break
        case 401:
          err.message = '未授权，请重新登录'
          break
        case 403:
          err.message = '拒绝访问'
          break
        case 404:
          err.message = '请求错误，未找到该资源'
          break
        case 405:
          err.message = '请求方法未允许'
          break
        case 408:
          err.message = '请求超时'
          break
        case 500:
          err.message = '服务器端出错'
          break
        case 501:
          err.message = '网络未实现'
          break
        case 502:
          err.message = '网络错误'
          break
        case 503:
          err.message = '服务不可用'
          break
        case 504:
          err.message = '网络超时'
          break
        case 505:
          err.message = 'http版本不支持该请求'
          break
        default:
          err.message = '连接错误'
      }
    } else {
      if (err.message.indexOf('timeout') !== (-1)) { // 请求超时
        err.message = '请求超时'
      }
      if (err.message == 'Network Error') { // 请求跨域
        err.message = '请求跨域'
      }
    }
    fn.sToast(err.message, 'warn')
    return false
  }
}