<template>
  <van-submit-bar :price="30.50" button-text="去结算" @submit="onSubmit" />
</template>
<script>
import Vue from "vue";
import { SubmitBar } from "vant";

Vue.use(SubmitBar);
export default {
  methods: {
    onSubmit() {}
  }
};
</script>