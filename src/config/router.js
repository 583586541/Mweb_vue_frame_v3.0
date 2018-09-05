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
import doubtDetail from '@/views/doubtDetail'
import departure from '@/views/departure'
import schedule from '@/views/schedule'
import travels from '@/views/travels'
import imgZoom from '@/views/imgZoom'
import resource from '@/views/resource'
import fillOrder from '@/views/fillOrder'
import downApp from '@/views/downApp'
import selectUser from '@/views/selectUser'
import editUser from '@/views/editUser'
import addUser from '@/views/addUser'
import searchUser from '@/views/searchUser'
import invoice from '@/views/invoice'
import specialNeeds from '@/views/specialNeeds'

Vue.use(Router)

export default new Router({
  routes: [{ // 重定向到首页
      path: '',
      redirect: '/lineDetails'
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
      path: '/downApp',
      name: 'downApp',
      component: downApp,
      meta: {
        title: '下载App'
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
        title: '全部提问'
      }
    },
    {
      path: '/doubtDetail',
      name: 'doubtDetail',
      component: doubtDetail,
      meta: {
        title: '提问详情'
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
        title: '选择日期和人数'
      }
    },
    {
      path: '/resource',
      name: 'resource',
      component: resource,
      meta: {
        title: '选择资源'
      }
    },
    {
      path: '/fillOrder',
      name: 'fillOrder',
      component: fillOrder,
      meta: {
        title: '填写信息'
      }
    },
    {
      path: '/selectUser',
      name: 'selectUser',
      component: selectUser,
      meta: {
        title: '选择出行人'
      }
    },
    {
      path: '/searchUser',
      name: 'searchUser',
      component: searchUser,
      meta: {
        title: '查找出行人'
      }
    },
    {
      path: '/editUser',
      name: 'editUser',
      component: editUser,
      meta: {
        title: '编辑出行人'
      }
    },
    {
      path: '/addUser',
      name: 'addUser',
      component: addUser,
      meta: {
        title: '新增出行人'
      }
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: invoice,
      meta: {
        title: '编辑发票信息'
      }
    },
    {
      path: '/specialNeeds',
      name: 'specialNeeds',
      component: specialNeeds,
      meta: {
        title: '特殊需求'
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