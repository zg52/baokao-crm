import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/views/index'
import Layout from '@/views/layout/Layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      meta: {
        title: 'Layout',
        keepAlive: true
      }
    }
  ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
