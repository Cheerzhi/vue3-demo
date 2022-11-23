import {
  createApp
} from 'vue'
import layout from '@/layout/index.vue'
import App from '@/App.vue'
import router from '@/router'
// import store from '@/store'
import {
  createPinia
} from 'pinia'
const pinia = createPinia()
import Vant from 'vant'
import './assets/css/reset.css'
import 'vant/lib/index.less';
const {
  mockXHR
} = require('../mock')

mockXHR()
createApp(App).use(pinia).use(router).use(Vant).component("Layout", layout).mount('#app')