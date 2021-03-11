<template>
  <div class="team">
    <div class="team-title">
      小组监督
    </div>
    <keep-alive>
      <component :is="State" @isTeam="change($event)" @isMember="change2($event)" @kv="trans($event)" :keyValue="keyvalue"></component>
    </keep-alive>
  </div>
</template>

<script>
import member from './member'
import searchTeam from './searchTeam'
import searchMember from './searchMember'
export default {
  name: "team",
  components:{
    member,
    searchTeam,
    searchMember
  },
  data(){
    return{
      comp:['member','searchTeam','searchMember'],
      index:0,
      keyvalue:"",
    }
  },
  computed:{
    State(){
      return this.comp[this.index];
    },
  },
  methods:{
    change(isTeam){
      this.index = isTeam;
    },
    change2(isMember){
      this.index = isMember;
    },
    trans(keyValue){
      this.keyvalue = keyValue;
    }
  }
}

</script>

<style scoped>
.team{
  margin-top: 50px;
  overflow: scroll;
}
.team-title{
  margin-top: 10px;
  margin-left: 20px;
  font-size: 20px;
  font-family: bold;
  color: #777777;
}
</style>
