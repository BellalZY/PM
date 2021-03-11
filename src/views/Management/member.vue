<template>
  <div class="member">
    <div class="search" v-show="managementState">
      <img src="../../assets/img/management/clear.svg" v-show="keyValue" @click="clearSearch" alt=""/>
      <input placeholder="请输入用户名称" v-model="keyValue" @keyup.enter="memberSearch">
      <img src="../../assets/img/management/search.svg" alt=""/>
    </div>
    <div class="members">
      <div class="line"></div>
      <div class="members-me">
        <div class="title">
          <p>个人管理</p>
          <div class="over"></div>
        </div>
        <span>{{ me }}</span>
        <div class="quit">
          <button @click="quit">退出小组</button>
        </div>
      </div>
      <div class="over"></div>
      <p>小组成员</p>
      <div class="member-list" v-for="(item,index) in members" :key="index">
        {{ item }}
        <img src="../../assets/img/management/delete01.svg" v-show="managementState" @click="remove(index)" alt="" />
        <div class="line"></div>
      </div>
      <div class="member-management">
        <button v-show="!managementState" @click="changeState">管理成员</button>
        <button v-show="managementState" @click="changeState">完成管理</button>
        <div class="member-add" v-show="addState" @click="add">
          <button>
            <img src="../../assets/img/management/add.svg" alt="" />
            <span>添加成员</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "member",
  data(){
    return{
      isTeam:0,
      isMember:0,
      me:"我是太空人",
      members:["Sherlock Holmes","John Watson","CCC","DDD","EEE","不考上北航不改名"],
      managementState:false,
      addState:false,
    }
  },
  props:{
    keyValue:{
      type: String,
      required : true
    }
  },
  methods:{
    clearSearch(){
      this.keyValue="";
    },
    changeState(){
      this.managementState = !this.managementState
    },
    remove(index){
      this.members.splice(index,1);
    },
    add(){
      this.members.push();
    },
    quit(){
      this.isTeam = 1;
      this.$emit('isTeam',this.isTeam);
    },
    memberSearch(){
      if(this.keyValue === "") this.isMember = 0;
      else this.isMember = 2;
      this.$emit('kv',this.keyValue);
      this.$emit('isMember',this.isMember);
    }
  }
}

</script>

<style scoped>
.member{
  margin-top: 50px;
  overflow: scroll;
}
.search{
  background-color: #F7F8FA;
  display: flex;
  margin: 5px 50px;
  border-radius: 8px;
}
.search input{
  padding: 5px 25px 5px;
  background-color: #F7F8FA;
  border: 0px;
  font-size: 16px;
  flex:1;
}
.members{
  font-size:20px;
  font-family:normal;
}
.members-me{
  margin-bottom: 25px;
}
.members-me .title{
  margin-bottom: 25px;
}
.members-me p{
  margin-left: 70px;
  font-family: bold;
}
.members-me span{
  margin-left:50px;
}
.members-me .quit{
  float: right;
  margin-right: 50px;
}
.over{
  margin-left:15px;
  height: 15px;
  width: 95%;
  background: white;
  opacity: 0.4;
}
.members p{
  margin-left: 70px;
  font-family: bold;
}
.line{
  background: linear-gradient(to left, #dbefa1, #b6b6b6, #dbefa1);
  height: 1px;
}
.member-list{
  margin-top: 10px;
  margin-left: 50px;
  padding: 10px;
}
.member-list .line{
  background: linear-gradient(to left, #dbefa1, #b6b6b6, #dbefa1);
  height: 1px;
  margin-top: 10px;
}
.member-list img{
  float: right;
  margin-right: 50px;
}
.member-management .member-add{
  margin-right: 50px;
  float: right;
}
.member-management button{
  margin-left: 50px;
}
</style>
