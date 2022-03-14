<template>
  <div name="downloadfile" @click="download()" >下载</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    downloadExcel() {
      let a = document.createElement("a");
      a.href = "http://10.15.1.192:8000/api/ip/down";
      a.click();
    },
    download(){
      const x = new window.XMLHttpRequest();
    x.open('GET', 'http://10.15.1.192:8000/api/ip/down', true);
    x.responseType = 'blob';
    x.onload = () => {
        const url = window.URL.createObjectURL(x.response);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'aaaaaa.xlsx';
        a.click();
    };
    x.send();
    }
  },
};
</script>

<style></style>
