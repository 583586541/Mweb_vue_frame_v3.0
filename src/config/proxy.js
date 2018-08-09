'use strict'

module.exports = {
  '/dev': {
    target: 'http://yfqc-app.test.atenops.com',
    changeOrigin: true,
    pathRewrite: {
      '^/dev': ''
    }
  },
  '/yl': {
    target: 'http://192.168.1.26:8081',
    changeOrigin: true,
    pathRewrite: {
      '^/yl': ''
    }
  },
  '/mf': {
    target: 'http://192.168.1.55:3535',
    changeOrigin: true,
    pathRewrite: {
      '^/mf': '/yfbx_pcweb'
    }
  }
}
