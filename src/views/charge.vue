<template>
  <div class="charge">
    <div class="charge-person">
      <div class="charge-person-label">学生姓名:<span class="charge-person-value">{{state.name}}</span></div>
      <div class="charge-person-label">学/工号:<span class="charge-person-value">{{state.stId}}</span></div>
      <div class="charge-person-label">手机号:<span class="charge-person-value">{{state.mobile}}</span></div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from "vue-router";
export default {
  setup(){
    const state = reactive({
      name:'',
      stId:'',
      mobile:"",
      payAmt:null
    })
  
    return{
      state,chargeList,
      selectMoney
    }
  }
}
</script>

<style scoped lang="scss">

</style>