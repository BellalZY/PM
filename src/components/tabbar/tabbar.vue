<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar"
}
</script>

<style scoped>
.tab-bar{
  display:flex;
  background-color: #dbefa1;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -10px 10px rgba(127,127,127,.2);
  z-index: 1;
}
</style>
