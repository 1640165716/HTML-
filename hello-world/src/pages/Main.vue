<template>
  <div class="bo">
    <keep-alive>
      <router-view />
    </keep-alive>
    <Tabbat />
  </div>
</template>
<script>
import Tabbat from "../components/tabbat.vue";
export default {
  components: {
    Tabbat
  }
};
</script>
<style scoped>
.bo {
  background: #e9ecf0;
}
</style>
