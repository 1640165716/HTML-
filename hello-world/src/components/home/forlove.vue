<template>
  <div class="goodlist">
    <h3>送恋人/爱情鲜花</h3>
    <div class="flower-style">
      <div class="flowerlist" v-for="(n,index) in data" :key="index" @click="detail">
        <div class="flowerimg">
          <img :src="n.url" :alt="n.name" />
        </div>
        <div class="flowerinfo">
          <p class="flowername" v-text="n.name">一往情深</p>
          <p class="flowertitle" v-text="n.title">精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</p>
          <div class="introduce" v-text="n.infor">经典爆款，年销售冠军！</div>
          <div class="infotags">
            <span class="tagpromo" v-text="n.tag">畅销爆款</span>
          </div>
          <div class="bottom">
            <div class="flowerprise">
              <p class="pricesinfo">
                <strong v-text="n.prise">¥239</strong>
                <s v-text="n.oldprise">¥315</s>
              </p>
              <p class="sales" v-text="n.sales">已销售7.4万件</p>
            </div>
            <div class="shopcar">
              <van-icon name="cart-o" size="20px" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-more">
      <a class="viewmore" @click="viewmore">查看更多</a>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
import axios from "axios";

Vue.use(Icon);
export default {
  data() {
    return {
      data() {
        return {
          data: []
        };
      }
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      axios.get("http://localhost:3000/data.json").then(res => {
        this.data = res.data.arr;
        window.console.log(res.data.arr);
      });
    },
    detail() {
      this.$router.push({
        name: "detail"
      });
    },
    viewmore() {
      this.$router.push({
        name: "viewmore"
      });
    }
  }
};
</script>
<style scoped>
h3 {
  font-size: 1.14285714rem;
  padding: 1.42857143rem 0;
  text-align: center;
  font-weight: normal;
  color: #232628;
}
.flowerlist {
  font-size: 14px;
  margin-top: 0.85714286rem;
  box-shadow: 0 0.29rem 0.86rem 0 #e9ecf0;
  border-radius: 0.29rem;
}
.flowerlist {
  display: flex;
}
img {
  width: 12.57142857rem;
}
.flowerinfo {
  padding: 0 1.42857143rem;
}
.flowername {
  font-weight: 300;
  margin: 0;
}
.flowertitle {
  font-size: 0.85714286rem;
  font-weight: 300;
  margin: 0;
}
.introduce {
  margin-top: 0.85714286rem;
  padding: 0.71428571rem 0;
  border-top: 1px solid #e9ecf0;
  border-bottom: 1px solid #e9ecf0;
  font-size: 0.78571429rem;
  font-weight: 500;
}
.pricesinfo {
  margin: 0;
  margin-top: 1.14rem;
}
strong {
  font-size: 1.28571429rem;
  color: #ff734c;
  font-weight: 500;
}
s {
  font-size: 0.71428571rem;
  color: #71797f;
  margin-left: 0.42857143rem;
}
.sales {
  font-size: 0.71428571rem;
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
}
.goodlist {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background: #fff;
}
.tagpromo {
  background-color: #ff734c;
  color: #fff;
  display: inline-flex;
  border-radius: 10rem;
  font-size: 0.71428571rem;
  padding: 0 0.28571429rem;
}
</style>