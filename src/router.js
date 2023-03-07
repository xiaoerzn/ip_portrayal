//kaifa topo
import Vue from "vue";
import Router from "vue-router";
// import Login from './components/Login.vue'
const Login = () => import("./components/Login.vue");
// import Home from './components/Home.vue'
const Home = () => import("./components/Home.vue");
// import Welcome from './components/Welcome.vue'
const Welcome = () => import("./components/Welcome.vue");
const AsHome = () => import("./components/AS/AsHome_v2.vue");
const AsDetail = () => import("./components/AS/AsDetail.vue");
const DomainHome = () => import("./components/Domain/DomainHome_v2.vue");
const DomainDetail = () => import("./components/Domain/DomainDetail_v3.vue");
const AssetHome = () => import("./components/Asset/AssetHome_v2.vue");
const AssetDetail = () => import("./components/Asset/AssetDetail.vue");
const IPdetail = () => import("./components/IP/IPDetail.vue");
const MapHome = () => import("./components/WholeMap/MapHome.vue");
const DownloadTest = () => import("./components/common/DownloadTest.vue");
Vue.use(Router);
const router = new Router({
  routes: [{
    path: "/",
    redirect: "/login",
  }, {
    path: "/login",
    component: Login,
    meta: {
      title: "用户登录",
    },
  }, {
    path: "/topology1",
    component: MapHome,
    meta: {
      title: "地图",
    },
  }, {
    path: "/home",
    component: Home,
    meta: {
      title: "IP画像-首页",
    },
    redirect: "/welcome",
    children: [{
        path: "/welcome",
        component: Welcome,
        meta: {
          title: "IP画像-首页",
        },
      }, {
        path: "/ASinfo",
        component: AsHome,
        meta: {
          title: "AS系统-查询页",
        },
      }, {
        path: "/AsDetail/:id",
        component: AsDetail,
        meta: {
          title: "AS",
        },
      }, {
        path: "/AStwo",
        component: DownloadTest,
        meta: {
          title: "DownloadTest",
        },
      }, {
        path: "/node1",
        component: DomainHome,
        meta: {
          title: "域名系统-查询页",
        },
      }, {
        path: "/DomainDetail/:id",
        component: DomainDetail,
        meta: {
          title: "域名",
        },
      }, {
        path: "/IPlocating1",
        component: AssetHome,
        meta: {
          title: "资产系统-查询页",
        },
      }, {
        path: "/AssetDetail/:id",
        component: AssetDetail,
        meta: {
          title: "资产",
        },
      },
      // {path: '/topology1',component: AssetDetail},
      {
        path: "IPdetail/:id",
        component: IPdetail,
      },
    ],
  }, ],
});
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转
  if (to.path === "/login") return next();
  // 获取token
  const tokenStr = window.localStorage.getItem("token");
  if (!tokenStr) return next("/login");
  /* 路由发生变化修改页面title */
  if (to.params.id) {
    document.title = to.meta.title + to.params.id + "详情";
  } else {
    document.title = to.meta.title;
  }
  // console.log(to)
  next();
});
export default router;