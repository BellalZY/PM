<template>
  <div class ="homePage">
    <h1>Live your life</h1>
    <h2>学会自我管理.</h2>
    <van-button color="linear-gradient(to right, #7f7f7f, #f7f7f7" class="login" to="/login">新账号注册</van-button>
    <van-button color="linear-gradient(to right, #7f7f7f, #f7f7f7" class="log" to="/log">用户登陆</van-button>
    <router-link :to="{path:'/author'}">联系我们？</router-link>
  </div>
</template>

<script>
export default {
  name: "homePage"
}
</script>

<style scoped>
.homePage{
  overflow:scroll
}
.homePage h1{
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  font-size: 50px;
  text-align: center;
  user-select: none;
}
.homePage h1::before{
  content: "live your life";
  position: absolute;
  filter: blur(2px);
  mix-blend-mode: difference;
}
.homePage h2{
  font-family: coca;
  text-align: center;
  font-size: 30px;
}
.login{
  position:absolute;
  top:40%;
  left:10%;
  height:10%;
  width:80%;
  font-family: coca;
  font-size:20px;
  letter-spacing: 20px;
}
.log{
  position:absolute;
  top:60%;
  left:10%;
  height:10%;
  width:80%;
  font-family: coca;
  font-size:20px;
  letter-spacing: 20px;
}
.homePage a{
  position: absolute;
  font-family: normal;
  top:80%;
  right:0%;
}
.homePage a:link{
  color:#000000;
}
.homePage a:active{
  color:#000000;
}
.homePage a:visited{
  color:#000000;
}
</style>
