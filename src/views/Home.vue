<template>
  <div class="home">
    <router-view />
    <van-tabbar v-model="active" route replace>
      <van-tabbar-item
        v-for="item in state.tabList"
        :key="item.name"
        :name="item.name"
        :to="item.to"
        :icon="item.icon"
      >
        <span>{{item.tabName}}</span>
        <template #icon="props">
          <img :src="props.active ? item.activeIcon : item.icon" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src

import { ref, reactive } from "vue";
import Charge from "@/assets/image/charge.png";
import ChargeActive from "@/assets/image/chargeActive.png";
import Other from "@/assets/image/other.png";
import OtherActive from "@/assets/image/otherActive.png";
import Record from "@/assets/image/record.png";
import RecordActive from "@/assets/image/recordActive.png";
export default {
  name: "Home",
  setup() {
    const active = ref("charge");
    const state = reactive({
      tabList: [
        {
          name: "charge",
          to: "/home/charge",
          icon: Charge,
          activeIcon: ChargeActive,
          tabName: "充值"
        },
        {
          name: "other",
          to: "/home/other",
          icon: Other,
          activeIcon: OtherActive,
          tabName: "为他人充值"
        },
        {
          name: "record",
          to: "/home/record",
          icon: Record,
          activeIcon: RecordActive,
          tabName: "充值明细"
        }
      ]
    });
    return {
      active,
      state
    };
  }
};
</script>
