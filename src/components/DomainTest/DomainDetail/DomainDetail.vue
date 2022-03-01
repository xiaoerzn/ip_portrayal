<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>域名系统</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/node1' }">域名查询</el-breadcrumb-item>
      <el-breadcrumb-item>域名{{ this.$route.params.id }}详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 基本信息 -->
    <div>
      <domain-base-info></domain-base-info>
    </div>

    <!-- 扫描历史 -->
    <div></div>

    <!-- 列表 -->
    <div></div>
  </div>
</template>

<script>
import DomainBaseInfo from './DomainBaseInfo.vue'
export default {
  data () {
    return {}
  },
  components: {
    DomainBaseInfo
  }
}
</script>

<style lang="less" scoped>
</style>
