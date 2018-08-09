import Vue from 'vue'
import {
  ToastPlugin,
  LoadingPlugin
} from 'vux'
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
import axios from 'axios'
import axiosConfig from './axios'
import qs from 'qs'
import api from '../../config/api'

/**
 * 手机号 —— iphone
 * 密码 —— password
 * 身份证 —— IdCard
 * 邮箱 —— email
 * 验证码 —— msgCode
 * QQ —— qq
 * 微信 —— weixin
 * 正整数 —— positiveInteger（不含0）
 * 自然数 —— naturalNumber（含0）
 * 车牌号 —— plateNumber
 * 中文名 —— ChineseName
 */
const regularList = {
  'iphone': {
    rule: /^1[3456789]\d{9}$/,
    text: '请输入正确的手机号'
  },
  'password': {
    rule: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
    text: '请输入6~16位字符的密码（数字和字母组成）'
  },
  'IdCard': {
    rule: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/,
    text: '请输入正确的身份证号码'
  },
  'email': {
    rule: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
    text: '请输入正确的邮箱地址'
  },
  'msgCode': {
    rule: /^\d{6}$/,
    text: '请输入正确的验证码'
  },
  'qq': {
    rule: /^\d{5,13}$/,
    text: '请输入正确的QQ号'
  },
  'weixin': {
    rule: /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/,
    text: '请输入正确的微信号'
  },
  'positiveInteger': { // 正整数（不含0）
    rule: /^[1-9]*[1-9][0-9]*$/,
    text: '请输入正整数'
  },
  'naturalNumber': { // 自然数（含0）
    rule: /^\d+$/,
    text: '请输入非负整数'
  },
  'plateNumber': {
    rule: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
    text: '请输入正确的车牌号'
  },
  'ChineseName': {
    rule: /[\u4E00-\u9FA5]/,
    text: '请输入真实姓名'
  }
}

// 添加Axios请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (config.load) {
    fn.sLoad()
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  fn.hLoad()
  return Promise.reject(error)
})
// 添加Axios响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  fn.hLoad()
  return response
}, function (error) {
  // 对响应错误做点什么
  fn.hLoad()
  return Promise.reject(error)
})

