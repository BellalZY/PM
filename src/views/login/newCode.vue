<template>
  <div class="newCode">
    <div class="back" @click="back">
      <img src="../../assets/img/login/close.svg" alt="" />
    </div>
    <div class="welcome">
      <p>修改密码</p>
    </div>
    <div class="login-name">
      <input class="login-input" type="text" v-model="username" placeholder="输入修改后的密码">
    </div>
    <div class="login-name-line"></div>
    <div class="login-code">
      <input class="login-input" type="password" v-model="code" placeholder="再次确认密码">
    </div>
    <div class="login-code-line"></div>
    <div class="login-login" @click="login" @mouseover="change" v-if="!button">
      <img src="../../assets/img/login/log.svg" alt=""/>
    </div>
    <div class="login-login-login" v-else @click="login" @mouseleave="change">
      <img src="../../assets/img/login/log.svg" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: "newCode",
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
    login(){
      this.$router.replace('/log');
    },
    change(){
      this.button = !this.button;
      console.log(this.button);
    }
  }
}
</script>

<style scoped>
.newCode{
  overflow:hidden;
}
.welcome{
  margin-top: 30px;
  font-family: coca;
  margin-left: 30px;
  font-size: 30px;
}
.login-name{
  margin-left: 50px;
}
.login-name input{
  border: 0px;
  background: #dbefa1;
}
.login-name-line{
  margin-top: 5px;
  margin-left: 10%;
  width: 80%;
  height: 0%;
  border-top:1px solid #777777;
}
.login-code{
  margin-top: 30px;
  margin-left: 50px;
}
.login-code input{
  border: 0px;
  background: #dbefa1;
}
.login-code-line{
  margin-top:5px;
  margin-left: 10%;
  width: 80%;
  height: 0%;
  border-top:1px solid #777777;
}
.login-login{
  margin-left: 40%;
  width: 20%;
  margin-top: 30px;
}
.login-login img{
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
  border-radius:100%;
}
.login-login-login{
  margin-left: 40%;
  width: 20%;
  margin-top: 30px;
}
.login-login-login img{
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1) inset;
  border-radius:100%;
}
</style>
