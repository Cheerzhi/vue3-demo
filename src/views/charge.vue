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
        手机号:
        <span class="charge-person-value">{{state.mobile}}</span>
      </div>
    </div>
    <PayAmt />
    <div class="charge-btnArea">
      <van-button type="primary" round large :loading="loading">立即充值</van-button>
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
  &-person {
    width: 600px;
    margin: 20px auto 0;
    border: 1px solid #09b6f2;
    border-radius: 20px;
    background: #09b6f2;
    &-label {
    }
    &-value {
    }
  }
}
</style>