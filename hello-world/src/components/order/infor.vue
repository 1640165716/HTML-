<template>
  <div>
    <div class="form-group" style="margin-top: 8px">
      <label class="form-group-label-auto">订购人信息</label>
      <div class="form-group-input">
        <p class="text-right">请填写</p>
      </div>
      <div class="form-group-right">
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-group-label-auto">送达日期</label>
      <div class="form-group-input">
        <p class="text-right">请选择</p>
      </div>
      <div class="form-group-right">
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-group-label">贺卡留言</label>
      <div class="form-group-input">
        <p class="form-group-input__place">填写即赠精美贺卡</p>
      </div>
      <div class="form-group-right">
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {};
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
.form-group-input__place {
  text-align: left;
}
</style>