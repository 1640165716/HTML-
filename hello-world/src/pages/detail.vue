<template>
  <div>
    <Detailhead />
    <Detailswipe />
    <Information />
    <Detailsinfo />
    <Addresss />
    <Comment />
    <ChooseUs />
    <Lazyload />
    <Footer />
  </div>
</template>
<script>
import Detailhead from "../components/detail/detailhead";
import Detailswipe from "../components/detail/detailswipe";
import Information from "../components/detail/information";
import Detailsinfo from "../components/detail/detailsinfo";
import Addresss from "../components/detail/address";
import Comment from "../components/detail/comment";
import ChooseUs from "../components/home/chooseUs";
import Lazyload from "../components/detail/Lazyload";
import Footer from "../components/detail/footer";
export default {
  components: {
    Detailhead,
    Detailswipe,
    Information,
    Detailsinfo,
    Addresss,
    ChooseUs,
    Footer,
    Comment,
    Lazyload
  }
};
</script>
