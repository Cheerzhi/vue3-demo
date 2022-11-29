const {
  initToken
} = require('./utils')
const tokens = {
  admin: {
    token: 'admin-token'
  },
  visitor: {
    token: 'visitor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    name: '管理员'
  },
  'visitor-token': {
    roles: ['visitor'],
    introduction: 'I am an visitor',
    name: '访客'
  }
}

module.exports = [
  // user login
  {
    url: '/login',
    type: 'post',
    response: config => {
      const {
        username,
        password
      } = config.body
      const {
        token
      } = tokens[password]
      //校验用户类型
      if (username !== users[token].name) {
        return {
          code: 500,
          msg: "非法登陆"
        }
      }
      return {
        code: 200,
        data: {
          token: initToken(tokens[password]),
          msg: "登陆成功",
          user: users[token],
          userType:password
        }
      }
    }
  },

  // get user info
  {
    url: '/logout',
    type: 'post',
    response: config => {
      const {
        token
      } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 500,
          message: '非法操作'
        }
      }

      return {
        code: 200,
        msg:"已成功退出"
      }
    }
  },

]