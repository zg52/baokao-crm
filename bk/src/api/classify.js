// import request from '@/utils/request'
import axios from 'axios'
import { Loading, Message } from 'element-ui'

// 超时时间
axios.defaults.timeout = 5000
// http请求拦截器
let loadinginstace
axios.interceptors.request.use(config => {
   // element ui Loading方法
   loadinginstace = Loading.service({ fullscreen: true })

   return config
}, error => {
   loadinginstace.close();

　　return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(data => {
   // 响应成功关闭loading
   loadinginstace.close();
　　const code = data.data.code;
　　if(code == 501) { //未登录

　　}

　　return data
}, error => {
   loadinginstace.close();
　　const code = error.data.code;
　　// 此处判断拦截需要处理的错误状态码并处理
　　if(code == 502) {
　　
　　}

　　return Promise.reject(error)
})






// 登录
/*
 * @export
 * @param {*} data
 * @returns
 */
let URL = 'https://wechat.yimingyikao.com' //https://wechat.yimingyikao.com  api为dev环境
export function login (data) {
  return axios({
    url: URL + '/yk_api/tuser/login',
    method: 'post',
    data
  })
}


/**
 * 获取大类-类型
 *
 * @export
 * @param {*} data
 * @returns
 */
export function selecttuser (data) {
  return axios({
    url: URL + '/yk_api/list/selecttuser',
    method: 'post',
    data
  })
}


/**
 * 获取大类-类型
 *
 * @export
 * @param {*} data
 * @returns
 */
export function typeId () {
  return axios({
    url: URL + '/yk_api/public/getType',
    method: 'get'
  })
}

/**
 * 获取生源地
 *
 * @export
 * @param {*} data
 * @returns
 */
export function getProvAndPici () {
  return axios({
    url: URL + '/yk_api/public/getProvAndPici',
    method: 'get'
  })
}

/**
 * 根绝筛选的条件获取对应html/json/excel
 *
 * @export
 * @param {*} data
 * @returns
 */
export function getIndexList (data) {
  return axios({
    url: URL + '/yk_api/list/getIndexList',
    method: 'post',
    data
  })
}

/**
 *按照条件下载表格
 *
 * @export
 * @param {*} data
 * @returns
 */
export function termDown (data) {
  return axios({
    url: URL + `/yk_api/list/getIndexList?${data}`,
    method: 'post'
  })
}
