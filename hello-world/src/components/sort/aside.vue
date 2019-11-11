<template>
  <div>
    <van-tree-select :items="items" :main-active-index.sync="activeIndex">
      <template slot="content">
        <van-grid :column-num="3" v-if="activeIndex === 0">
          <van-image src="https://img02.hua.com/slider/19_day1111_all.jpg" />
          <van-grid-item
            v-for="(value,index) in arr1"
            :key="index"
            :icon="value.url"
            :text="value.name"
          />
        </van-grid>
        <van-grid :column-num="3" v-if="activeIndex === 1">
          <van-image src="https://img02.hua.com/m/category/Classification/flower.png?v" />
          <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
        </van-grid>
        <van-grid :column-num="3" v-if="activeIndex === 2">
          <van-image src="https://img02.hua.com/m/category/Classification/ppf.png?v" />
          <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
        </van-grid>
        <van-grid :column-num="3" v-if="activeIndex === 3">
          <van-image src="https://img02.hua.com/m/category/Classification/cake.png" />
          <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
        </van-grid>
        <van-grid :column-num="3" v-if="activeIndex === 4">
          <van-image src="https://img02.hua.com/m/category/Classification/gift.png?v" />
          <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
        </van-grid>
        <van-grid :column-num="3" v-if="activeIndex === 5">
          <van-image src="https://img02.hua.com/m/category/Classification/hamper.png" />
          <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
        </van-grid>
        <van-grid :column-num="3" v-if="activeIndex === 6">
          <van-image src=" https://img02.hua.com/m/category/Classification/plants.png?v" />
          <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
        </van-grid>
      </template>
    </van-tree-select>
  </div>
</template>
<script>
import Vue from "vue";
import { TreeSelect } from "vant";
import { Image } from "vant";
import { Grid } from "vant";
import { GridItem } from "vant";

Vue.use(TreeSelect);
Vue.use(Image);
Vue.use(Grid);
Vue.use(GridItem);
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        { text: "热门推荐" },
        { text: "鲜花" },
        { text: "永生花" },
        { text: "蛋糕" },
        { text: "特色礼品" },
        { text: "礼篮" },
        { text: "绿植花卉" }
      ],
      arr1: [
        {
          url:
            "https://img02.hua.com/m/category/Classification/m_category_hot_Lover.png",
          name: "送恋人鲜花"
        },
        {
          url:
            "https://img02.hua.com/m/category/Classification/m_category_hot_Elder.png",
          name: "送长辈鲜花"
        },
        {
          url:
            "https://img02.hua.com/m/category/Classification/m_category_hot_Birthday.png",
          name: "生日鲜花"
        },
        {
          url:
            "https://img02.hua.com/m/category/Classification/m_category_hot_Boxedflowers.png",
          name: "礼盒鲜花"
        },
        {
          url:
            "https://img02.hua.com/m/category/Classification/m_category_hot_PPF.png",
          name: "永生花"
        },
        {
          url:
            "https://img02.hua.com/m/category/Classification/m_category_hot_Cake.png",
          name: "蛋糕"
        },
        {
          url:
            "https://img02.hua.com/m/category/Classification/m_category_hot_Cake_ganso.png",
          name: "元祖蛋糕"
        },
        {
          url:
            "https://img02.hua.com/m/category/Classification/m_category_hot_Goldfoilflower.png",
          name: "金箔花"
        },
        {
          url:
            "https://img02.hua.com/m/category/Classification/m_category_hot_Jewelry.png",
          name: "首饰"
        },
        {
          url:
            "https://img02.hua.com/m/category/Classification/m_category_hot_Chocolate_qiaoluo.png",
          name: "巧罗巧克力"
        },
        {
          url:
            "https://img02.hua.com/m/category/Classification/m_category_hot_CreativeGifts.png",
          name: "创意礼品"
        },
        {
          url:
            "https://img02.hua.com/m/category/Classification/m_category_hot_Groupbuy.png",
          name: "企业团购"
        }
      ]
    };
  }
};
</script>
<style scoped>
.van-tree-select__content {
  height: 650px;
}
.van-tree-select__nav {
  height: 650px;
}
</style>