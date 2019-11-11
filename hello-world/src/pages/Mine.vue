<template>
  <div>
    <Myhead />
    <Mymain />
    <Grid1 />
    <Grid2 />
  </div>
</template>
<script>
import Myhead from "../components/mine/myhead";
import Mymain from "../components/mine/mymain";
import Grid1 from "../components/mine/grid1";
import Grid2 from "../components/mine/grid2";
export default {
  name: "app",
  components: {
    Myhead,
    Mymain,
    Grid1,
    Grid2
  }
};
</script>