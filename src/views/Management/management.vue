<template>
  <div class="management">
    <div class="guide">
      hi，{{ name }}，你今天坚持了吗?
    </div>
    <p @click="change">change state</p>
    <keep-alive>
      <component :is="currentState"></component>
    </keep-alive>
  </div>
</template>

<script>
import person from './person'
import team from'./team'
export default {
  name: "management",
  components: {
    person,
    team
  },
  data(){
    return{
      name:"",
      comp:['person','team'],
      index:0,
    }
  },
  computed:{
    currentState(){
      return this.comp[this.index];
    },
  },
  methods:{
    change(){
      this.index = (++this.index) % 2;
      console.log(this.index);
    }
  }
}
</script>

<style scoped>
.management{
  height: 92%;
  width: 100%;
  overflow: scroll;
}
.guide{
  padding-top: 40px;
  margin-left: 20px;
  font-family: normal;
  font-size: 30px;
}
</style>
