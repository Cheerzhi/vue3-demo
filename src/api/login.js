import request from '@/utils/request'

export const toLogin = (data) => {
  return request({
    url:"/login",
    method:"post",
    data
  })
}
