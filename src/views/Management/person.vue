<template>
  <div class="person">
    <div class="person-title">
      个人计划清单
    </div>
    <div class="over"></div>
    <div class="person-list">
      <van-cell-group>
        <van-field @keyup.enter="add" v-model="value" placeholder="添加新任务" />
      </van-cell-group>
      <p v-for="(item,index) in lists" :key="index" >
        {{ index+1 }}.{{ item.item }}
        <img src="../../assets/img/management/delete.svg" @click="remove(index)" alt=""/>
        <img :src="item.pic" @click="change(index)" alt=""/>
      </p>
    </div>
    <div class="person-total">
      <h>{{ lists.length }} tasks</h>
      <span @click="clear">clear</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "person",
  data(){
    return{
      lists:[
        {
          item:"语文打卡",
          pic: require('../../assets/img/management/normal.svg'),
        },
        {
          item:"数学打卡",
          pic: require('../../assets/img/management/normal.svg'),
        },
        {
          item:"英语打卡",
          pic: require('../../assets/img/management/normal.svg'),
        }
        ],
      pic2: require('../../assets/img/management/green.svg'),
      value: "",
    }
  },
  methods:{
    change(index){
      this.lists.splice(index,1,
        {
          item: this.lists[index].item,
          pic: this.pic2
        }
      )
    },
    add(){
      this.lists.push(
        {
          item:this.value,
          pic: require('../../assets/img/management/normal.svg')
        }
      )
    },
    remove(index){
      console.log(index);
      this.lists.splice(index, 1);
    },
    clear(){
      this.lists.splice(0,this.lists.length);
    }
  }
}
</script>

<style scoped>
.person{
  margin-top: 100px;
  overflow: scroll;
}
.person-title{
  margin-top: 10px;
  margin-left: 20px;
  font-size: 20px;
  font-family: bold;
  color: #777777;
}
.over{
   margin-left:15px;
   height: 15px;
   width: 95%;
   background: white;
   opacity: 0.4;
 }
.person-list{
  margin: 10px 35px 10px;
}
.person-list p{
  padding: 10px;
  font-size: 20px;
  text-align: center;
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
  border-radius:50px;
}
.person-list img{
  float: right;
}
.person-total h{
  margin-left: 50px;
  font-family: normal;
  font-size: 20px;
}
.person-total span{
  float: right;
  margin-right: 50px;
  font-family: normal;
  font-size: 20px;
}
</style>
