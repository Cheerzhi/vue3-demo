<template>
  <Layout title="访问申请列表">
    列表页
  </Layout>
</template>

<script setup>
import {  reactive,ref,onMounted  } from 'vue';
const name = reactive("123")
const nameRef = ref('123')
console.log(name === nameRef.value);

onMounted(()=>{
  // name = ''
  // nameRef.value = "12"
})
</script>

<style lang="less" scoped>

</style>