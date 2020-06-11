import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
    path: [{
      path: '/example',
      component: 'Layout',
      redirect: '/example/list',
      name: 'Example',
      meta: {
        title: 'example',
        icon: 'example'
      },
      children: [
        {
          path: 'create',
          component: 'example/create',
          name: 'CreateArticle',
          meta: { title: 'createArticle', icon: 'edit' }
        },
        {
          path: 'edit/:id(\\d+)',
          component: 'example/edit',
          name: 'EditArticle',
          meta: { title: 'editArticle', noCache: true },
          hidden: true
        },
        {
          path: 'list',
          component: 'example/list',
          name: 'ArticleList',
          meta: { title: 'articleList', icon: 'list' }
        }
      ]
    },
    { path: '*', redirect: '/404', hidden: true }]
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
