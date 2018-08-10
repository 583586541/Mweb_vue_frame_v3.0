import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/views/demo'
import routerLost from '@/views/routerLost'
import register from '@/views/register'

Vue.use(Router)

export default new Router({
  routes: [
    { // 重定向到首页
      path: '',
      redirect: '/demo'
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo,
      meta: {
        title: '腋毛╮超级长'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/*',
      name: 'routerLost',
      component: routerLost,
      meta: {
        title: '很抱歉，网页丢失了'
      }
    }
  ]
})
