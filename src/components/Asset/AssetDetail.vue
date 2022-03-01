<template>
  <div class="body">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>资产系统</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/IPlocating1' }">Asset查询</el-breadcrumb-item>
      <el-breadcrumb-item>IP{{ this.$route.params.id }}详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 基本信息栏 -->
    <BaseInfo class="headinfo" height="580px"></BaseInfo>

    <!-- 服务漏洞 -->
    <el-card>
      <el-tabs v-model="activeName">
        <el-tab-pane label="服务和漏洞" name="first">
          <el-row>
            <el-col :span="12">
              1
            </el-col>
            <el-col :span="12">
              <AssetPortServe></AssetPortServe>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="预留位" name="second">
          未定义
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import BaseInfo from './AssetDetails/AssetBaseInfo.vue'
import AssetPortServe from './AssetDetails/AssetPortServe.vue'

export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    BaseInfo,
    AssetPortServe
  },
  methods: {},

}
</script>

<style lang="less" scoped>
.body {
  padding: 20px;
}
/deep/.el-tabs__item {
  line-height: 1.5;
  font-size: 16px;
  font-weight: 600;
}
</style>
