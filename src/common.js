// 时间格式化
var CurentTime =function () {
  var now = new Date();
  var year = now.getFullYear(); //年
  var month = now.getMonth() + 1; //月
  var day = now.getDate(); //日
  var hh = now.getHours(); //时
  var mm = now.getMinutes(); //分
  var clock = year + "-";
  if (month < 10)
    clock += "0";
  clock += month + "-";
  if (day < 10)
    clock += "0";
  clock += day + "-";
  if (hh < 10)
    clock += "0";
  clock += hh + ":";
  if (mm < 10) clock += '0';
  clock += mm;
  return (clock);
}



// --------------------------新窗口打开-----------------------------------------------
var OpenNewBlank = function (params, add, that) {
  const {
    href
  } = that.$router.resolve({
    path: `/${add}/${params}`,
  });
  window.open(href, "_blank");
  // that.$router.push({ path: `/${add}/${params}` })
}


// ------------------------------------------下载文件----------------------------------------
var DownloadFile = function (downloadurl, filename) {
  const x = new window.XMLHttpRequest();
  x.open('GET', downloadurl, true);
  x.responseType = 'blob';
  x.onload = () => {
    const url = window.URL.createObjectURL(x.response);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  };
  x.send();
  
}


export default {
  OpenNewBlank,
  DownloadFile,
  CurentTime,
}
