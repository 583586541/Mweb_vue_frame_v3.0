/**
 * 引入
 */
// import ossUpload from '../assets/js/ossUpload'

/**
 * 验签
 */
// async OssSign() {
//   console.log(await ossUpload.sign({
//     url: this.api.getOss,
//     param:  {'sign': 'C65044214200A3763581750105BCE23C'},
//     load: true
//   }))
// },
/**
 * 上传
 */
// async upload() {
//   console.log(await ossUpload.upload({
//     OSS: OssSign,
//     file: event.target.files[0],
//     max: 3,
//     range: []
//   }))
// },

import fn from './fn'
export default {
  async sign(data) {
    let res = await fn.axiosPost({
      url: data.url,
      param: data.param,
      load: data.load
    })
    if (!res) {
      return
    }
    return new OSS.Wrapper({
      region: res.region,
      accessKeyId: res.accessKeyId,
      accessKeySecret: res.accessKeySecret,
      stsToken: res.securityToken,
      bucket: res.bucket
    })
  },
  async upload(data) {
    if (!data.OSS) {
      fn.sToast('OSS服务器迷路了，请刷新重试', 'warn')
      return false
    }
    if (!fn.checkFileSize(data.file, data.max)) {
      return false
    }
    if (!fn.checkFileType(data.file, data.range)) {
      return false
    }
    let name = Date.parse(new Date()).toString() + Math.ceil(Math.random() * 10 * 9999) + '.' + data.file.name.split('.')[1]
    return await data.OSS.multipartUpload(name, data.file, {
      progress: function* (p) {
        console.log('Progress: ' + p)
      }
    }).then((results) => {
      return results
    }).catch((err) => {
      fn.sToast('上传失败，请重试')
      return false
    })
  }
}