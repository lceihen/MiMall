<template>
  <div>
    <order-header :title="title">
      <template v-slot:tip
        ><span>{{ tip }}</span></template
      >
    </order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavFooter from "./../components/NavFooter";
import OrderHeader from "./../components/Order-Header";
import ServiceBar from "./../components/ServiceBar";
export default {
  name: "order",
  data() {
    return {
      title: "",
      tip: "",
    };
  },
  components: { NavFooter, OrderHeader, ServiceBar },
  mounted() {
    let path = this.$route.path;
    if (path == "/order/confirm") {
      this.title = "订单确认";
      this.tip = "请认真填写收货地址";
    } else if (path == "/order/list") {
      this.title = "订单列表";
      this.tip = "请谨防钓鱼链接或诈骗电话";
    } else if (path == "/order/pay") {
      this.title = "订单支付";
      this.tip = "请谨防钓鱼链接或诈骗电话";
    } else {
      this.title = "订单支付";
      this.tip = "请谨防钓鱼链接或诈骗电话";
    }
  },
};
</script>