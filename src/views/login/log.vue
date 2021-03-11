<template>
  <div class="log">
    <div class="back" @click="back">
      <img src="../../assets/img/login/close.svg" alt=""/>
    </div>
    <div class="welcome">
      <p>用户登陆</p>
    </div>
    <div class="log-name">
      <input class="login-input" type="text" v-model="username" placeholder="请输入用户id">
    </div>
    <div class="log-name-line"></div>
    <div class="log-code">
      <input class="login-input" type="password" v-model="code" placeholder="请输入密码">
    </div>
    <div class="log-code-line"></div>
    <div class="log-log" @click="log" @mouseenter="change" v-if="!button">
      <img src="../../assets/img/login/log.svg" alt=""/>
    </div>
    <div class="log-log-log" v-else @click="log" @mouseleave="change">
      <img src="../../assets/img/login/log.svg" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: "log",
  data(){
    return{
      username:"",
      code:"",
      button: false,
    }
  },
  methods:{
    back(){
      this.$router.back();
    },
    log(){
      this.$router.replace('/management');
    },
    change(){
      this.button = !this.button;
      console.log(this.button);
    }
  }
}
</script>

<style scoped>
.log{
  overflow:hidden;
}
.welcome{
  margin-top: 30px;
  font-family: coca;
  margin-left: 30px;
  font-size: 30px;
}
.log-name{
  margin-left: 50px;
}
.log-name input{
  border: 0px;
  background: #dbefa1;
}
.log-name-line{
  margin-top: 5px;
  margin-left: 10%;
  width: 80%;
  height: 0%;
  border-top:1px solid #777777;
}
.log-code{
  margin-top: 30px;
  margin-left: 50px;
}
.log-code input{
  border: 0px;
  background: #dbefa1;
}
.log-code-line{
  margin-top:5px;
  margin-left: 10%;
  width: 80%;
  height: 0%;
  border-top:1px solid #777777;
}
.log-log{
  margin-left: 40%;
  width: 20%;
  margin-top: 30px;
}
.log-log img{
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
  border-radius:100%;
}
.log-log-log{
  margin-left: 40%;
  width: 20%;
  margin-top: 30px;
}
.log-log-log img{
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1) inset;
  border-radius:100%;
}
</style>
