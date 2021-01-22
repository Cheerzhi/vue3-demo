import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home/charge',
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/charge',
    component: ()=>import('../views/Home.vue'),
    children:[{
      path: 'charge',
      name: 'charge',
      component: ()=>import('../views/charge.vue'),
      meta:{title:"一卡通充值"}
    },{
      path: 'other',
      name: 'other',
      component: ()=>import('../views/other.vue'),
      meta:{title:"一卡通充值"}
    },{
      path: 'record',
      name: 'record',
      component: ()=>import('../views/record.vue'),
      meta:{title:"充值明细"}
    }],
    meta:{
      title:"主页"
    }
  },
  {
    path: '/register',
    name: 'register',
    component: ()=>import('../views/register.vue'),
    meta:{
      title:"认证绑定"
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  
  next()
})
export default router
