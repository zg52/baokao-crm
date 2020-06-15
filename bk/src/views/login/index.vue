<style scoped lang="less">
.login {
  height: 100vh;
  background: url("../../assets/image/login.jpg") center center no-repeat;
  background-size: cover;
  position: relative;
  zoom: 1.204;
  font-size: 14px;
}
.loginCont {
  border-radius: 4px;
  right: 16%;
  position: absolute;
  top: 30%;
  width: 300px;
  padding: 14px 16px;
  padding-bottom: 40px;
  z-index: 99;
  background: #fff;
  & > p:first-child {
    color: #17233d;
    font-size: 14px;
    font-weight: bold;
    padding-bottom: 20px;
    border-bottom: 1px #dcdfe6 solid;
    margin-bottom: 20px;
  }
}
/deep/.el-form-item__label {
  font-size: 14px;
}
/deep/.el-input__inner {
  font-size: 12px;
  height: 32px;
}
/deep/.el-form-item__content {
  line-height: 0;
  margin-left: 10px;
}
.el-icon-s-custom:before,
.el-icon-s-cooperation:before {
  position: relative;
  top: 9px;
}
.el-form-item {
  margin-right: 0!important;
}
.el-input {
  width: 275px;
}
.loginSubmit {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 5px 15px 6px;
  font-size: 12px;
  border-radius: 4px;
  transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear, -webkit-box-shadow 0.2s linear;
  transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear, box-shadow 0.2s linear;
  transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear, box-shadow 0.2s linear, -webkit-box-shadow 0.2s linear;
  color: #515a6e;
  background-color: #fff;
  border-color: #dcdee2;
  color: #fff;
  background-color: #2d8cf0;
  border-color: #2d8cf0;
  width: 100%;
  height: 32px;
  outline: none;
  &:hover {
    color: #fff;
    background-color: #57a3f3;
    border-color: #57a3f3;
  }
}
</style>

<template>
  <div class="login">
    <div class="loginCont">
      <p>欢迎登录艺鸣报考系统</p>
      <el-form :model="loginData" :rules="loginReg" :inline="true" ref="loginData">
        <div class="el-icon-s-custom">
          <el-form-item prop="username">
            <el-input type="text" v-model="loginData.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
        </div>
        <div class="el-icon-s-cooperation">
          <el-form-item prop="password">
            <el-input type="password" v-model="loginData.password" placeholder="请输入密码"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <el-button :loading="loading" class="loginSubmit" ref="loginSubmit" @click="loginSubmit($event)">登录</el-button>
    </div>
  </div>
</template>
<script>
import { login } from '@/api/classify'
import { msgTip } from '@/utils/msgTip' //操作提示
import Cookies from 'js-cookie'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      loginData: {
        username: "",
        password: ""
      },
      loginReg: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      },
      loading: false
    }
  },
  computed: {

  },
  methods: {
    loginSubmit (e) {
    let _this = this
    this.$refs.loginData.validate(valid => {
      valid ? loginHandler() : ''
      function loginHandler () {
        login(_this.loginData).then(res => {
           if(res.data.code == 0) {
              msgTip('用户名或密码错误！','warning',false)
           } else {
              _this.loading = true
              _this.$store.commit('nameChange',_this.loginData.username) //存贮username
              Cookies.set('username1',_this.loginData.username)
               Cookies.set('token',res.data.data.token,{expires:1000}) //存贮token
                  _this.$router.push({
                  path:'/index'
             })
           }
        })
      }
    })
  }
  },
  mounted () {
    let _this = this
    this.$nextTick(() => {

    })
  }

}
</script>

