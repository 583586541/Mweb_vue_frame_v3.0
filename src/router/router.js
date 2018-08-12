import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/views/demo'
import routerLost from '@/views/routerLost'
import register from '@/views/register'
import GVRP from '@/views/GVRP'
import lineDetails from '@/views/lineDetails'

Vue.use(Router)

export default new Router({
  routes: [
    { // 重定向到首页
      path: '',
      redirect: '/register'
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
      path: '/GVRP',
      name: 'GVRP',
      component: GVRP,
      meta: {
        title: '牛掰用户注册协议'
      }
    },
    {
      path: '/lineDetails',
      name: 'lineDetails',
      component: lineDetails,
      meta: {
        title: '线路详情'
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
