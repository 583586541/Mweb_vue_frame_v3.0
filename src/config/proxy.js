'use strict'

module.exports = {
  '/mf': {
    target: 'http://192.168.1.55:8888',
    changeOrigin: true,
    pathRewrite: {
      '^/mf': ''
    }
  },
  '/dev': {
    target: 'http://yfqc-app.test.atenops.com',
    changeOrigin: true,
    pathRewrite: {
      '^/dev': ''
    }
  },
}
