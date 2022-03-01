<template>
  <div class="body" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>资产系统</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/IPlocating1' }">资产检索</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20" class="search">
      <el-col :span="10" :offset="7">
        <el-input placeholder="请输入内容" class="input-with-select" v-model="queryInfo.query">
          <el-button slot="append" icon="el-icon-search" @click="getIPList()"></el-button>
        </el-input>
      </el-col>
      <el-col :span="7">
        <el-button class="btn_help" type="text" @click="dialogVisible = true"> <i class="el-icon-question"></i>帮助 </el-button>
        <el-dialog title="搜索说明" :visible.sync="dialogVisible">
          <span class="searchtips">支持域名、国家、地区搜索，搜索格式为:domain:605.tw;country:CN;region:LA</span>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-col>
    </el-row>
    <div class="div_1">
      <!-- 统计 -->
      <span class="statistic"
        >您搜到 <span class="sta_cha">{{}}</span> 条数据 , 用时<span class="sta_cha"> {{}} </span>秒
      </span>
      <!-- 导出 -->
      <span class="export">
        <i class="el-icon-info" style="color: #409eff" @click="open_info"></i>
        <el-dropdown>
          <span class="el-dropdown-link"> 导出文件<i class="el-icon-arrow-down el-icon--right"></i> </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="json">一年</el-dropdown-item>
            <el-dropdown-item command="csv">一月</el-dropdown-item>
            <el-dropdown-item command="xml">一周</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>
    <el-container>
      <!-- 侧边 -->
      <el-aside width="288px">
        <home-left></home-left>
      </el-aside>
      <!-- 主内容 -->
      <el-main>
        <el-card :body-style="{ padding: '20px 20px 0px 20px' }">
          <!-- left -->
          <el-row class="infohead">
            <el-col :span="8">{{}}</el-col>
            <el-col :span="8">{{}}</el-col>
            <el-col :span="8"><i class="iconfont iconshijian"></i>&nbsp; {{}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="10" class="infoleft">
              <el-row> <img :src="`http://10.15.1.192:8000/static/${o}.png`" />-中国-北京 </el-row>
              <el-row v-if="!!title"> <i class="el-icon-s-platform"></i> 网站标题 : {{ title }} </el-row>
              <el-row v-if="!!title"> <i class="el-icon-mobile"></i> 证书持有机构 : {{}} </el-row>
              <el-row v-if="!!title"> <i class="el-icon-cpu"></i> 设备名称 : {{}} </el-row>
              <el-row v-if="!!title"> <i class="el-icon-receiving"></i> 操作系统 : {{}} </el-row>
              <el-row v-if="!!title"> <i class="el-icon-tickets"></i> 运营商 : {{}} </el-row>
              <el-row v-if="!!title"> <i class="el-icon-edit"></i> Server : {{}} </el-row>
              <el-row v-if="!!title">
                <i class="el-icon-edit"></i> 漏洞:{{}}
                <el-badge :value="12" class="item" type="warning"> 高 </el-badge>
                <el-badge :value="12" class="item" type="primary"> 中 </el-badge>
                <el-badge :value="12" class="item" type="danger"> 低 </el-badge>
              </el-row>
              <el-row >
                <el-avatar shape="square" :size="20" icon="el-icon-search" @click.native="view_details()"></el-avatar>
                <el-avatar shape="square" :size="20" icon="el-icon-rank"></el-avatar>
                <el-avatar shape="square" :size="20" icon="el-icon-data-board"></el-avatar>
              </el-row>
            </el-col>
            <!-- right -->
            <el-col :span="14" class="main_right">
              <pre>1111111111111</pre>
            </el-col>
          </el-row>
        </el-card>
        <!-- 页码 -->
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HomeLeft from './AssetHomeLeft.vue'
export default {
  data () {
    return {
      o: 'CN',
      // resultflag: true,
      dialogVisible: false,
      total: 100,
      query_time: '',
      currentPage: 1,
      queryInfo: {
        query: '',
        eachpage: 10,
        pagenum: 1
      },
      loading: false,
      IPlist: [],
      title: '222'
    }
  },
  components: {
    HomeLeft
  },
  created () {
    // this.getIPList()
  },
  methods: {
    async getIPList () {
      this.loading = true
      const { data: res } = await this.$http.get('', {
        params: this.queryInfo
      })

      if (res.meta.status !== 200) {
        return this.$message.error('获取默认列表失败！')
      }
      // this.$message.success('hahahahah')
      // console.log(res)
      if (res.data.length != 0) {
        this.Domainlist = res.data
        this.total = res.datanum
        this.query_time = res.Query_time
        this.resultflag = true
        document.querySelector('.body').parentNode.scrollTop = 0
        this.loading = false
      } else {
        this.total = 0
        this.query_time = 0
        this.resultflag = false
        this.loading = false
      }
    },

    open () {
      this.$alert('搜索帮助,格式为', {
        confirmButtonText: '确定'
      })
    },
    open_info () {
      const h = this.$createElement

      this.$notify({
        title: '导出帮助',
        message: h('i', { style: 'color: teal' }, '点击导出，导出当前查询条件下的所有结果到本地，文件命名格式为： EXP-AS-RES-yyyMMddhhmmss.XXX'),
        duration: 2000
      })
    },
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`)
    },
    view_details () {
      // console.log('111')
      this.$router.push({ path: '/Assetdetail' })
    }
  }
}
</script>

<style lang="less" scoped>
.body {
  padding: 20px;
}
.div_1 {
  position: relative;
  margin-bottom: 10px;
}
// 高度塌陷
.div_1:after {
  content: '';
  height: 0;
  clear: both;
  overflow: hidden;
  display: block;
  visibility: hidden;
}
.searchtips {
  margin: 0 auto;
}
.statistic {
  font-size: 12px;
  margin-right: 280px；;
}
.export {
  float: right;
}
.sta_cha {
  color: #409eff;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 20px !important;
  padding: 0px 0 20px 20px;
  height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}
.search {
  margin-bottom: 20px;
}
.item {
  margin-right: 20px;
}
.infohead {
  margin-bottom: 20px;
}
.infoleft {
  .el-row {
    text-align: left;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    height: 21px;
    line-height: 21px;
    margin-bottom: 10px;
  }
}
.el-avatar {
  margin-right: 5px;
  :hover {
    background-color: #409eff;
  }
  :active {
    background-color: #002c6a;
  }
}
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  height: 233px;
  overflow: hidden;
  font-family: 'Consolas';
}
pre:hover {
  overflow: auto;
}
.main_right {
  border: 1px solid #eee;
  color: rgba(0, 0, 0, 0.65);
}
</style>
