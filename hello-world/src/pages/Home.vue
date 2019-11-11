<template>
  <div>
    <Header />
    <swipe />
    <Brand />
    <Grid />
    <Selection />
    <Forlove />
    <Forlove />
    <Patterns />
    <Patterns />
    <Patterns />
    <Patterns />
    <Groupbuy />
    <ChooseUs />
    <Layout />
  </div>
</template>
<script>
import Header from "../components/home/header.vue";
import Swipe from "../components/home/swipe.vue";
import Brand from "../components/home/brand.vue";
import Grid from "../components/home/grid.vue";
import Selection from "../components/home/selection.vue";
import Forlove from "../components/home/forlove.vue";
import Patterns from "../components/home/pattern.vue";
import Groupbuy from "../components/home/groupbuy.vue";
import ChooseUs from "../components/home/chooseUs.vue";
import Layout from "../components/home/layout.vue";

export default {
  name: "app",
  components: {
    Header,
    Grid,
    Selection,
    Swipe,
    Brand,
    Forlove,
    Patterns,
    Groupbuy,
    ChooseUs,
    Layout
  }
};
</script>