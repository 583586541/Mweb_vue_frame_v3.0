import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/views/demo'
import routerLost from '@/views/routerLost'
import register from '@/views/register'
import GVRP from '@/views/GVRP'
import lineDetails from '@/views/lineDetails'
import album from '@/views/album'
import coupon from '@/views/coupon'
import comment from '@/views/comment'
import doubt from '@/views/doubt'
import departure from '@/views/departure'
import schedule from '@/views/schedule'
import travels from '@/views/travels'
import imgZoom from '@/views/imgZoom'

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
      path: '/album',
      name: 'album',
      component: album,
      meta: {
        title: '相册'
      }
    },
    {
      path: '/imgZoom',
      name: 'imgZoom',
      component: imgZoom,
      meta: {
        title: '图片详情'
      }
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: coupon,
      meta: {
        title: '优惠券'
      }
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment,
      meta: {
        title: '点评'
      }
    },
    {
      path: '/doubt',
      name: 'doubt',
      component: doubt,
      meta: {
        title: '提问'
      }
    },
    {
      path: '/departure',
      name: 'departure',
      component: departure,
      meta: {
        title: '更多出发地'
      }
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: schedule,
      meta: {
        title: '更多班期'
      }
    },
    {
      path: '/travels',
      name: 'travels',
      component: travels,
      meta: {
        title: '相关游记'
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
