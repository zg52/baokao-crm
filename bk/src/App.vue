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
  -moz-osx-font-smoothing: grayscale;
}
* {
  line-height: 1;
  padding: 0;
  margin: 0;

}

@media screen and (min-device-width:1500px) and (max-device-width:1920px){
 #app {
     zoom: .83!important;
  }
}

@media screen  and (min-device-width:1204px) and (max-device-width:1500px){
 #app {
     zoom: .7;
  }
}


</style>
