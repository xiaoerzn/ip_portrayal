<template>
  <div class="body">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>域名系统</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/node1' }">域名查询</el-breadcrumb-item>
      <el-breadcrumb-item >域名{{ this.$route.params.id }}详情</el-breadcrumb-item>
    </el-breadcrumb>
    <p>
      <span class="domainame">域名&nbsp;{{ this.$route.params.id }}&nbsp;详情</span>
    </p>

    <el-row :gutter="20">
      <!-- Whois -->
      <el-col :span="12">
        <domain-whios></domain-whios>
      </el-col>
      <!-- SSL -->
      <el-col :span="12">
        <domainssl></domainssl>
      </el-col>
    </el-row>

    <!-- IP列表 -->
    <el-row :gutter="20">
      <!-- 当前 -->
      <el-col :span="12">
        <p class="label">
          <img  class="icon" src="../../assets/liebiao.png" alt=""  />
          当前解析IP
        </p>
        <current-ip-list></current-ip-list>
      </el-col>
      <!-- 历史 -->
      <el-col :span="12">
        <p class="label">
          <img  class="icon" src="../../assets/liebiao.png" alt="" />
          历史解析IP
        </p>
        <history-ip></history-ip>
      </el-col>
    </el-row>
    <!-- 域名谱系关系 -->
    <div class="domainrelation" height="900px">
      <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
        <el-tab-pane label="子域名" name="first">
          <sub-domain></sub-domain>
        </el-tab-pane>
        <el-tab-pane label="域名解析路径" name="second">
          <parse-path></parse-path>
        </el-tab-pane>
        <el-tab-pane label="关联域名" name="third">
          <link-domain></link-domain>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import CurrentIpList from './DomainDetail/CurrentIpList.vue'
import HistoryIp from './DomainDetail/HistoryIp.vue'
import LinkDomain from './DomainDetail/LinkDomain.vue'
import ParsePath from './DomainDetail/ParsePath_v1.vue'
import SubDomain from './DomainDetail/SubDomain.vue'
import domainssl from './DomainDetail/DomainSSL.vue'
import DomainWhios from './DomainDetail/DomainWhios.vue'

export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    CurrentIpList,
    HistoryIp,
    LinkDomain,
    ParsePath,
    SubDomain,
    domainssl,
    DomainWhios
  },
  created () {},
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event);
    }
  }
}
</script>

<style lang="less" scoped>
.body {
  padding: 20px;
}

.domainame {
  background-color: #eaf6ff;
  color: #1d79c2;
  padding: 5px 20px;
  font-size: 20px;
}
.label{
  height: 40px;
  line-height: 40px;
  margin-bottom:5px;
  font-size: 18px;
  background-color: #eaf6ff;
  color: #333744;
  padding:0px 20px;

}
.icon{
height: 24px;
width: 24px;
vertical-align:middle;
}
</style>
