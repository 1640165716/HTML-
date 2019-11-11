<template>
  <div style="padding-bottom: 3.5rem;">
    <div class="box">
      <a>企业团购</a>
      <a>设计师款</a>
      <a>同城鲜花</a>
      <a>花语大全</a>
    </div>
    <div class="box">
      <a>花礼优势</a>
      <a>勇敢爱</a>
      <a>常见问题</a>
      <a>关于我们</a>
    </div>
    <div class="footer-entry">
      <div class="footer-entry-item">
        <span class="icon">
          <van-icon name="tv-o" size="30px" />
        </span>
        <p>客户端</p>
      </div>
      <div class="footer-entry-item">
        <span class="icon">
          <van-icon name="service-o" size="30px" />
        </span>
        <p>客服</p>
      </div>
    </div>
    <p class="footer-copyright">
      Copyright © 2005~2019 花礼网（中国鲜花礼品网）版权所有
      <br />中国鲜花网领先品牌，鲜花速递专家！
    </p>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {};
</script>
<style scoped>
.box {
  display: flex;
  background: #fff;
  justify-content: space-around;
  padding: 0.5rem 0rem;
}
a {
  display: block;
  padding: 0.28rem 0.5rem;
  margin: 0 1rem;
  background: #e9ecf0;
  text-align: center;
  font-size: 0.86rem;
  flex: 1;
}
.footer-entry {
  display: flex;
  justify-content: space-around;
  text-align: center;
  background: #fff;
  padding-top: 1.5rem;
}
.icon {
  display: block;
  width: 2.6rem;
  height: 2.6rem;
  line-height: 3.6rem;
  text-align: center;
  border-radius: 50%;
  background: #e9ecf0;
}
.footer-copyright {
  padding: 1rem 0;
  font-size: 0.7rem;
  color: #b4babf;
  text-align: center;
  background: #fff;
}
</style>