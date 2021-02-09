# vue3.0 

## 技术改动

vue3.0及其配套生态的改动:

+ vue3.0的文档 https://www.vue3js.cn/docs/zh/
+ vue-router4.0的文档 https://next.router.vuejs.org/
+ vuex4.0的文档 https://next.vuex.vuejs.org/
+ vite的文档 https://www.vite.org/zh  (新一代脚手架 尤大用来取代webpack 个人有兴趣可以研究)

### 生成一个vue3.0的项目

- 先将vue-cli更新到4.5.9以上的版本
  mac用户需要将你全局的脚手架以及node删除后重新安装node和vue-cli

- vue create 项目名称
  出现新的选项能够选择vue的版本采用的是2.0 还是3.0

### 文件方面的改动

- main.js

2.0的写法:
```js
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
```

3.0的写法:
```js
import {createApp} from 'vue'
import App from './App.vue'
createApp(App).use(store).use(router).use(Vant).mount('#app')
```

从new一个vue实例改为函数式的写法 createApp()会返回一个vue示例

### Object.defineProperty与Object.proxy

众所周知,vue2.0是采用Object.defineProperty,而改版后的vue3.0采用的是Object.proxy(es7的语法)进行数据绑定的;
这一个改动影响的是ie这一部分的用户,所以如果碰到ie的用户vue会自动降版本使用Object.defineProperty来进行数据绑定;


### template模版的改动

- 组件开发支持多个根节点来作为一个模版来开发的

```html
<template>
  <div></div>
  <div></div>
</template>
```
- 事件部分以及v-model这一语法糖的改动(待补充)

- 模版中的ref的改动
```html
<template>
  <div class="xxx" ref="title">hello world!!!</div>
</template>
<script>
  setup(){
    let title = ref('')
    const handleClick = () =>{
      console.log(title.value)
      // <div class="xxx">hello world!!!</div>
    }
  }
</script>
```

### js部分的改动

#### 移除data、methods、过滤器filter

2.0的写法

```js
export default {
  name: 'home',
  data () {
    return {
      //管理数据
    }
  },
  created () {
    //
  }
}
```

3.0的写法

```js
import { reactive, ref,computed } from "vue";
export default {
  setup() {
    const state = reactive({
      name: "",
      id:"",
      stId: "",
      mobile: "",
      amount:"",
      payAmt: null
    });
    const loading = ref(false);
    const title = computed(()=>{
      return state.id?'新增':"编辑"
    })
    const changeMobile = val =>{
      state.mobile = val
    }
    const changeLoading = bool =>{
      loading.value = bool
    }
    return {
      state,
      loading,
      title,
      changeMobile,
      changeLoading
    };
  }
};
```

- 通过setup去管理组件内的数据以及方法
  setup取代的是以前生命周期里面 beforeCreate以及data
  定义好的变量或者方法需返回

- reactive、ref作为数据的两种形式进行管理
  修改reactive内的数据:state.xxx = val
  修改ref的数据:xxx.value = val
  与2.0相比this不再指向vue实例
  想要获取上下文有专用的api

- reactive、ref转换 通过toRefs进行

- 移除过滤器 完全用计算属性来取代(早就应该这样做)
```js
import {reactive,toRefs} from 'vue'
setup(){
  const state = reactive({
    a:1,
    b:2
  })
  return{
    ...toRefs(state)
    // ...state是不会将reactive的内部变量变为响应式的变量的
  }
}
```

#### watch和watchEffect(待补充)
#### mixin的改动(待补充)
#### this不再指向vue示例导致的改动(待补充)
#### 父子通信(待补充)
#### 生命周期

|2.0|3.0|
|:----:|:----:|
|beforeCreate |setup|
|created      |setup|
|beforeMount  |onBeforeMount|
|mounted      |onMounted|
|beforeUpdate |onBeforeUpdate|
|updated      |onUpdated|
|beforeDestory|onBeforeUnmount|
|destoryed    |onUnmounted|
|activated |      |
|deactivated||

## vue-router的改动

### 函数式的写法与新建实例的写法(2.0)

```js
// 2.0的写法
  new Router({
    routes,
    mode:"history/hash"
  })

// 3.0的写法
createRouter({
  history: createWebHashHistory(),    //hash模式
  //history:createWebHistory()        //历史模式
  routes
})
```
router和route使用(this不再指向vue实例的改动)
```js
import {useRoute,useRouter} from 'vue-router'
import {getCurrentInstance} from 'vue'

// 测试环境之中是可以这样的 生产打包后是会报错的
// const {ctx} = getCurrentInstance()
// ctx.route
// ctx.router

//推荐写法
const route = useRoute()
const router = useRouter()

```

### 所有路由钩子函数的改动 next的不推荐使用
```js
//
router.beforeEach((to,from,next)=>{
  // next() //不推荐,但依旧支持
  // return true 
  // return false //终止跳转
  return {name:"login",replace:true} //重定向
})
```

### 动态路由的修改
```js
// 2.0
// 通过接口获取对应角色的路由 
router.addRoutes(asyncRoutes)
//退出登陆的时候重置路由是通过重置router实例中matcher
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
//3.0
// 新增删除路由的方法
removeRoute(name: string | symbol): void
```
### 钩子的改动(待补充)

## vuex的改动(函数式写法的改动)
```js
// 2.0
export default new Vuex.Store({
  modules,
  getters,
  state,
  mutations,
  actions
})
// 3.0
import { createStore,useStore } from 'vuex'
const store = createStore({ ...options })
const store = useStore()
```

