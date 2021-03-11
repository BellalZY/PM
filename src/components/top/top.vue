<template>
  <div class="top">
    <div class="back">
      <img src="../../assets/img/top/back.svg" @click="back" alt=""/>
    </div>
    <div class="title">
      <slot name="top-title"></slot>
    </div>
    <div class="other">
      <slot name="top-img"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  methods:{
    back(){
      this.$router.replace('/management');
    }
  }
}
</script>

<style scoped>
.top{
  display: flex;
  justify-content: space-between;
  position: absolute;
  background: #dbefa1;
  top:1%;
  height:6%;
  width:100%;
  box-shadow: 2px 2px 2px rgba(127,127,127,.2);
  z-index: 2;
}

.top img{
  height:30px;
  width:30px;
}
.back{
  float: left;
}
.other{
  float: right;
  margin-right: 10px;
}
</style>
