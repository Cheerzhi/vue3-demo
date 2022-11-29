import {
  defineStore
} from "pinia";
import {
  ref,
  computed
} from "vue";
import {
  toLogin,toLogout
} from '@/api/login'
import {
  setToken
} from "@/utils"
//vue2 option方式的写法
// export const useStore = defineStore('user', {
//   state: () => ({
//     user: ""
//   }),
//   getters:{
//     GET_USER:state=>state.user
//   },
//   actions:{
//     async SET_USER(){

//     }
//   }
// })


//vue3 组合式写法
export const useUserStore = defineStore('user', () => {
  const userName = ref('')
  const userType = ref('')
  const generateUserType = computed(() => {
    let typeObj = {
      admin: "管理员",
      visitor: "访客"
    }
    return typeObj[userType.value] || '未登陆'
  })

  function SET_USER(user) {
    return new Promise((resolve, reject) => {
      toLogin(user).then(res => {
        userName.value = res.data.user.name
        userType.value = res.data.userType
        resolve()
      }).catch(err => {
        reject()
      })
    })
  }
  function LOG_OUT(){
    return new Promise((resolve,reject)=>{
      toLogout().then(res=>{
        userName.value = ''
        userType.value = ''
        resolve()
      },err=>{
        reject(err)
      })
    })
  }
  return {
    userName,
    userType,
    generateUserType,
    SET_USER,
    LOG_OUT
  }
})