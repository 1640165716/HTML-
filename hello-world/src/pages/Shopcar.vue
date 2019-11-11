<template>
  <div>
    <Shophead />
    <Emptycar />
    <Guess />
  </div>
</template>
<script>
import Shophead from "../components/shopcar/shophead";
import Emptycar from "../components/shopcar/emptycar";
import Guess from "../components/shopcar/guess";
export default {
  name: "app",
  components: {
    Shophead,
    Emptycar,
    Guess
  }
};
</script>

