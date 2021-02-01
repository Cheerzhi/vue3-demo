<template>
  <div class="charge">
    <div class="charge-person">
      <div class="charge-person-label">
        学生姓名:
        <span class="charge-person-value">{{state.name}}</span>
      </div>
      <div class="charge-person-label">
        学/工号:
        <span class="charge-person-value">{{state.stId}}</span>
      </div>
      <div class="charge-person-label">
        余额：￥
        <span class="charge-person-value">{{state.amount}}</span>
      </div>
    </div>
    <div class="grey"></div>
    <PayAmt />
    <div class="charge-btnArea">
      <van-button type="primary" round size="large" :loading="loading">立即充值</van-button>
    </div>
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
      mobile: "",
      amount:"",
      payAmt: null
    });
    const loading = ref(false);
    return {
      state,
      loading
    };
  }
};
</script>

<style scoped lang="scss">
.charge {
  padding-top: 20px;
  .grey{
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
  &-btnArea{
    padding: 30px;
  }
}
</style>