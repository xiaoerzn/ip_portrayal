<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + new Date()
        : this.$route + new Date();
    },
  },
};
</script>

 <style lang="less" scope>
  
</style>

