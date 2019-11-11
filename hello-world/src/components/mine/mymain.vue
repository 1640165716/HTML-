<template>
  <div class="userpage">
    <div class="userinformation">
      <div class="userinformation-notlogin">
        <p class="userinformation-notlogin-hi">Hi,欢迎来到花礼网</p>
        <p class="userinformation-notlogin-gologin" @click="register">
          <a>登录/注册</a>
        </p>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head">
        <div class="panel-head-title">我的订单</div>
        <div class="panel-head-right">
          全部订单
          <i class="iconfont iconfont-arrow-right"></i>
        </div>
      </div>
      <div class="panel-body">
        <div class="order">
          <div class="order-item">
            <img
              class="order-item-icon"
              src="https://img02.hua.com/m/member/center/myinfo_pendingpay.png"
            />
            <p class="order-item-reddot" id="dfk"></p>
            <p class="order-item-txt">待付款</p>
          </div>
          <div class="order-item">
            <img
              class="order-item-icon"
              src="https://img02.hua.com/m/member/center/myinfo_distribution.png"
            />
            <p class="order-item-reddot" id="jrps"></p>
            <p>今日配送</p>
          </div>
          <div class="order-item">
            <img
              class="order-item-icon"
              src="https://img02.hua.com/m/member/center/myinfo_evaluation.png"
            />
            <p class="order-item-reddot" id="dpj"></p>
            <p>待评价</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    register() {
      this.$router.push({
        name: "logon"
      });
    }
  }
};
</script>
<style scoped>
.userinformation {
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.userpage {
  background-image: url("https://img02.hua.com/m/member/center/backgroundv3.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.userinformation-notlogin-hi {
  color: #fff;
}
.userinformation-notlogin-gologin {
  margin-top: 0.57rem;
}
a {
  display: block;
  width: 9rem;
  height: 2.57rem;
  line-height: 2.57rem;
  background-color: #fff;
  border-radius: 4rem;
  font-weight: 500;
  color: #484848;
}
.panel {
  background: #fff;
  margin: 0 0.57142857rem;
  border-radius: 0.28571429rem;
  /* box-shadow: 0 0.28rem 0.43rem; */
}
.panel-head {
  display: flex;
  height: 3.14rem;
  line-height: 3.14rem;
  justify-content: space-between;
  padding: 0 1rem;
}
.order {
  display: flex;
  justify-content: space-around;
}
.order-item {
  width: 33.3%;
  text-align: center;
  padding: 0.85rem 0.42857143rem;
}
.order-item-icon {
  width: 2.28rem;
  height: 2.28rem;
  flex: 1;
}
.order-item-txt {
  margin: 0;
  padding: 0;
}
</style>