import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/layout/layout'

// 页面跳转进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/enter',
    hidden: true,
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/pmsb/homePage/home'),
        meta: {title: '首页'}
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

const whiteList = ['/login']  // 白名单
// 这里需要改 到时需要结合登录的cookie
// router.beforeEach((to, from, next) => {
//   console.log('路径',to.path)
//   if (to.path === '/login') {
//     NProgress.start()
//     next()
//   } else {
//     NProgress.start()
//     next('/login')
//   }

// });

router.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  if(to.path.startsWith('/login')) {
    window.localStorage.removeItem('access-user')
    NProgress.start()
    next()
  } else {
    let user = JSON.parse(window.localStorage.getItem('access-user'))
    if(!user) {
      NProgress.start()
      next({
        path: '/login'
      })
    } else {
      NProgress.start()
      next()
    }
  }
});
router.afterEach(transition => {
  // 结束进度条
    NProgress.done()
  })

export default router
