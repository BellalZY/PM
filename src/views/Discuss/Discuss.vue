<template>
  <div class="Discuss">
    <top>
      <img slot="top-img" src="../../assets/img/top/new.svg" @click="change" alt=""/>
      <span slot="top-title" style="font-family: coca; font-size:30px; color: #777777;">专题讨论</span>
    </top>
    <div class="main">
      <comment></comment>
      <comment></comment>
    </div>
  </div>
</template>

<script>
import top from '../../components/top/top'
import comment from './comment'
export default {
  name: "Discuss",
  components:{
    comment,
    top
  },
  methods:{
    change(){
      this.$router.replace('/discussRelease');
    }
  }
}
</script>

<style scoped>
.Discuss{
  height: 92%;
  width: 100%;
  overflow: scroll;
}
.main{
  margin-top: 50px;
  z-index: -1;
}
</style>
