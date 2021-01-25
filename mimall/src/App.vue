<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import jsonp from 'jsonp';
//import storage from './storage/index';
import axios from "axios";

export default {
  name: "App",
  components: {},
  data() {
    return {
      res: {},
    };
  },
  mounted() {
    //storage.setItem('userinner',{a:1},"user");
    //storage.setItem('b',{'a':1});
    //storage.clear('a','user');
    // axios.get('./mock/user/login.json').then((res)=>{
    //   this.res=res
    //   this.getaxios();
    // });
    // axios.get('/user/login').then((res)=>{
    //   this.res=res
    //   this.getaxios();
    // });
    this.getUser();
    this.getCartCount();
  },
  methods: {
    getUser() {
      axios.get("/user").then((res = {}) => {
        // console.log(res);
        this.$store.dispatch("saveUserName", res.username);
      });
    },

    getCartCount() {
      axios.get("/carts/products/sum").then((res = 0) => {
        this.$store.dispatch("saveCartCount", res);
      });
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>
