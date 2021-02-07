import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'
import store from '../store'
import {
  getToken
} from '@/utils/index'
import {
  getName,
  getStId
} from '../utils'
const routes = [{
    path: '/',
    redirect: '/home/charge',
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/charge',
    component: () => import('../views/Home.vue'),
    meta: {
      title: "主页"
    },
    children: [{
      path: 'charge',
      name: 'charge',
      component: () => import('../views/charge.vue'),
      meta: {
        title: "一卡通充值"
      }
    }, {
      path: 'other',
      name: 'other',
      component: () => import('../views/other.vue'),
      meta: {
        title: "一卡通充值"
      }
    }, {
      path: 'record',
      name: 'record',
      component: () => import('../views/record.vue'),
      meta: {
        title: "充值明细"
      }
    }]
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue'),
    meta: {
      title: "认证绑定"
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from) => {
  document.title = to.meta.title
  if (!getToken() && to.name !== "register") {
    return {
      name: "register"
    }
  } else {
    if (!store.state.isLogin) {
      store.commit("SET_USER", {
        name: getName(),
        stId: getStId()
      })
    }
    return true
  }
})
export default router