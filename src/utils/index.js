import {Toast} from 'vant'

const TokenKey = 'YKBSToken'

export const getToken = ()=>{
  return sessionStorage.getItem(TokenKey)
}

export const setToken = (token) => {
  return sessionStorage.setItem(TokenKey, token)
}
export const getType = (obj) => {
  //tostring会返回对应不同的标签的构造函数
  var toString = Object.prototype.toString
  var map = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object'
  }

  if (obj instanceof Element) {
      return 'element'
  }
  return map[toString.call(obj)]
}

export const deepClone = (data) => {
  var type = getType(data)
  var obj
  if (type === 'array') {
      obj = []
  } else if (type === 'object') {
      obj = {}
  } else {
      //不再具有下一层次
      return data
  }
  if (type === 'array') {
      for (var i = 0, len = data.length; i < len; i++) {
          obj.push(deepClone(data[i]))
      }
  } else if (type === 'object') {
      for (var key in data) {
          obj[key] = deepClone(data[key])
      }
  }
  return obj
}