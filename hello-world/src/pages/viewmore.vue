<template>
  <div class="body">
    <Viewmore />
    <Tabhead />
  </div>
</template>
<script>
import Viewmore from "../components/viewMore/header";
import Tabhead from "../components/viewMore/tabhead";
export default {
  components: {
    Viewmore,
    Tabhead
  }
};
</script>
<style scoped>
.body {
  background: #e9ecf0;
}
</style>