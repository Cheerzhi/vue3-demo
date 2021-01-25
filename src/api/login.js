import request from '@/utils/request'

/**
 * 加密解析
 * 
 */

export const analysisParam = (data) => {
  return request({
    url:"/stuLogin",
    method:"post",
    param:data
  })
}

/**
 * 加密解析
 * 
 */

export const registerAccount = (data) => {
  return request({
    url:"/register",
    method:"post",
    data
  })
}