<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, i) in item" :key="i">
                    <a :href="'/#/product/' + sub.id">
                      <img :src="sub.img" alt="" />{{ sub.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id"
              ><img :src="item.img" alt=""
            /></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar> </service-bar>
  </div>
</template>
<script>
import ServiceBar from "../components/ServiceBar";
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "index",
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg",
        },
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米8青春版",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米9青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "小米10青春版",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "小米11青春版",
          },
        ],
        [
          {
            id: 34,
            img: "/imgs/item-box-1.png",
            name: "小米8青春版",
          },
          {
            id: 35,
            img: "/imgs/item-box-1.png",
            name: "小米9青春版",
          },
          {
            id: 36,
            img: "/imgs/item-box-1.png",
            name: "小米10青春版",
          },
          {
            id: 37,
            img: "/imgs/item-box-1.png",
            name: "小米11青春版",
          },
        ],
        [
          {
            id: 38,
            img: "/imgs/item-box-1.png",
            name: "小米8青春版",
          },
          {
            id: 39,
            img: "/imgs/item-box-1.png",
            name: "小米9青春版",
          },
          {
            id: 40,
            img: "/imgs/item-box-1.png",
            name: "小米10青春版",
          },
          {
            id: 41,
            img: "/imgs/item-box-1.png",
            name: "小米11青春版",
          },
        ],
        [
          {
            id: 42,
            img: "/imgs/item-box-1.png",
            name: "小米8青春版",
          },
          {
            id: 43,
            img: "/imgs/item-box-1.png",
            name: "小米9青春版",
          },
          {
            id: 44,
            img: "/imgs/item-box-1.png",
            name: "小米10青春版",
          },
          {
            id: 45,
            img: "/imgs/item-box-1.png",
            name: "小米11青春版",
          },
        ],
        [
          {
            id: 46,
            img: "/imgs/item-box-1.png",
            name: "小米8青春版",
          },
          {
            id: 47,
            img: "/imgs/item-box-1.png",
            name: "小米9青春版",
          },
          {
            id: 48,
            img: "/imgs/item-box-1.png",
            name: "小米10青春版",
          },
          {
            id: 49,
            img: "/imgs/item-box-1.png",
            name: "小米11青春版",
          },
        ],
        [
          {
            id: 50,
            img: "/imgs/item-box-1.png",
            name: "小米8青春版",
          },
          {
            id: 51,
            img: "/imgs/item-box-1.png",
            name: "小米9青春版",
          },
          {
            id: 52,
            img: "/imgs/item-box-1.png",
            name: "小米10青春版",
          },
          {
            id: 53,
            img: "/imgs/item-box-1.png",
            name: "小米11青春版",
          },
        ],
      ],
    };
  },
  mounted(){
this.get();
  },
  methods:{
get(){
  console.log(this.menuList)
}
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.index {
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
  .swiper-box { 
     .nav-menu{
position: absolute;
width: 264px;
height: 451px;
z-index: 9;
padding: 26px 0;
background-color: #55585a7a;
box-sizing: border-box;
.menu-wrap{
  .menu-item{
    height: 50px;
    line-height: 50px;
    a{
      position: relative;
      display: block;
      font-size: 16px;
      color: #ffffff;
      padding-left: 30px;
      &:after{
        position: absolute;
        right: 30px;
        top: 17.5px;
        content: ' ';
@include bgImg(10px,15px,'/imgs/icon-arrow.png',contain);
      }
    }
    &:hover{
      background-color: $colorA;
      .children{
        display: block;
      }
    }
    .children{
      width: 962px;
      height: 451px;
  display: none;
      position: absolute;
      top: 0;
      left: 264px;
      border: 1px solid $colorH ;
      box-sizing: border-box;
      ul {
display: flex;
justify-content: space-between;
height: 75px;
  background-color: $colorG;
li{
height: 75px;
line-height: 75px;
flex: 1;
padding-left: 23px;
}
img{
  width: 42px;
  height: 35px;
  vertical-align: middle;
  margin-right: 15px;
}
    a{
          z-index: 1;
      color: $colorB;
      font-size: 14px;
  
    }

      }
    }
  }
}
  }
    .swiper-container {
      height: 451px;
      .swiper-button-prev{
        left: 274px;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }

  }
}
</style>