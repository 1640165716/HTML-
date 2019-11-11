<template>
  <div style="background:#fff">
    <!-- 标题 -->
    <div class="title">一秒选花</div>
    <!-- 选项 -->
    <div class="scene-list">
      <div class="sceneItem" v-for="(value,index) in arr1" :key="index">
        <img class="photo" :src="value.url" alt="送恋人" />
        <span class="first-title" v-text="value.name"></span>
      </div>
    </div>
    <!-- 用途 -->
    <div class="scene-list">
      <div class="sceneItem" v-for="(value,index) in arr2" :key="index">
        <img class="photo" :src="value.url" :alt="value.name" />
        <span class="scecond-title" v-text="value.name">生日祝福</span>
      </div>
    </div>
    <!-- 推荐 -->
    <div class="scene-list" style="height:9.6rem">
      <div class="bgimg">
        <p class="bgname">特价专区</p>
        <p class="bgdesc">超值好货</p>
        <div class="bgbottom">
          <span class="bglabel" style="font-size:12px">限时直降</span>
          <span class="bgtext">
            ¥132
            <s>¥188</s>
          </span>
        </div>
      </div>
      <div
        class="bgimg"
        style="background-image: url(https://img02.hua.com/m/home/img/m_home_ranklist2.png);"
      >
        <p class="bgname">热销榜</p>
        <p class="bgdesc">集万千宠爱</p>
        <div class="bgbottom">
          <span class="bglabel" style="font-size:12px">大家都在买</span>
          <span class="bgtext" style="font-size:12px">热销10.9万束</span>
        </div>
      </div>
    </div>
    <!-- 新品 -->
    <div class="scene-list">
      <div class="sceneItem" v-for="(value,index) in arr3" :key="index">
        <img class="newimg" :src="value.url" :alt="value.name" />
        <span class="pange" v-text="value.name">新品来袭</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr1: [
        {
          url: "https://img02.hua.com/m/home/img/m_home_use_lover.png",
          name: "送恋人"
        },
        {
          url: "https://img02.hua.com/m/home/img/m_home_use_elder.png",
          name: "送长辈"
        },
        {
          url: "https://img02.hua.com/m/home/img/m_home_use_friends.png",
          name: "送朋友"
        }
      ],
      arr2: [
        {
          url: "https://img02.hua.com/m/home/img/m_home_use_birthday2.png",
          name: "生日祝福"
        },
        {
          url: "https://img02.hua.com/m/home/img/m_home_use_profess2.png",
          name: "表白求婚"
        },
        {
          url: "https://img02.hua.com/m/home/img/m_home_use_business2.png",
          name: "开业商务"
        },
        {
          url: "https://img02.hua.com/m/home/img/m_home_use_anniversary2.png",
          name: "周年纪念"
        }
      ],
      arr3: [
        {
          url: "https://img02.hua.com/m/home/img/m_home_category_new2.png",
          name: "新品来袭"
        },
        {
          url: "https://img02.hua.com/m/home/img/m_home_category_quality2.png",
          name: "品味之选"
        },
        {
          url: "https://img02.hua.com/m/home/img/m_home_category_you2.png",
          name: "设计师甄选"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.title {
  font-size: 1rem;
  padding: 0.85714286rem;
  line-height: 1em;
  color: #232628;
}
.title::before {
  content: "";
  display: inline-block;
  width: 0.21428571rem;
  height: 1em;
  background: #435448;
  margin-right: 0.42857143rem;
}
.scene-list {
  display: flex;
  justify-content: space-around;
  padding-bottom: 0.8rem;
}
.sceneItem {
  position: relative;
  margin: 0 0.1rem;
}
.photo {
  width: 100%;
}
.first-title {
  position: absolute;
  bottom: 0.7rem;
  left: 0;
  right: 0;
  z-index: 1;
  color: #fff;
  text-align: center;
  font-size: 15px;
}
.scecond-title {
  position: absolute;
  top: 0.28571429rem;
  left: 0;
  right: 0;
  z-index: 1;
  text-align: center;
}
.bgimg {
  background: url(https://img02.hua.com/m/home/img/m_home_special2.png);
  overflow: hidden;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  border: 1px solid #e9ecf0;
  padding: 0.85714286rem;
}
.bgname {
  margin: 0;
  color: inherit;
  font-size: 1.186667rem;
}
.bgdesc {
  margin: 0;
  font-size: 1rem;
  color: #71797f;
}
.bgbottom {
  position: absolute;
  bottom: 0.85714286rem;
  left: 0.85714286rem;
}
.bglabel {
  border-radius: 2rem;
  background: #ff734c;
  padding: 0.07142857rem 0.42857143rem;
  color: #fff;
  margin-right: 0.14285714rem;
}
s {
  color: #b4babf;
}
.newimg {
  width: 100%;
}
.pange {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(35, 38, 40, 0.8);
  color: #fff;
  text-align: center;
  font-size: 0.85714286rem;
  padding: 0.28571429rem 0;
}
</style>