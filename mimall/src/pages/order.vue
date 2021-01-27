<template>
  <div>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavFooter from "./../components/NavFooter";
import ServiceBar from "./../components/ServiceBar";
export default {
  name: "order",
  data() {
    return {
      title: "",
      tip: "",
    };
  },
  components: { NavFooter, ServiceBar },
};
</script>