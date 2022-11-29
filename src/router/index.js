import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'
import {
  getToken
} from '@/utils/index'
import {
  getName,
  getStId
} from '../utils'
const routes = [{
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: "登陆"
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: {
      title: '主页'
    },
  }, {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/detail.vue'),
    meta: {
      title: '访问申请详情'
    },
  }, {
    path: '/list',
    name: 'list',
    component: () => import('@/views/list.vue'),
    meta: {
      title: '访问申请列表'
    },
  }, {
    path: '/code',
    name: 'code',
    component: () => import('@/views/code.vue'),
    meta: {
      title: '二维码'
    },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from) => {
  document.title = to.meta.title
  // if (!getToken() && to.name !== "register") {
  //   return {
  //     name: "register"
  //   }
  // } else {
  //   if (!store.state.isLogin) {
  //     store.commit("SET_USER", {
  //       name: getName(),
  //       stId: getStId()
  //     })
  //   }
  //   return true
  // }
})
export default router