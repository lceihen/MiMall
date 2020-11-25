<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>


//import jsonp from 'jsonp';
//import storage from './storage/index';
//import axios from 'axios';
export default {
  name: 'App',
  components: {
   
  },
  data(){
    return {
      res:{}
    }
  },
  mounted(){
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
  },
  methods:{

  }
}
</script>

<style lang="scss">

@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
</style>
