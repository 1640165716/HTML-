<template>
  <div>
    <search />
    <Aside />
  </div>
</template>
<script>
import Search from "../components/sort/search";
import Aside from "../components/sort/aside";
export default {
  name: "app",
  components: {
    Search,
    Aside
  }
};
</script>

