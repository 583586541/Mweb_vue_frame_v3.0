'use strict'

module.exports = {
  '/mf': {
    target: 'http://192.168.1.55:8889',
    changeOrigin: true,
    pathRewrite: {
      '^/mf': ''
    }
  },
  '/dev': {
    target: 'http://niub-app.test.atenops.com',
    changeOrigin: true,
    pathRewrite: {
      '^/dev': ''
    }
  },
}
