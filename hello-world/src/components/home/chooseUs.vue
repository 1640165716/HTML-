<template>
  <div style="background:#fff">
    <h3 class="brand-title">为什么选择我们</h3>
    <div class="brand-list">
      <div class="brand-item" v-for="(value,index) in arr" :key="index">
        <img class="brandimg" :src="value.url" :alt="value.name" />
        <p class="brandtitle" v-text="value.name"></p>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          url: "https://img02.hua.com/m/pro_detail/m_details_brand_01.png",
          name: "获评鲜花龙头企业"
        },
        {
          url: "https://img02.hua.com/m/pro_detail/m_details_brand_02.png",
          name: "1~3小时送花上门"
        },
        {
          url: "https://img02.hua.com/m/pro_detail/m_details_brand_03.png",
          name: "赛事冠军花艺师团队"
        },
        {
          url: "https://img02.hua.com/m/pro_detail/m_details_brand_04.png",
          name: "严选花材"
        },
        {
          url: "https://img02.hua.com/m/pro_detail/m_details_brand_05.png",
          name: "12道严苛品控标准"
        },
        {
          url: "https://img02.hua.com/m/pro_detail/m_details_brand_06.png",
          name: "500万用户信赖好评"
        }
      ]
    };
  }
};
</script>
<style scoped>
.brand-item {
  float: left;
  width: 33.33333333%;
  text-align: center;
  padding-bottom: 1.7rem;
}
.clear {
  clear: both;
}
.brandimg {
  width: 4.57rem;
  height: 4.57rem;
}
.brandtitle {
  font-size: 0.86rem;
  margin-top: 0.28rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>