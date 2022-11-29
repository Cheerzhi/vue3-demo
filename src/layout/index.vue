<template>
  <div class="layout">
    <div class="layout-banner" >
      <div class="layout-banner-return" v-if="!hidden" @click="back">返回</div>
      <div class="layout-banner-title" v-if="!hidden">{{title}}</div>
    </div>
    <div class="layout-container">
      <slot />
    </div>
  </div>
</template>

<script setup>

import { defineProps } from "vue";
import { useRouter } from "vue-router";
defineProps({
  title: {
    type: String,
  },
  hidden:{
    type:Boolean,
    default:false,
  }
});
const router = useRouter()
const back = () =>{
  router.back()
}
</script>

<style lang="less">
.layout{
  width:100%;
  min-height:100vh;
  overflow-x:hidden;
  position:relative;
  &-container{
    border-radius:10px;
    background-color:#fff;
    box-shadow:0 0 5px rgba(51,51,51,4);
    padding:20px 10px;
    position:absolute;
    top:160px;
    left:30px;
    right:30px;
  }
  &-banner{
    position:relative;
    height:88px;
    background-color: #3275FA;
    color:#ffffff;
    align-items:center;
    &::after{
      content:' ';
      position:absolute;
      left:-10%;
      right:0;
      bottom:-200px;
      border-radius:50%;
      width:120%;
      height:400px;
      background:#2b84ff;
    }
    &-return{
      position:absolute;
      top:30px;
      left:50px;
      font-size:28px;
      color:#fff;
      z-index:1;
      &::before,&::after{
        content:' ';
        position: absolute;
        border:10px solid transparent;
        border-right-color:#ffffff;
        width:0;
        height:0;
        left:-32px;
        top:5px;
      }
      &::after {
        border-right-color:#3275FA;
        left:-28px;
      }
    }
    &-title{
      position:absolute;
      font-size:32px;
      top:28px;
      left:50%;
      transform:translate(-50%,0);
      color:#fff;
      z-index:1;
    }

  }
}
</style>