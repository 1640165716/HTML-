<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- <Tabbat /> -->
  </div>
</template>

<script>
// import Tabbat from "./components/tabbat.vue";

export default {
  name: "app",
  components: {
    // Tabbat
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #fff;
}
</style>
