<template>
  <van-swipe @change="onChange">
    <van-swipe-item v-for="(n,index) in arr" :key="index" style="position: relative">
      <img :src="n.url" alt="!!!" />
    </van-swipe-item>
    <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
  </van-swipe>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          url:
            "http://img3.imgtn.bdimg.com/it/u=2739567938,2023163669&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img3.imgtn.bdimg.com/it/u=393058939,2888749616&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img5.imgtn.bdimg.com/it/u=1213936659,2300587202&fm=15&gp=0.jpg"
        },
        {
          url:
            "http://img0.imgtn.bdimg.com/it/u=4271814913,1411215645&fm=26&gp=0.jpg"
        }
      ],
      current: 0
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>
<style scoped>
.custom-indicator {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
</style>