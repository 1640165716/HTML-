<template>
  <div>
    <Header />
    <NoticeBar />
    <Addmore />
    <Infor />
    <Collspare />
    <Card />
    <SubmitBar />
  </div>
</template>
<script>
import Header from "../components/order/header";
import NoticeBar from "../components/order/noticeBar";
import Addmore from "../components/order/addmore";
import Infor from "../components/order/infor";
import Collspare from "../components/order/collspare";
import Card from "../components/order/card";
import SubmitBar from "../components/order/submitBar";
export default {
  components: {
    Header,
    NoticeBar,
    Addmore,
    Infor,
    Collspare,
    Card,
    SubmitBar
  }
};
</script>