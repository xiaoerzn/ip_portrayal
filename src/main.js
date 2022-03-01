import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BaiduMap from "vue-baidu-map";
import "./plugins/element.js";

// 导入字体图标
import "./assets/fonts/icon/iconfont.css";
// 导入全局样式表
import "./assets/css/global.css";

// import echarts from 'echarts'
import * as echarts from "echarts";

import axios from "axios";

import CommonFunction from "./common.js"
Vue.prototype.CommonFunction=CommonFunction

Vue.prototype.$echarts = echarts;
Vue.prototype.$http = axios;

// 配置请求的根路径
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.defaults.baseURL = "http://10.15.1.192:8000/apis";
// 在 request 拦截器中，展示进度条 NProgress.start()
axios.interceptors.request.use((config) => {
  // console.log(config)
  // NProgress.start()
  // 将token保存到authorization中
  config.headers.Authorization = window.sessionStorage.getItem("token");
  // 在最后必须 return config
  return config;
});
// 在 response 拦截器中，隐藏进度条 NProgress.done()
// axios.interceptors.response.use(config => {
//   NProgress.done()
//   return config
// })

Vue.config.productionTip = false;
// Vue.component('tree-table', TreeTable)
// 将富文本编辑器，注册为全局可用的组件
// Vue.use(VueQuillEditor)


Vue.use(BaiduMap, {
  ak: "HcOsUXOCYNGGuuayQnGXK7EG38pEglSA",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
