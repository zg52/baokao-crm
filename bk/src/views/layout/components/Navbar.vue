<template>
<div class="navbar">
<header>
 <div class="header_cont">
<div class="loginOut">
  <img src="../../../assets/image/touxiang.png">
  <span>{{ username == '' ? username1 : username }}</span> |
  <span @click="loginOut($event)">退出登录</span>
</div>
 </div>
</header>
</div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
import Cookies from 'js-cookie'
export default {
name: 'Navbar',
data () {
  return {
    username1: ''
  }
},
computed: {
    ...mapState({
       username: username => username.user.username,
       loginOutParams: loginOutParams => loginOutParams.user.loginOutParams
     })
},
watch: {

},
methods: {
  ...mapMutations(['loginChange']),//盗取退出登录标识
  loginOut (e) { //退出登录
      this.loginChange()
    this.$router.push({
      path:'/'
    })
    Cookies.remove('token')
  }

},
mounted () {
  this.username1 = Cookies.get('username1');
}
}
</script>
<style scoped lang="less">
header {
  text-align: right;
  width: 100%;
height:84px;
background:rgba(255,255,255,1);
.loginOut {
  font-size: 14px;
  margin-right: 50px;
  img {
    vertical-align: middle;
    margin-right: 4px;
  }
  color: #DCDFE6;
  line-height: 84px;
  span {color: #666;}
  img + span {
    padding-right: 8px;
  }
  span + span {
    padding-left:8px;
    cursor: pointer;
  }
}
}
.header_cont {
position: fixed;
top:0;
left:0;
width: 100%;
box-shadow:0px 8px 31px 0px rgba(20,49,127,0.08), 3px 3px 12px 0px rgba(228,228,228,0.5);
background:rgba(255,255,255,1);
z-index: 9;
}
header {
  position: relative;
  height: 84px;
}
</style>
