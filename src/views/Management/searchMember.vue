<template>
  <div class="search-Member">
    <div class="search">
      <img src="../../assets/img/management/clear.svg" v-show="keyValue" @click="clearSearch" alt=""/>
      <input placeholder="请输入用户名称" v-model="keyValue" >
      <img src="../../assets/img/management/search.svg" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchMember",
  data(){
    return{
      isMember:0,
    }
  },
  props:{
    keyValue:{
      type: String,
      required : true
    }
  },
  watch:{
    keyValue(){
      if(this.keyValue === "") this.isMember = 0;
      else this.isMember = 2;
      console.log(this.keyValue);
      console.log(this.isMember);
      this.$emit('kv',this.keyValue);
      this.$emit('isMember',this.isMember);
    }
  },
  methods:{
    clearSearch(){
      this.keyValue="";
    },
    memberSearch(){

    }
  }
}
</script>

<style scoped>
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
