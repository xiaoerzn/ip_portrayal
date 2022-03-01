<template>
  <div class="body" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>域名系统</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/node1' }">域名检索</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20" class="search">
      <el-col :span="10" :offset="7">
        <el-input placeholder="请输入内容" class="input-with-select" v-model="queryInfo.query">
          <el-button slot="append" icon="el-icon-search" @click="getDomainList()"></el-button>

        </el-input>

      </el-col>
      <el-col :span="7">
        <el-button class="btn_help" type="text" @click="dialogVisible = true"> <i class="el-icon-question"></i>帮助 </el-button>
        <el-dialog title="搜索说明" :visible.sync="dialogVisible">
          <span class="searchtips">支持域名、国家、地区搜索，搜索格式为：domain:605.tw;country:CN;region:LA</span>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
         <el-button @click="test">确定</el-button>
      </el-col>
    </el-row>
    <div class="div_1">
      <!-- 统计 -->
      <span class="statistic"
        >您搜到 <span class="sta_cha">{{ total }}</span> 条数据 , 用时<span class="sta_cha"> {{ query_time }} </span>秒
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
        <home-left ></home-left>
      </el-aside>
      <!-- 主内容 -->
      <el-main>
        <div v-show="resultflag">
          <el-card v-for="item in Domainlist" :key="item.id" :body-style="{ padding: '20px 10px' }">
            <!-- 头 -->
            <div slot="header" class="clearfix">
              <el-row>
                <el-col :span="8" style="text-align: left; font-weight: bold"
                  >{{ item.DomainName }}&nbsp;<el-button type="text" icon="el-icon-view" @click="view_details(item.DomainName)" size="mini">查看详情</el-button></el-col
                >
                <!-- 国旗 -->
                <el-col :span="8"><img :src="`http://10.15.1.192:8000/static/${item.country}.png`" onerror="javascript:this.src='';" /></el-col>
                <el-col :span="8" style="text-align: right"><i class="iconfont iconshijian"></i>&nbsp; {{ item.DisplayTime }}</el-col>
              </el-row>
            </div>
            <!-- body -->
            <el-row class="Domainbase" :gutter="10">
              <el-col :span="7" style="text-align: left" :title="item.location"><i class="iconfont iconicon-dingwei"></i>&nbsp;&nbsp;国家地区 : {{ item.location }}&nbsp;&nbsp; </el-col>
              <el-col :span="4"><i class="iconfont icondiqiu"></i>&nbsp;&nbsp;自治域编号 :{{ item.asn }}</el-col>
              <el-col :span="4"><i class="iconfont iconzizhiyu1"></i>&nbsp;&nbsp;自治域 :{{ item.asnname }}</el-col>
              <el-col :span="5"><i class="iconfont iconyunyingshang"></i>&nbsp;&nbsp;运营商 :{{ item.registration_authority }}</el-col>
              <el-col :span="4"><i class="iconfont iconIP"></i>&nbsp;&nbsp;解析IP数量 :{{ item.ipnum }}</el-col>
            </el-row>
          </el-card>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :hide-on-single-page="true"
            :current-page="queryInfo.pagenum"
            :page-sizes="[10, 20, 50]"
            :page-size="queryInfo.eachpage"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            background
          >
          </el-pagination>
        </div>
        <div v-show="!resultflag">无结果</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HomeLeft from './DomainHomeLeft.vue'
export default {
  data () {
    return {
      resultflag: true,
      dialogVisible: false,
      total: 1,
      query_time: '',
      queryInfo: {
        query: '',
        eachpage: 10,
        pagenum: 1
      },
      loading: false,
      Test: 'test',
      Domainlist: [
        //   {
        //     id: '1',
        //     DomainName: 'www.sohu.com',
        //     DisplayTime: '2021-08-18 20:45:55',
        //     country: 'US',
        //     region: ' California',
        //     city: '洛杉矶',
        //     registrationauthority: 'xxxxx',
        //     organization: 'xxxx',
        //     result: 'sd.werdgjddf.net.',
        //   },
        //   {
        //     id: '2',
        //     DomainName: 'www.sohu.com',
        //     DisplayTime: '2021-08-18 20:45:55',
        //     country: 'US',
        //     region: ' California',
        //     city: '洛杉矶',
        //     registrationauthority: 'xxxxx',
        //     organization: 'xxxx',
        //     result: 'xxxx',
        //   },
        //   {
        //     id: '3',
        //     DomainName: 'www.sohu.com',
        //     DisplayTime: '2021-08-18 20:45:55',
        //     country: 'US',
        //     region: ' California',
        //     city: '洛杉矶',
        //     registrationauthority: 'xxxxx',
        //     organization: 'xxxx',
        //     result: 'xxxx',
        //   },
      ]
    }
  },
  components: {
    HomeLeft
  },
  created () {
    this.getDomainList()
  },
  methods: {
    async getDomainList () {
      this.loading = true
      const { data: res } = await this.$http.get('/domain/page', {
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
        // console.log(document.querySelector(".body").parentNode.scrollTop)
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
    view_details (DomainName) {
      // console.log('111')
      this.$router.push({ path: `/DomainDetail/${DomainName}` })
    },
    handleClick (row) {
      this.$alert(row.port, 'SSL证书', {
        confirmButtonText: '确定'
      })
      console.log(row)
    },

    handleSizeChange (newSize) {
      // console.log(newSize)
      this.queryInfo.eachpage = newSize
      this.getDomainList()
    },
    handleCurrentChange (newPage) {
      // console.log(newPage)
      this.queryInfo.pagenum = newPage
      this.getDomainList()
    }
  }
}
</script>

<style  lang="less" scoped>
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
.searchtips{
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
// .el-aside {
//   background-color: #d3dce6;
//   color: #333;
//   text-align: center;
//   line-height: 200px;
// }

.el-main {
  // background-color: #e9eef3;
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

/deep/ .el-card__header {
  padding: 0px 30px;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box;
}

.el-card {
  border-bottom: 6px solid #e5e5e5;
  .el-col {
    overflow: hidden;
    text-overflow: ellipsis;
    // white-space:nowrap;
  }
}
.Domainbase {
  .el-col {
    line-height: 24px;
    height: 24px;
    font-size: 15px;
    text-align: left;
    color: #606266;
  }
}
.el-table {
  /deep/ th {
    padding: 0;
  }
}
.el-pagination {
  margin-top: 20px;
  float: right;
  padding: 0px 5px 15px 5px;
}
</style>
