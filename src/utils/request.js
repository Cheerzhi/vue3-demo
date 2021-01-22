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
    if (res.status == "0" || res.code == 200 || res.status === 200) {
      return res
    } else {
      Toast.clear()
      Toast(res.msg)
      return Promise.reject(res || 'Error')
    }
  },
  error => {
    Toast.clear()
    Toast(error)
    return Promise.reject(error)
  }
)

export default service