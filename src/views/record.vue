<template>
  <div class="record">
    <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="state.loading"
        :finished="state.isLastPage"
        finished-text="没有更多了"
        @load="getList"
      >
      <div class="record-item" v-for="item in state.list" :key="item.id">{{item}}</div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      loading: false,
      isLastPage: false,
      list:[],
      refreshing:false,
    });
    const getList = ()=>{
      setTimeout(()=>{
        if(state.refreshing){
          state.list = []
          state.refreshing = false
        }
        state.list = []
        state.loading = false
      },1000)
    }
    const onRefresh = ()=>{
      state.isLastPage = false
      state.loading = true
      getList()
    }
    return {
      state,
      onRefresh,
      getList
    }
  }
};
</script>

<style scoped lang="scss">
</style>