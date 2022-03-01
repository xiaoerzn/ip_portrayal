// 时间格式化
// Date.prototype.Format = function (fmt) { // author: meizz
//   var o = {
//     'M+': this.getMonth() + 1, // 月份
//     'd+': this.getDate(), // 日
//     'h+': this.getHours(), // 小时
//     'm+': this.getMinutes(), // 分
//     's+': this.getSeconds(), // 秒
//     'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
//     S: this.getMilliseconds() // 毫秒
//   }
//   if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length)) }
//   for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
//   return fmt
// }
// var NewDtime = new Date().Format('yyyy-MM-dd hh:mm:ss')
import Vue from "vue";

var OpenNewBlank=function(params,add,that){
  const { href } =that.$router.resolve({
    path: `/${add}/${params}`,
  });
  window.open(href, "_blank");
  // that.$router.push({ path: `/${add}/${params}` })
}

export default {
  OpenNewBlank,
}
