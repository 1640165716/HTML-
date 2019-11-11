<template>
  <van-collapse v-model="activeNames">
    <van-collapse-item title="备注/优惠券/权益卡/发票" name="1">
      <div class="form-group">
        <label class="form-group-label">备注：</label>
        <div class="form-group-input">
          <p class="form-group-input__place">选填</p>
        </div>
        <div class="form-group-right">
          <van-icon name="arrow" />
        </div>
      </div>
      <van-coupon-cell />
      <van-radio-group v-model="radio">
        <van-radio name="1">我要开发票</van-radio>
      </van-radio-group>
    </van-collapse-item>
  </van-collapse>
</template>
<script>
import Vue from "vue";
import { Collapse, CollapseItem } from "vant";
import { CouponCell, CouponList } from "vant";
import { RadioGroup, Radio } from "vant";

Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(CouponCell).use(CouponList);
Vue.use(Collapse).use(CollapseItem);
export default {
  data() {
    return {
      activeNames: [""],
      radio: ""
    };
  }
};
</script>
<style scoped>
.form-group {
  display: flex;
  padding: 0 16px 0 16px;
  height: 49px;
  color: #232628;
  font-size: 14px;
  border-top: 1px solid #f7f9fa;
  background: #fff;
  line-height: 49px;
}
.form-group-label-auto {
  width: 64px;
}
.form-group-input {
  flex: 1;
  text-align: right;
  padding: 0 10px;
  color: #757575;
}
.form-group-right {
  width: 16px;
  text-align: right;
  font-size: 12px;
}
</style>