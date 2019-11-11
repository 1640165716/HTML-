<template>
  <div class="body">
    <Heads />
    <Mainbody />
    <Others />
  </div>
</template>
<script>
import Heads from "../components/logon/head";
import Mainbody from "../components/logon/mainbody";
import Others from "../components/logon/others";
export default {
  components: {
    Heads,
    Mainbody,
    Others
  }
};
</script>
<style scoped>
.body {
  background: #fff;
  height: 100%;
}
</style>