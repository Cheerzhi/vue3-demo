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