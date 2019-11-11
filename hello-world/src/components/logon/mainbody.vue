<template>
  <div class="box">
    <div class="hualogo">
      <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" />
    </div>
    <div class="register">
      <van-cell-group>
        <van-field placeholder="请输入手机号" />
        <van-cell-group>
          <van-field center clearable placeholder="请输入短信验证码">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
        </van-cell-group>
      </van-cell-group>
    </div>
    <div class="logoin">
      <div class="form-contrl">
        <button type="button" class="formbtn">手机登录／注册</button>
      </div>
      <div class="flex">
        <div class="flex-left">
          <span>
            账号密码登录
            <van-icon name="arrow" />
          </span>
        </div>
        <div class="flex-right">
          <span>
            注册
            <van-icon name="arrow" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Field } from "vant";
import { CellGroup } from "vant";
import { Button } from "vant";
import { Icon } from "vant";

Vue.use(Icon);
Vue.use(Field);
Vue.use(CellGroup);
Vue.use(Button);
export default {};
</script>
<style scoped>
.box {
  background: #fff;
  padding: 0 16px;
}
.hualogo {
  width: 190px;
  height: 25px;
  padding: 10px 0 44px;
  text-align: center;
  margin: auto;
}
.logoin {
  padding-top: 45px;
  margin: auto;
}
.formbtn {
  width: 100%;
  height: 46px;
  line-height: 46px;
  text-align: center;
  color: #fff;
  background: #ff734c;
  border: 1px solid #ff734c;
  font-size: 16px;
  box-shadow: 0 4px 8px 0 #ffb6a2;
  border-radius: 100px;
  outline: none;
}
.flex {
  margin-top: 16px;
  display: flex;
}
.flex-left {
  color: #71797f;
  line-height: 36px;
  flex: 1;
}
.flex-right {
  flex: 1;
  color: #71797f;
  line-height: 36px;
  text-align: right;
}
</style>