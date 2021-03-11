<template>
  <div id="app">
    <tabbar v-if="$route.meta.showTab">
      <tabbaritem path="/management">
        <img slot="item-icon" src="./assets/img/tabbar/management.svg" alt=""/>
        <img slot="item-icon-active" src="./assets/img/tabbar/managementActive.svg" alt=""/>
        <div slot="item-text">管理平台</div>
      </tabbaritem>
      <tabbaritem path="/discuss">
        <img slot="item-icon" src="./assets/img/tabbar/discuss.svg" alt=""/>
        <img slot="item-icon-active" src="./assets/img/tabbar/discussActive.svg" alt=""/>
        <div slot="item-text">讨论区</div>
      </tabbaritem>
      <tabbaritem path="/personal">
        <img slot="item-icon" src="./assets/img/tabbar/personal.svg" alt=""/>
        <img slot="item-icon-active" src="./assets/img/tabbar/personalActive.svg" alt=""/>
        <div slot="item-text">个人中心</div>
      </tabbaritem>
    </tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from './components/tabbar/tabbar'
import tabbaritem from './components/tabbar/tabbarItem'
export default {
  name: 'App',
  components: {
    tabbar,
    tabbaritem,
  }
}
</script>

<style>
@import "assets/css/base.css";
#app {
  height:100%;
  width:100%;
  background: #dbefa1;
}

</style>
