<template>
  <div class="other">
    <van-form @submit="onSubmit" validate-first :show-error="false">
      <van-field
        :model-value="state.name"
        name="学生姓名"
        label="学生姓名"
        placeholder="请输入学生姓名"
        label-class="label"
        :rules="state.ruleValidate.name"
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
      >
        <template #left-icon>
          <img src="../assets/image/num.png" class="icon" />
        </template>
      </van-field>
      <div class="grey"></div>
      <PayAmt />
      <div class="other-btnArea">
        <van-button type="primary" round size="large" :loading="loading">立即充值</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import PayAmt from "../components/payAmt";
export default {
  components: {
    PayAmt
  },
  setup() {
    const state = reactive({
      name: "",
      stId: "",
      ruleValidate: {
        name: [
          { required: true, message: "请填写学生姓名", trigger: "onChange" }
        ],
        stId: [
          { required: true, message: "请填写学生学工号", trigger: "onChange" }
        ]
      }
    });
    const loading = ref(false);
    const onSubmit = val =>{
      console.log(val);
      
    }
    return {
      state,
      loading,
      onSubmit
    };
  }
};
</script>

<style scoped lang="scss">
.other {
  padding-top: 20px;
  .grey {
    height: 20px;
    background: #f7f7f7;
  }
  &-person {
    // width: 600px;
    height: 300px;
    margin: 0 30px 20px;
    border: 1px solid #09b6f2;
    border-radius: 20px;
    background: #09b6f2;
    color: #ffffff;
    padding: 60px 40px;
    box-sizing: border-box;
    &-label {
      font-size: 24px;
      margin-bottom: 24px;
    }
    &-value {
      font-size: 34px;
      font-weight: 500;
    }
  }
  &-btnArea {
    padding: 30px;
  }
  .icon{
    width: 44px;
    height: 48px;
  }
}
</style>