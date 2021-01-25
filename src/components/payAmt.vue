<template>
  <div class="payAmt">
    <div class="payAmt-choice">
      <div class="payAmt-choice-title">充值金额</div>
      <div
        class="payAmt-choice-item"
        v-for="item in payAmtList"
        :key="item"
        :class="item===state.payAmt?'selected':''"
      >{{item}}元</div>
    </div>
    <div class="payAmt-choice">
      <div class="payAmt-choice-title">充值金额</div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const chargeList = ref(["5", "10", "20", "30", "50", "100"]);
    const selectMoney = val => {
      state.payAmt = val;
    };
    return {
      chargeList,
      selectMoney
    };
  }
};
</script>

<style>
</style>