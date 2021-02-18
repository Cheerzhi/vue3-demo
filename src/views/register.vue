<template>
  <div class="register">
    <van-form @submit="onSubmit" validate-first :show-error="false">
      <van-field
        :model-value="state.name"
        name="学生姓名"
        label="学生姓名"
        placeholder="请输入学生姓名"
        label-class="label"
        :rules="state.ruleValidate.name"
        @update:model-value="changeName"
      >
        <template #left-icon>
          <img src="../assets/image/name.png" class="icon" />
        </template>
      </van-field>
      <van-field
        :model-value="state.stId"
        name="学工号"
        label="学工号"
        placeholder="请输入学工号"
        label-class="label"
        :rules="state.ruleValidate.stId"
        @update:model-value="changeStId"
      >
        <template #left-icon>
          <img src="../assets/image/num.png" class="icon" />
        </template>
      </van-field>
      <div class="btnArea">
        <van-button
          round
          block
          type="primary"
          :loading="state.loading"
          native-type="submit"
          @click="onSubmit"
        >提交</van-button>
      </div>
    </van-form>

    <Child ref="child" @change-name="changeName" :name="state.name"/>
    <div>
      <button @click="handleChild">触发子组件事件</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref, getCurrentInstance, onMounted, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { registerUser } from "@/api/login";
import Child from '@/components/child'
export default {
  components:{
    Child
  },
  setup(props, { emit }) {
    const { ctx } = getCurrentInstance();
    const route = useRoute();
    const child = ref('')
    const state = reactive({
      name: "",
      stId: "",
      loading: false,
      ruleValidate: {
        name: [
          { required: true, message: "请填写学生姓名", trigger: "onChange" }
        ],
        stId: [
          { required: true, message: "请填写学生学工号", trigger: "onChange" }
        ]
      }
    });
    const rName = ref("");
    const changeName = val => {
      state.name = val;
    };
    const changeStId = val => {
      state.stId = val;
    };
    const onSubmit = val => {
      state.loading = true;
      let data = {
        stId: state.stId,
        name: state.name
      };
      registerUser(data)
        .then(res => {
          ctx.$store.dispatch("registerUser", res.data).then(
            res => {
              ctx.$router.replace({
                name: "charge"
              });
              state.loading = false;
            },
            err => {
              state.loading = false;
            }
          );
        })
        .catch(err => {
          state.loading = false;
        });
    };
    const handleChild = ()=>{
      child.value.handleName()
    }
    watch(()=>state.name,(newval,oldval)=>{
      console.log(newval)
      console.log(oldval)
    })
    watchEffect(()=>{
      console.log(state.name);
      
    })
    onMounted(() => {
      rName.value = route.query || "";    
    });
    return {
      state,
      rName,
      onSubmit,
      changeStId,
      changeName,
      child,
      handleChild
    };
  }
};
</script>

<style >
.label {
  font-weight: 500;
}
</style>
<style scoped lang="scss">
.register {
  .btnArea {
    margin: 40px 30px 0;
  }
  .icon {
    width: 44px;
    height: 48px;
  }
}
</style>