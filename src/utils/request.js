import axios from 'axios'
import {Toast} from 'vant'
import {getToken} from '@/utils/index'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 30000
})

// 请求拦截
service.interceptors.request.use(
  config => {
    if(getToken()){
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.config.responseType == 'blob') {
      return res
    }
    if (res.code == 200) {
      return res
    } else {
      Toast.clear()
      Toast(res.msg||"客观请稍等,忙不过来了")
      return Promise.reject(res || 'Error')
    }
  },
  error => {
    Toast.clear()
    Toast(error||"请检查你的网络")
    return Promise.reject(error)
  }
)

export default service