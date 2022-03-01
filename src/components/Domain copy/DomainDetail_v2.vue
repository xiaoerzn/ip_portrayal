<template>
  <div class="body">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>域名系统</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/node1' }">域名查询</el-breadcrumb-item>
      <el-breadcrumb-item>域名{{ this.$route.params.id }}详情</el-breadcrumb-item>
    </el-breadcrumb>
    <p>
      <span class="domainname">域名&nbsp;{{ this.$route.params.id }}&nbsp;详情</span>
    </p>
    <!-- 基础信息 -->
    <domain-base></domain-base>

    <!--第二层  -->
    <el-row :gutter="20">
      <!-- Whois -->
      <el-col :span="12">
        <p><img class="icon" src="../../assets/network.png" />&nbsp;<span class="lable">Whios信息</span></p>
        <domain-whios></domain-whios>
      </el-col>
      <!-- IPlist -->

      <el-col :span="12">
        <p><img class="icon" src="../../assets/IP.png" />&nbsp;<span class="lable">解析IP信息</span></p>
        <el-tabs type="border-card" stretch>
          <el-tab-pane label="当前解析IP">
            <current-ip-list></current-ip-list>
          </el-tab-pane>
          <el-tab-pane label="历史解析IP">
            <history-ip></history-ip>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

    <!-- 域名谱系关系 -->
    <div class="domainrelation" height="900px">
      <p><img class="icon" src="../../assets/liebiao.png" />&nbsp;<span class="lable">域名谱系关系</span></p>
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
        <el-tab-pane label="SSL证书" name="four">
          <domainssl></domainssl>
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
import DomainBase from './DomainDetail/DomainBase.vue'

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
    DomainWhios,
    DomainBase
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

.domainname {
  background-color: #eaf6ff;
  color: #1d79c2;
  padding: 5px 0px;
  font-size: 20px;
}

.icon {
  height: 24px;
  width: 24px;
  // vertical-align: baseline;
}
.lable{
font-size: 18px;
color:#1d79c2 ;
}
/deep/ .el-tabs__item {
  font-size: 16px;
}
</style>
