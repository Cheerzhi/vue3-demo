<template>
  <div class="register">
    <van-form @submit="onSubmit" validate-first :show-error="false">
      <van-field
        v-model="state.username"
        name="学生姓名"
        label="学生姓名"
        placeholder="请输入学生姓名"
        readonly
        :rules="state.ruleValidate.username"
      />
      <van-field
        v-model="state.stuId"
        name="学工号"
        label="学工号"
        placeholder="请输入学工号"
        :rules="state.ruleValidate.stuId"
      />
      <div class="btnArea">
        <van-button round block type="primary" native-type="submit" @click="onSubmit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { reactive,ref ,getCurrentInstance} from 'vue';
// import {} from 'vue-router'
export default {
  setup(){
    const state = reactive({
      username:"1231",
      stuId:"",
      ruleValidate:{
        username:[{required:true,message:"请填写学生姓名",trigger:"onChange"}],
        stuId:[{required:true,message:"请填写学生姓名",trigger:"onChange"}],
      }
    })
    const {ctx} = getCurrentInstance()
    const onSubmit = (val)=>{
      console.log(val);
      console.log(ctx);
      
    }
    return {
      state,
      onSubmit
    }
  }
};
</script>

<style scoped lang="scss">
.register{
  .btnArea{
    margin:40px 30px 0;
  }
}
</style>