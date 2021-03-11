<template>
  <div class="author">
    <div class="back" @click="back">
      <img src="../../assets/img/login/close.svg" alt=""/>
    </div>
    <div class="information">
      <p>ECNU software engineering institute</p>
      <p>qq:</p>
      <p>联系电话：123456789</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "author",
  methods:{
    back(){
      this.$router.back();
    },
  }
}
</script>

<style scoped>
.author .information{
  position: absolute;
  top: 10%;
  left: 20%;
}
.author .information p{
  font-size:14px;
  color:#777;
  line-height: 1.5;
}
</style>
