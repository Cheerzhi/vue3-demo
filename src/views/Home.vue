<template>
  <div class="detail">
    <div class="user">
      <div class="user-name">欢迎,{{userName}}</div>
      <div class="user-type">{{generateUserType}}</div>
    </div>
    <div @click="logout" class="logout">
      <img src="../assets/image/exit.svg" class="logout-icon"/>
      <span>登出</span>
    </div>
  </div>
  <div class="banner">
    <img src="../assets/image/banner.png" /> 
  </div>
  <div class="icon-list">
    <div v-for="item in routeList" :key="item.name" class="icon-item" @click="toPage(item.name)">
      <img :src="item.image" class="icon-image"/> 
      <div class="icon-title">{{item.title}}</div>
    </div>
  </div>
</template>

<script >
import AppImg from '../assets/image/application.svg'
import ListImg from '../assets/image/viewlist.svg'
import ScanImg from '../assets/image/scan.svg'
import DetailImg from '../assets/image/details.svg'
import CodeImg from '../assets/image/scan.svg'
import {defineComponent,computed} from "vue"
import {mapGetters,storeToRefs,mapState} from 'pinia'
import {useUserStore} from '@/store'
import {useRouter} from 'vue-router';
export default defineComponent({
  setup(props){
    const userStore = useUserStore()
    const router = useRouter()
    const routeList = [
      {name:"detail",title:"填报个人信息",role:"admin",image:DetailImg},
      {name:"list",title:"查看访客申请",role:"admin",image:ListImg},
      {name:"code",title:"查看二维码",role:"all",image:CodeImg},
      {name:"applicationDetail",title:"访客申请",role:"visitor",image:DetailImg},
    ]
    const logout = ()=>{
      userStore.LOG_OUT().then(res=>{
        router.replace({name:"login"})
      })
    }
    const toPage = name =>{
      router.push({name})
    }
    return  {
      routeList,
      logout,
      toPage
    }
  },
  computed:{
    ...mapState(useUserStore,['userName',"generateUserType"])
  }
  
})
</script>

<style lang="less" scoped>
.detail{
  display:flex;
  align-items:center;
  justify-content:space-between;
  font-size:36px;
  height:120px;
  padding:0 30px;
  .user{
    
  }
  .logout {
    font-size:28px;
    img{
      width:40px;
    }
  }
}
.banner {
  padding:0 30px;
  img {
    height:200px;
  }
}
.icon{
  &-item{
    width:220px;
    height:220px;
    border-radius:8px;
    background: #f7f8f9;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-bottom:15px;
  }
  &-image{
    width:80px;
    height:80px;
    margin-bottom:20px;
  }
  &-list{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
    padding:50px 30px 0;
  }
}
</style>