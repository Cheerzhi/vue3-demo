const jwt = require('jsonwebtoken')

function initToken(user) {
  let sercet = 'cheerzhi'
  let token = jwt.sign(user, sercet, {
    'expiresIn': 60 * 10
  })
  return token
}

function verifyToken(token) {
  let sercet = 'cheerzhi'
  return  jwt.verify(token, sercet, (error, result) => {
    if (error) {
      return false
    } else {
      return true
    }
  })
}
/**
 * @param {string} url
 * @returns {Object}
 */
function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}


module.exports = {
  param2Obj,
  initToken,
  verifyToken
}