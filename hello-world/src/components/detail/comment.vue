<template>
  <div>
    <van-nav-bar left-text="订单评价" right-text="最近已有7681条评价" border />
    <div class="panel-body">
      <div class="comments-item" v-for="value in 3" :key="value">
        <div class="comments-item-head">
          <div class="comments-item-head-left">
            <img
              src="//img02.hua.com/pc/assets/img/avatar_default_07.jpg"
              alt="Pe*er"
              class="comments-item-head-pic"
            />
            <span class="comments-item-head-name">Pe*er</span>
          </div>
          <div class="comments-item-head-right">
            <van-rate readonly v-model="num" size="10px" color="red" />
          </div>
        </div>
        <div class="comments-item-content">太棒了！收到花后，她就成为我的女朋友</div>
        <div class="comments-item-imglist">
          <div class="comments-item-imglist-item"></div>
        </div>
        <div class="comments-item-address">
          <van-icon name="location-o" size="10px" />广西南宁市青秀区
        </div>
      </div>
      <div class="panel-footer">
        <div class="comments-more">查看更多评价</div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
import { Rate } from "vant";

Vue.use(Rate);
Vue.use(Icon);
export default {
  data() {
    return {
      num: 5
    };
  }
};
</script>
<style scoped>
.panel-body {
  border-top: 1px solid #e9ecf0;
}
.comments-item {
  padding: 0.85714286rem 1.14285714rem;
  background-color: #fff;
}
.comments-item-head {
  display: flex;
}
.comments-item-head-left {
  flex: 1;
}
.comments-item-head-pic {
  width: 1.42857143rem;
  height: 1.42857143rem;
  border-radius: 50%;
}
.comments-item-head-name {
  font-size: 0.85714286rem;
  margin-left: 0.57142857rem;
}
.comments-item-content {
  margin-top: 0.85714286rem;
  font-size: 0.92857143rem;
}
.comments-item-imglist {
  display: flex;
  margin-top: 1rem;
}
.comments-item-imglist-item {
  background-image: url(http://img.hua.com/reviewpic/app/2019/08/08/b17825a6fdbb425caad9c88ddf7a5e31.jpeg);
  flex: 1;
  max-width: 5.71428571rem;
  height: 5.71428571rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.comments-item-address {
  margin-top: 0.57142857rem;
  color: #b4babf;
  font-size: 0.78571429rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.panel-footer {
  text-align: center;
  padding: 0.57142857rem 0 1.71428571rem;
}
.comments-more {
  display: inline-block;
  font-size: 0.85714286rem;
  border: 1px solid #232628;
  padding: 0.28571429rem 0.57142857rem;
}
</style>