<template>
  <div class="comment">
    <div class="info-user">
      <img :src="commentInfo.avatar" alt=""/>
      <span>{{ commentInfo.username }}</span>
    </div>
    <div class="info-content">
      <p>{{ commentInfo.content }}</p>
    </div>
    <div class="info-img">
      <viewer :images="commentInfo.images">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt=""/>
      </viewer>
    </div>
    <div class="info-interact">
      <div class="info-func">
        <img src="../../assets/img/discuss/discuss.svg" alt=""/>
        <span>{{ commentInfo.comments }}</span>
          <img v-if="!commentInfo.isLike" src="../../assets/img/discuss/like.svg" @click="likeChange" alt=""/>
          <img v-else src="../../assets/img/discuss/likeActive.svg" @click="likeChange" alt=""/>
        <span>{{ commentInfo.like }}</span>
      </div>
      <div class="sort" :key="index">
        <span>{{ commentInfo.label[0] }}--{{ commentInfo.label[1] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  data(){
    return{
      commentInfo:{
        avatar: require("../../assets/img/discuss/avatar.svg"),
        username: "我是太空人",
        content: "许多基础不牢的同学看到这道题，或许第一反应应用是洛必达法则。但事实上，这正是这道题的陷阱所在。洛必达法则处理的通常是性质良好的函数，对于这种震荡性剧烈的函数，洛必达法则已然失效。因此，遵循我们对sin(x)规律的直觉，我们应当回归定义，按照sin(x)的周期性分割为数个区间，通过证明这些区间正负面积近似抵消，得到答案：极限为0。从直觉上来看，我们很容易猜出答案为0。首先sin(x)是一个均值为0的周期震荡函数。sin(1/t)函数虽然在0附近震荡得十分剧烈，但对于一个周期1/t∈(2kπ,(2k+1)π)和1/t∈((2k+1)π,(2k+2)π)而言，其在t坐标下间隔极小，因此可以近似看做分段压缩+畸变（畸变对其影响是一个高阶无穷小）后的sin(x)。而sin(x)的正负面积相等，所以我们从直觉上，可以猜出答案为0。",
        images: [require("../../assets/img/discuss/ans.jpeg"),require("../../assets/img/discuss/ans.jpeg")],
        comments:5,
        isLike:false,
        like:32,
        label:["高等数学","函数极限"]
      },
    }
  },
  methods:{
    likeChange(){
      if(!this.commentInfo.isLike) this.commentInfo.like++;
      else this.commentInfo.like--;
      this.commentInfo.isLike = !this.commentInfo.isLike;
    }
  }
}
</script>

<style scoped>
.comment{
  overflow:hidden;
  background-color: #dbefa1;
  font-family: normal;
  height:70%;
  width:100%;
}
.info-user{
  padding:10px 0 5px;
}
.info-user img{
  width:42px;
  height:42px;
  border-radius:50%;
  border: 1px solid #777777;
}
.info-user span{
  position: relative;
  top: -15px;
  font-size:15px;
  margin-left: 10px;
}
.info-content{
  padding: 0 5px 10px;
}
.info-content p{
  font-size:14px;
  color:#777;
  line-height: 1.5;
}
.info-img{
  margin-top: 10px;
}
.info-img img{
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
.info-interact{
  margin-top:10px;
  margin-right: 5px;
}
.info-func{
  float: right;
  margin-right: 20px;
}
.info-func img{
  width: 25px;
  height: 25px;
}
.info-func span{
  position: relative;
  top:-5px;
  font-size: 15px;
}
.sort{
  margin-left: 10px;
  text-align: center;
  height: 30px;
  width: 200px;
  background: white;
  opacity: 0.4;
  border-radius: 8px;
}

</style>
