<template>
  <section class="proinfo">
    <div class="proinfo-head">
      <div class="proinfo-head-title">
        甜美公主-白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝
        <span class="text-orange">甜美设计 清新典雅</span>
      </div>
      <div class="proinfo-head-collect">
        <a href="###" class="navigation">
          <van-icon name="star-o" size="20px" />
        </a>
      </div>
    </div>
    <div class="proinfo-body">
      <div class="proinfo-body-price">
        <span class="proinfo-body-price-sjg">¥368</span>
        <s class="proinfo-body-price-jg">¥485</s>
      </div>
      <div class="proinfo-body-sales">
        已售
        <span>2.17万</span>件
      </div>
    </div>
    <div class="media">
      <div class="media-left">
        <van-icon name="graphic" size="20px" />
      </div>
      <div class="media-center">
        APP下单立减
        <i>7</i>元
      </div>
      <div class="media-right">
        <van-icon name="arrow" />
      </div>
    </div>
  </section>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {};
</script>
<style scoped>
.proinfo {
  padding: 0.8rem 1.14285714rem 0rem;
  background: #fff;
}
.proinfo-head {
  font-size: 15px;
  display: flex;
}
.text-orange {
  color: #ff734c;
}
.proinfo-body {
  margin-top: 0.85714286rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.proinfo-body-price {
  flex: 1;
}
.proinfo-body-price-sjg {
  font-size: 1.42857143rem;
  color: #ff734c;
  font-weight: 600;
}
.proinfo-body-price-jg {
  color: #b4babf;
  margin-left: 0.42857143rem;
  font-size: 1rem;
  margin-right: 1.14285714rem;
}
.proinfo-body-sales {
  width: 8em;
  font-size: 0.85714286rem;
  text-align: right;
}
.proinfo-head-collect {
  width: 2.85714286rem;
  height: 100%;
  text-align: right;
}
.proinfo-head-title {
  flex: 1;
}
.media {
  display: flex;
  background-color: #fff;
  padding: 0.5rem 1.14285714rem;
  align-items: center;
}
.media-left {
  width: 3rem;
  font-size: 0.85714286rem;
  font-weight: 500;
  line-height: 1.42857143rem;
}
.media-center {
  flex: 1;
}
.media-right {
  width: 1.42857143rem;
  text-align: right;
  font-size: 1.14285714rem;
}
</style>