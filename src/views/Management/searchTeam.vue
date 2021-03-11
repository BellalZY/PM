<template>
  <div class="searchTeam">
    <div class="searchTeam-Title">
      <p>您尚未添加任何小组</p>
    </div>
    <div class="search">
      <img src="../../assets/img/management/clear.svg" v-show="keyValue" @click="clearSearch" alt=""/>
      <input placeholder="请输入小组名称" v-model="keyValue">
      <img src="../../assets/img/management/search.svg" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchTeam",
  data(){
    return{
      keyValue:"",
    }
  },
  watch:{

  },
  methods:{
    clearSearch(){
      this.keyValue="";
    },
  }
}
</script>

<style scoped>
.searchTeam-Title{
  margin-left: 20px;
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
</style>
