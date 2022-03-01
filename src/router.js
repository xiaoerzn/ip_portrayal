import Vue from 'vue'
import Router from 'vue-router'

// import Login from './components/Login.vue'
const Login = () => import(/* webpackChunkName: "login_home_welcome" */ './components/Login.vue')
// import Home from './components/Home.vue'
const Home = () => import(/* webpackChunkName: "login_home_welcome" */ './components/Home.vue')
// import Welcome from './components/Welcome.vue'
const Welcome = () => import(/* webpackChunkName: "login_home_welcome" */ './components/Welcome.vue')
const AsHome = () => import(/* webpackChunkName: "login_home_welcome" */ './components/AS/AsHome.vue')
const AsDetail = () => import(/* webpackChunkName: "login_home_welcome" */ './components/AS/AsDetail.vue')
const DomainHome = () => import(/* webpackChunkName: "login_home_welcome" */ './components/Domain/DomainHome.vue')
const DomainDetail = () => import(/* webpackChunkName: "login_home_welcome" */ './components/Domain/DomainDetail_v3.vue')
const AssetHome = () => import(/* webpackChunkName: "login_home_welcome" */ './components/Asset/AssetHome_v2.vue')
const AssetDetail = () => import(/* webpackChunkName: "login_home_welcome" */ './components/Asset/AssetDetail.vue')
const IPdetail = () => import(/* webpackChunkName: "login_home_welcome" */ './components/IP/IPDetail.vue')

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/ASinfo', component: AsHome },
        { path: '/AsDetail/:id', component: AsDetail },
        { path: '/node1', component: DomainHome },
        { path: '/DomainDetail/:id', component: DomainDetail },
        { path: '/IPlocating1', component: AssetHome },
        { path: '/AssetDetail/:id', component: AssetDetail },
        // {path: '/topology1',component: AssetDetail},
        { path: 'IPdetail/:id', component: IPdetail }
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转

  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
