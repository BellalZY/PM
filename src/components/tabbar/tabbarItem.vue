<template>
  <div class="tab-bar-item" @click="iClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",
  props:{
    path: String
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods:{
    iClick(){
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
  margin-top: 2px;
  vertical-align: middle;
}
.active{
  color: #f7f7f7;
}
</style>
