import {
  createStore
} from 'vuex'
import {
  setToken,
  setName
} from '../utils'

export default createStore({
  state: {
    user: null,
    isLogin: false,
    record:[]
  },
  getters: {
    user: state => state.user,
    record:state => state.record
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
      state.isLogin = true
    },
    SET_RECORD:(state,record)=>{
      const {list,type} = record
      state.record = type?[...state.record,list]:[]
    }
  },
  actions: {
    registerUser({
      commit
    }, user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const {
            name
          } = user
          commit("SET_USER", user)
          setToken(Date.now())
          setName(name)
          resolve(user)
        }, 300)
      })
    },
    initRecord({
      commit
    },list){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          // const {record,type} = list 
          commit("SET_RECORD",list)
          resolve(list)
        },300)
      })
    }
  }
})