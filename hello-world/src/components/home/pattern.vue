<template>
  <div style="background:#fff; margin-top:.5rem">
    <h3>蛋糕推荐</h3>
    <div class="items" v-for="(value,index) in 6" :key="index">
      <div class="itempic">
        <img
          src="http://img5.imgtn.bdimg.com/it/u=168514289,2790956724&fm=26&gp=0.jpg"
          alt="一鹿(路)有你永生花小夜灯"
        />
      </div>
      <div class="iteminfo">
        <div class="itemtags">
          <span class="itemtag">创意新品</span>
        </div>
        <p class="itemname">一鹿(路)有你永生花小夜灯·永生花礼盒</p>
        <div class="bottom">
          <div class="itemprise">
            <p class="prices">
              <strong>¥298</strong>
              <s>¥398</s>
            </p>
            <p class="sales">已销售39件</p>
          </div>
          <div class="shopcar">
            <van-icon name="cart-o" size="20px" />
          </div>
        </div>
      </div>
    </div>
    <div class="clear"></div>
    <div class="product-more">
      <a href="###" class="viewmore">查看更多</a>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {};
</script>
<style>
.clear {
  clear: both;
}
h3 {
  font-size: 1.14rem;
  padding: 1.43rem 0;
  text-align: center;
  font-weight: normal;
  color: #232628;
}
.items {
  padding: 0 0.29rem 1.7rem;
  font-size: 0.19rem;
  box-shadow: 0 0.29rem 0.86rem 0 #e9ecf0;
  border-radius: 0.29rem;
  float: left;
  width: 50%;
  box-sizing: border-box;
}
img {
  width: 100%;
}
.iteminfo {
  padding: 0.57rem 0.57rem 1.14rem;
  height: 7.8rem;
}
.iteminfo {
  padding: 0.57rem 0.57rem 1.14rem;
  height: 3.9rem;
}
.itemtags {
  margin-bottom: 0.57rem;
}
.itemtag {
  display: inline-flex;
  border-radius: 10rem;
  border: 1px solid #ff734c;
  color: #ff734c;
  font-size: 0.7rem;
  padding: 0 0.28rem;
}
.itemname {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 300;
}
strong {
  font-size: 1.28rem;
  color: #ff734c;
  font-weight: 500;
}
s {
  font-size: 0.71rem;
  color: #71797f;
  margin-left: 0.4rem;
}
.sales {
  font-size: 0.71rem;
  color: #71797f;
  margin: 0;
}
.bottom {
  position: relative;
}
.shopcar {
  position: absolute;
  right: -0.133333rem;
  bottom: 0.133333rem;
}
.viewmore {
  display: block;
  margin: 0 auto;
  font-size: 0.86rem;
  border: 1px solid #232628;
  width: 6.7rem;
  height: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  border-radius: 0.14rem;
  color: #232628;
}
.product-more {
  padding-top: 1rem;
  padding-bottom: 1.42857143rem;
}
</style>