const fn = {
  isAppClient() {
    return window.navigator.userAgent.match(/cjApp/) !== null
  },
  isWeixinClient() {
    return window.navigator.userAgent.toLowerCase().match(/micromessenger/) !== null
  },
  getPhoneSystem() {
    let ua = navigator.userAgent
    if (ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1) {
      return "Android"
    } else if (ua.indexOf('iPhone') > -1) {
      return "iPhone"
    }
  },
  sToast(text, type) {
    type = type ? type : 'cancel'
    Vue.$vux.toast.show({
      type: type,
      text: text,
      position: 'middle'
    })
  },
  sLoad() {
    Vue.$vux.loading.show()
  },
  hLoad() {
    Vue.$vux.loading.hide()
  },
  objTransArr(data) {
    let arr = []
    for (let i in data) {
      arr.push([i, data[i]])
    }
    return arr
  },
  arrTransObj(data) {
    let obj = {}
    data.forEach(function (item) {
      obj[item[0]] = item[1]
    })
    return obj
  },
  arrDistinct(data) {
    let obj = {},
      arr = []
    data.forEach(function (item) {
      item = JSON.stringify(item)
      if (!obj[item]) {
        obj[item] = true
        arr.push(JSON.parse(item))
      }
    })
    return arr
  },
  isEmptyObj(data) {
    for (let key in data) {
      return false
    }　　　　
    return true
  },
  isEmptyArr(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return true
    }
    return false
  },
  getThatDay(data) {
    let date = new Date()
    date.setTime(date.getTime() + 86400000 * data)
    return this.assemblyDay({
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate()
    })
  },
  assemblyDay(data) {
    let year = data.year.toString()
    data.month = Number(data.month + 1)
    let month = this.complement(data.month)
    let date = this.complement(data.date)
    return year + '-' + month + '-' + date
  },
  splitDay(data) {
    data = data ? data : this.getThatDay(0)
    let year = Number(data.substring(0, 4))
    let month = Number(data.substring(5, 7)) - 1
    let date = Number(data.substring(8, 10))
    return {
      'year': year,
      'month': month,
      'date': date
    }
  },
  formatDay(data, delimiter) {
    data = data.replace(/[^\d]/ig, '')
    delimiter = delimiter ? delimiter : ''
    return data.substring(0, 4) + delimiter + data.substring(4, 6) + delimiter + data.substring(6, 8)
  },
  getTimestamp(data) {
    if (data) {
      data = this.splitDay(data)
      return new Date(data.year, data.month, data.date).getTime()
    }
    return new Date().getTime()
  },
  timestampTransDay(data) {
    let date = new Date()
    date.setTime(data)
    return this.assemblyDay({
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate()
    })
  },
  getDaySpace(dayF, dayS) {
    dayF = this.getTimestamp(dayF)
    dayS = this.getTimestamp(dayS)
    let stampSpace = dayF > dayS ? dayF - dayS : dayS - dayF
    return Math.floor(stampSpace / 86400000)
  },
  spaceFewMonths(few, data) {
    data = data ? data : this.getThatDay(0)
    data = this.splitDay(data)

    data.month = data.month + few
    if (data.month > 11) {
      data.month = data.month - 12
      data.year++
    } else if (data.month < 0) {
      data.month = data.month + 12
      data.year--
    }
    let cache = new Date(data.year, data.month + 1, 0).getDate()
    if (data.date > cache) {
      data.date = cache
    }
    return this.assemblyDay(data)
  },
  getWeek(data) {
    let week
    if (data) {
      data = this.splitDay(data)
      week = new Date(data.year, data.month, data.date).getDay()
    } else {
      week = new Date().getDay()
    }
    switch (week) {
      case 0:
        return '日'
      case 1:
        return '一'
      case 2:
        return '二'
      case 3:
        return '三'
      case 4:
        return '四'
      case 5:
        return '五'
      case 6:
        return '六'
    }
  },
  complement(data, digit) {
    digit = digit ? digit : 2
    data = Number(data)
    if (data < Math.pow(10, digit - 1)) {
      let text = ''
      for (let i = 0; i < digit - data.toString().length; i++) {
        text = text + '0'
      }
      return text + data
    } else {
      return data.toString()
    }
  },
  getFloatData(data, digit) {
    digit = digit ? digit : 2
    let splitResult = data.toString().split('.')
    if (splitResult.length === 1) {
      let addText = '.'
      for (let i = 0; i < digit; i++) {
        addText = addText + '0'
      }
      return data + addText
    } else {
      let text = splitResult[1]
      if (text.length < digit) {
        let addText = '.' + text
        for (let i = 0; i < (digit - text.length); i++) {
          addText = addText + '0'
        }
        return splitResult[0] + addText
      } else {
        return splitResult[0] + '.' + text.substring(0, digit)
      }
    }
  },
  regTest(data, type, text) {
    data = data.toString()
    if (!regularList[type].rule.test(data)) {
      text = text ? text : regularList[type].text
      this.sToast(text, 'warn')
      return false
    }
    return true
  },
  stSet(data) {
    for (let i in data) {
      cacheItem(i, data[i])
    }

    function cacheItem(key, val) {
      key = api.STORAGEPREFIX + key
      let valType = typeof (val)
      if (val !== null) {
        var valConstructor = val.constructor
      }
      if (valType === 'string' || valType === 'number' || valType === 'boolean') {
        if (valConstructor === String) {
          val = val + '|String'
        } else if (valConstructor === Number) {
          val = val + '|Number'
        } else if (valConstructor === Boolean) {
          val = val + '|Boolean'
        }
        api.STORAGETYPE.setItem(key, val)
      } else if (valType === 'object') {
        if (val === null) {
          val = JSON.stringify(val) + '|Null'
          api.STORAGETYPE.setItem(key, val)
        } else {
          if (valConstructor === Array) {
            val = JSON.stringify(val) + '|Array'
          } else if (valConstructor === Object) {
            val = JSON.stringify(val) + '|Object'
          }
          api.STORAGETYPE.setItem(key, val)
        }
      }
    }
  },
  stGet(data) {
    data = api.STORAGEPREFIX + data
    let key = api.STORAGETYPE.getItem(data)
    if (key === null) {
      return null
    }
    let valArr = key.split('|')
    let getDataType = valArr[valArr.length - 1]
    valArr.splice(valArr.length - 1, 1)
    let val = valArr.join('')
    if (getDataType === 'Number') {
      val = parseInt(val)
    } else if (getDataType === 'Boolean') {
      if (val === 'true') {
        val = true
      } else {
        val = false
      }
    } else if (getDataType === 'Array' || getDataType === 'Object' || getDataType === 'Null') {
      val = JSON.parse(val)
    }
    return val
  },
  stRemove(data) {
    api.STORAGETYPE.removeItem(api.STORAGEPREFIX + data)
  },
  stClear(data) {
    api.STORAGETYPE.removeItem(api.STORAGEPREFIX + data)
  },
  stClear() {
    for (let i in api.STORAGETYPE) {
      if (i.indexOf(api.STORAGEPREFIX) !== -1) {
        api.STORAGETYPE.removeItem(i)
      }
    }
  },
  axiosPost(data) {
    return axios({
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      method: 'POST',
      baseURL: api.AXIOSBASEURL,
      url: data.url,
      data: qs.stringify(data.param),
      timeout: api.AXIOSTIMEOUT,
      load: data.load
    }).then((res) => {
      return axiosConfig.dealAxiosSuc(res)
    }).catch((err) => {
      return axiosConfig.dealAxiosErr(err)
    })
  },
  axiosGet(data) {
    return axios({
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      method: 'GET',
      baseURL: api.AXIOSBASEURL,
      url: data.url,
      params: data.param,
      timeout: api.AXIOSTIMEOUT,
      load: data.load
    }).then((res) => {
      return axiosConfig.dealAxiosSuc(res)
    }).catch((err) => {
      return axiosConfig.dealAxiosErr(err)
    })
  },
  checkFileSize(file, max) {
    max = (max ? max : 2) * 1024 * 1024
    if (file.size <= max) {
      return true
    }
    this.sToast('文件大小超出限制，请重新选择', 'warn')
    return false
  },
  checkFileType(file, range) {
    try {
      if (range.length === 0) {
        return true
      } // 接收所有类型的文件
    } catch (err) {
      if (!range) {
        range = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
      }
    }
    for (let i = 0; i < range.length; i++) {
      if (file.type === range[i]) {
        return true
      }
    }
    this.sToast('文件类型不支持，请重新选择', 'warn')
    return false
  },
  correctWeixinShareHref() {
    let href = document.location.href
    if (href.indexOf('/?from') === -1) {
      return
    }
    href = href.split('?from=')
    let isappinstalled = href[1]
    href.splice(1, 1, isappinstalled.slice(isappinstalled.indexOf('#')))
    window.location.href = href.join('')
  }
}

export default fn