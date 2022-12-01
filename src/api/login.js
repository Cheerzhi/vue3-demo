import request from '@/utils/request'
import {getToken} from '@/utils'
export const toLogin = (data) => {
  return request({
    url:"/login",
    method:"post",
    data
  })
}

export const toLogout = (data) => {
  return request({
    url:`/logout?token=${getToken()}`,
    method:"post",
    data
  })
}
