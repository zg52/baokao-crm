<template>
  <div id="app">
<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: 'App'

}
</script>

<style>
#app {
  font-family: "Microsoft YaHei","Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; zoom: .8;
}
* {
  line-height: 1;
  padding: 0;
  margin: 0;

}
</style>
