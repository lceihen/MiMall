<template>
<div>
   <order-header></order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
</div>
</template>
<script>
import NavFooter from './../components/NavFooter';
import OrderHeader from './../components/Order-Header';
export default {
  name:'cart',
  components: {NavFooter,OrderHeader},
    
}
</script>