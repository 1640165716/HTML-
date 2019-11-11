<template>
  <section class="skuselect">
    <van-cell is-link @click="showPopup">
      <div class="media">
        <div class="media-left">配送至</div>
        <div class="media-center">
          <p>
            <van-icon name="location-o" size="15px" />&nbsp;
            <span v-text="name"></span>
          </p>
          <p class="media-desc"></p>
        </div>
        <div class="media-right">
          <van-icon name="ellipsis" />
        </div>
      </div>
    </van-cell>
    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
      <van-area
        :area-list="areaList"
        :columns-placeholder="['请选择', '请选择', '请选择']"
        title="配送至"
        @confirm="onAddrConfirm"
        @cancel="onAddrCancel"
      />
    </van-popup>
  </section>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
import { Popup } from "vant";
import { Cell } from "vant";
import { Area } from "vant";
import areaList from "../json/AreaList";

Vue.use(Area);
Vue.use(Popup);
Vue.use(Cell);
Vue.use(Icon);
export default {
  data() {
    return {
      show: false,
      areaList,
      name: "请选择配送地址"
    };
  },
  watch: {
    show() {
      if (this.$store.getters.getAuthor.place) {
        this.name = this.$store.getters.getAuthor.place;
      } else {
        this.name = "请选择配送地址";
      }
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    onAddrConfirm(event) {
      this.show = false;
      let place, SelectProvinceName, SelectCityName, SelectCountyName;
      SelectProvinceName = event[0].name; // 省
      SelectCityName = event[1].name; // 市
      SelectCountyName = event[2].name; // 区
      place = SelectProvinceName + SelectCityName + SelectCountyName;
      this.$store.dispatch("setAuthor", { place });
    },
    onAddrCancel() {
      this.show = false;
    }
  }
};
</script>
<style scoped>
.skuselect {
  margin-top: 0.57142857rem;
  font-size: 0.2rem;
}
.media {
  display: flex;
  background-color: #fff;
  padding: 1rem 1.14285714rem;
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
.media-desc {
  width: 1.42857143rem;
  text-align: right;
  font-size: 1.14285714rem;
}
</style>