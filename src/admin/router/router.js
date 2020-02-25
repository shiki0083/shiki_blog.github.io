const isChineseNewYear = new Date('2019-02-20') - new Date() > 0
// console.log(isChineseNewYear)
export const longinRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录',
    login: false
  },
  component: () => import('@/views/Oauth/Login')
}
export const page404 = {
  path: '*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在',
    login: false
  },
  component: () => import('@/views/ErrorPage/404')
}
export const registerRouter = {
  path: '/register',
  name: 'register',
  meta: {
    title: '注册',
    login: false
  },
  component: () => import('@/views/Oauth/Register')
}
export const oauthRegisterRouter = {
  path: '/oauthregister',
  name: 'oauthregister',
  meta: {
    title: '注册',
    login: false
  },
  component: () => import('@/views/Oauth/OauthRegister')
}
export const routers = [
  longinRouter,
  // page404,
  registerRouter,
  oauthRegisterRouter,
]
