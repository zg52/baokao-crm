import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
// import store from '@/store'
// import router from '@/router'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 20000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // // Do something before request is sent
    // if (store.getters.token) {
    //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //   // config.headers['X-Token'] = getToken()
    // }
    console.log(config)
    if (config.url.indexOf('/pc/') !== -1) {
      config.baseURL = process.env.BASE_APIX
    } else if (config.url.indexOf('/icmsale/') !== -1) {
      config.baseURL = process.env.BASE_APIS
    } else if (config.url.indexOf('/icmq/') !== -1) {
      config.baseURL = process.env.BASE_APIQ
    } else if (config.url.indexOf('/message/') !== -1) {
      config.baseURL = process.env.BASE_MESSAGE
    } else {
      config.baseURL = process.env.BASE_API
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  // response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data

    if (res.code !== 0) {
      if (res.code === 401) {
        MessageBox.confirm('登录信息已失效，请重新登录！', '爱行销提示', {
          confirmButtonText: '确定',
          showClose: false,
          showCancelButton: false,
          closeOnClickModal: false,
          callback: action => {
            location.href = '/logout'
          }
        })
        return false
      }

      // Message({
      //   message: res.message,
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      // router.replace({
      //   path: 'login',
      //   query: { redirect: router.currentRoute.fullPath }
      // })
    // return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
