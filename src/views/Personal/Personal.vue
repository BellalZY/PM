<template>
  <div class="Personal">
    <top>
      <span slot="top-title" style="font-family: coca; font-size:30px; color: #777777;">个人信息</span>
    </top>
    <div class="personal-inform">
      <img :src="avatar" alt="" />
      <span class="username" v-if="yes">
        {{ username }}
        <img src="../../assets/img/top/modify.svg" style="height: 30px;width: 30px;" alt="" @click="change"/>
      </span>
      <div class="change-name" v-else>
        <input type="text" v-model="username" maxlength=7 @keyup.enter="change"/>
      </div>
      <span class="userid">userID:{{ userID }}</span>
    </div>
    <van-button color="linear-gradient(to right, #7f7f7f, #f7f7f7" class="modify" to="/modify">修改密码</van-button>
    <van-button color="linear-gradient(to right, #7f7f7f, #f7f7f7" class="quit" to="/homePage">退出登录</van-button>
  </div>
</template>

<script>
import top from "../../components/top/top"
export default {
  name: "Personal",
  components:{
    top,
  },
  data(){
    return{
      avatar:require('../../assets/img/personal/avatar.jpg'),
      username:"我是太空人",
      userID: 123,
      yes:true
    }
  },
  methods:{
    change(){
      this.yes = !this.yes;
    }
  }
}
</script>

<style scoped>
.Personal{
  overflow: scroll;
  height: 92%;
  width: 100%;
}
.personal-inform {
  margin-top: 8%;
}
.personal-inform img{
  position: absolute;
  top: 10%;
  left: 10%;
  height: 100px;
  width: 100px;
  border-radius: 100%;
}
.personal-inform .username{
  position: absolute;
  top: 20%;
  left: 40%;
  font-size: 30px;
  font-family: coca;
}
.personal-inform .username img{
  position: absolute;
  top: 20%;
  left:100%;
}
.personal-inform .change-name{
  position: absolute;
  top: 20%;
  left: 40%;
}
.personal-inform .userid{
   position: absolute;
  left:40%;
  top: 30%;
   font-size: 20px;
   font-family: coca;
 }

personal-inform p{
  margin-left: 50px;
}
.modify{
  position:absolute;
  top:60%;
  left:15%;
  height:5%;
  width:70%;
  font-family: coca;
  font-size:20px;
  letter-spacing: 20px;
}
.quit{
  position:absolute;
  top:75%;
  left:15%;
  height:5%;
  width:70%;
  font-family: coca;
  font-size:20px;
  letter-spacing: 20px;
}
</style>
