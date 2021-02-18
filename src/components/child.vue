<template>
  <button @click="handleName">点击</button>
</template>

<script>
import { watch,watchEffect } from "vue";
export default {
  props: {
    name: {
      type: String,
      default: "zhi"
    }
  },
  setup(props, { emit }) {
    const handleName = () => {
      emit("change-name", "xiaoming");
    };
    return {
      handleName
    };
  }
};
</script>

<style>
</style>