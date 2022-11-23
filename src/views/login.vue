<template>
  <Layout hidden>
    <div class="login">
      <div class="login-title">出入管理系统</div>
      <van-form @submit="onSubmit" @failed="onFailed">
        <van-cell-group inset>
          <van-field @click="show = true" readonly v-model="username" :rules="rules.username" label="用户类型" name="username" placeholder="请选择用户类型" is-link/>
          <van-field @click="show = true" readonly v-model="password" :rules="rules.password" label="密码" name="password" type="password" placeholder="请输入密码" is-link/>
        </van-cell-group>
        <div class="login-btn">
          <van-button round block :loading="loading" type="primary" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </Layout>
  <van-popup v-model:show="show" position="bottom">
    <van-picker title="请选择用户类型" :columns="columns" @confirm="onConfirm" @cancel="show = false"></van-picker>
  </van-popup>
</template>

<script setup>
import { ref } from 'vue';
import {Toast} from 'vant'
import {useUserStore} from '@/store'
const username = ref('')
const password = ref('')
const store = useUserStore()
const rules = {
  username:[{required:true,message:'请选择用户类型'}],
  password:[{required:true,message:"请输入密码"}],
}
const columns = [{
  text:'管理员',
  value:'admin'
},{
  text:'访客',
  value:"visitor"
}]
const show = ref(false)
const loading = ref(false)
const onSubmit = (val)=>{
  loading.value = true
  store.SET_USER(val).finally(()=>{
    loading.value = false
  })
}
const onFailed = ({errors}) =>{
  console.log(errors);
  
  Toast.fail({message:errors[0].message})
}
const onConfirm = ({value,text}) =>{
  password.value = value
  username.value = text
  show.value = false
}
</script>

<style lang="less" scoped>
.login{
  &-btn{
    padding:10px 10px 0;
  }
  &-title{
    font-size:40px;
    text-align:center;
    line-height:1.5
  }
}
</style>