<template>
  <div class="payAmt">
    <div class="payAmt-choice">
      <div class="payAmt-choice-title">充值金额</div>
      <div class="payAmt-choice-list">
        <div
          class="payAmt-choice-item"
          v-for="item in chargeList"
          :key="item"
          :class="item===selected||item==otherCharge?'selected':''"
        >{{item}}元</div>
      </div>
    </div>
    <div class="payAmt-choice">
      <div class="payAmt-choice-title">其他充值金额</div>
      <van-field v-model="otherCharge" placeholder="请输入金额" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const selected = ref("");
    const chargeList = ref(["5", "10", "20", "30", "50", "100"]);
    const selectMoney = val => {
      state.payAmt = val;
    };
    const otherCharge = ref("");
    return {
      chargeList,
      selectMoney,
      selected,
      otherCharge
    };
  }
};
</script>

<style scoped lang='scss'>
.payAmt {
  background: #fff;
  padding: 52px 30px 0;
  &-choice {
    &:last-of-type{
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 20px;
    }
    &-title {
      font-size: 32px;
      font-weight: 500;
      line-height: 48px;
    }
    &-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin: 0 30px 30px 0;
      color: #222222;
      font-size: 34px;
    }
    &-item {
      width: 200px;
      height: 120px;
      border-radius: 8px;
      text-align: center;
      border: 1px solid #e8e8e8;
      line-height: 120px;
      margin: 20px 0;
    }
  }
}
</style>