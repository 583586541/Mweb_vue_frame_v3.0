// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'

import Navigation from 'vue-navigation'
Vue.use(Navigation, {router})

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.prototype.api = require('./config/api').default

require('./assets/less/css.less')
Vue.prototype.$ = require('./assets/js/fn.js').default

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
