import Vue from "vue";
import router from "./router";
import "./plugins/element.js";
import App from "./App.vue"
// 导入字体图标
import "./assets/fonts/icon/iconfont.css";
// 导入全局样式表
import "./assets/css/global.css";



// ----------------------------------------------------Echarts配置-----------------------------------------------
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;



// ---------------------------------------------------axios配置----------------------------------------------------------
import axios from "axios";
Vue.prototype.$http = axios;
// 配置请求的根路径
axios.defaults.baseURL = "http://10.15.1.192:8000/apis";
axios.interceptors.request.use((config) => {
  // 将token保存到authorization中
  config.headers.Authorization = window.localStorage.getItem("token");
  // 在最后必须 return config
  return config;
});



// ---------------------------------------------------公共方法配置--------------------------------------------------------------
import CommonFunction from "./common.js"
Vue.prototype.CommonFunction=CommonFunction



// ----------------------------------------------------------百度地图配置------------------------------------------------------------
import BaiduMap from "vue-baidu-map";
Vue.use(BaiduMap, {
  ak: "HcOsUXOCYNGGuuayQnGXK7EG38pEglSA",
});

// ------------------------------------------------------时间配置----------------------------
Date.prototype.Format = function (fmt) {
  var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}


// -----------------------------------------------------注册实例---------------------------------------------
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
