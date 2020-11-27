<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://privacy.mi.com/all/zh_CN/" target="_blank">小米集团隐私政策<span>|</span></a>
      <a href="https://xiaomi.tmall.com/" target="_blank">小米天猫店<span>|</span></a>
      <a href="https://static.mi.com/feedback/" target="_blank">问题反馈<span>|</span></a>
      <a href="https://b.mi.com/?client_id=180100031058&masid=17409.0358" target="_blank">政企服务<span>|</span></a>
    </div>
    <div class="copyright">
        © mi.com 京ICP证110507号 <span class="domain">京ICP备10046444号</span> 京公网安备11010802020134号 京网文[2020]0276-042号
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer",
};
</script>
<style  lang="scss" scoped>
.footer{
    height: 234px;
    border-top: 4px solid #FF6600;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
        margin-top: 46px;
        margin-bottom: 31px;
        img{
            width: 53px;
            height: 36px;
            margin-bottom: 13px;

        }
    }
    .footer-link{
        a{
            color: #999999;
            display: inline-block;
        }
        span{
            margin: 0 10px;

        }
        margin-bottom: 13px;
    }
    .copyright{
    .domain{
color: #FF6600;
    }
}
}
</style>