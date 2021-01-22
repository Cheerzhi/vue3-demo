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