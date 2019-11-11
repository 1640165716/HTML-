<template>
  <div class="list">
    <h4 class="guess-title">猜你喜欢</h4>
    <div class="guess-list">
      <div class="guess-item" v-for="value in 6" :key="value">
        <div class="guess-item-img">
          <img
            class="imgs"
            src="http://img3.imgtn.bdimg.com/it/u=1180539614,727313803&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <div class="guess-item-detail">
          <div class="guess-item-info">
            <span class="guess-item-name">一往情深</span>·
            <span class="guess-item-desc">精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</span>
          </div>
          <div class="guess-item-price">¥239</div>
        </div>
      </div>
    </div>
    <div class="guess-bottom">
      <span>已经到底喽…</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.list {
  background: #fff;
  margin-top: 0.57142857rem;
  padding-bottom: 3.5rem;
}
.guess-title {
  height: 4rem;
  font-size: 1.14285714rem;
  color: #232628;
  padding: 0 1.14285714rem;
  line-height: 4rem;
  font-weight: normal;
}
.guess-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.guess-item {
  width: 48.08743169%;
  box-shadow: 0px 4px 6px 0px #dee2e5;
  margin: 0 0.93333333% 0.57142857rem;
  border-radius: 0.28571429rem;
}
.imgs {
  width: 100%;
}
.guess-item-detail {
  height: 3.71428571rem;
  padding: 0.42857143rem 0.57142857rem;
}
.guess-item-info {
  font-size: 0.85714286rem;
  color: #232628;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.guess-item-price {
  margin-top: 0.42857143rem;
  font-size: 1rem;
  color: #ff734c;
}
.guess-bottom {
  height: 2.57142857rem;
  margin-top: 0.14285714rem;
  text-align: center;
  font-size: 0.85714286rem;
  line-height: 2.57142857rem;
  color: #71797f;
}
</style>