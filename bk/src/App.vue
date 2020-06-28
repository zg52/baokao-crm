<template>
  <div id="app">
<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  watch: {
     '$route': {
    handler (val) {
     !Cookies.get('token') || Cookies.get('token') == undefined ?
      (this.$router.push({
      path:'/'
    }),
     Cookies.remove('token')):
     String
     if(Cookies.get('token') && Cookies.get('token') != undefined) {
       if(val.path == '/') {
         this.$router.push({
           path: '/index'
         })
          }
     }
    },
    deep: true
  }
  },
  mounted () {
    let _this = this
    this.$nextTick(function () {
        !Cookies.get('token') || Cookies.get('token') == undefined ?
         this.$router.push({
           path: '/'
         }) : String

    })
  }

}
</script>

<style lang="less">
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
     .appmain {
      -moz-transform: scale(.8) translate(90px,0);
  }
}

@media screen  and (min-device-width:1204px) and (max-device-width:1500px){
 #app {
     zoom: .7;
     .appmain {
      -moz-transform: scale(.8) translate(90px,0);
  }
 }}}
</style>
