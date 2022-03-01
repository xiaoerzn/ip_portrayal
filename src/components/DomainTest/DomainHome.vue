<template>
  <div class="body" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>域名系统</el-breadcrumb-item>
      <el-breadcrumb-item>域名检索</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20" class="search">
      <el-col :span="10" :offset="7">
        <el-input placeholder="请输入内容" class="input-with-select" v-model="query">
          <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
        </el-input>
      </el-col>
      <el-col :span="7">
        <el-button class="btn_help" type="text" @click="open"> <i class="el-icon-question"></i>帮助 </el-button>
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
        <home-left></home-left>
      </el-aside>
      <!-- 主内容 -->
      <el-main>
        <el-card class="box-card" v-for="item in IPlist" :key="item.id" :body-style="{ padding: '1px 0px',margin:'0px 20px' }" >
          <!-- 头 -->
          <div slot="header" class="clearfix">
            <el-row>
              <el-col :span="4" style="text-align: left; font-weight: bold">{{ item.ipnum }}</el-col>
              <el-col :span="4" style="text-align: left"><el-button type="text" icon="el-icon-view" @click="view_details(item.ipnum)" size="mini">查看详情</el-button></el-col>
              <el-col :span="6" style="text-align: left"> {{ item.country }}-{{ item.city }}&nbsp;&nbsp;<img :src="`http://10.15.1.192:8000/static/${item.country}.png`" /></el-col>
              <el-col :span="4"><i class="iconfont icondiqiu"></i>
                &nbsp;<span v-if="item.ip_type == 0" style="color:red">IPv4</span>
                <span v-else style="color:green">IPv6</span>
              </el-col>
              <el-col :span="6"><i class="iconfont iconshijian"></i>&nbsp; {{ item.last_seen }}</el-col>
            </el-row>
          </div>
          <!-- body -->
            <el-row>
              <el-col :span="7">
                <el-row v-for="item in IPBaseInfo" :key="item.id" class="IPbase">
                  <el-col :span="12" >{{item.name}}</el-col>
                  <el-col :span="12" >{{item.info}}</el-col>
                </el-row>
              </el-col>
              <el-col :span="17">
                <!-- 设置流体高度，固定表头 -->
                <el-table :data="tableData" height="132"  style="width: 100%"  :cell-style="{padding:'0px'}">
                  <el-table-column prop="scantime" label="扫描时间" width="150"> </el-table-column>
                  <el-table-column prop="translayer" label="传输层" width="150"> </el-table-column>
                  <el-table-column prop="port" label="端口" width="150"> </el-table-column>
                  <el-table-column prop="seragree" label="服务协议" width="150"> </el-table-column>
                  <el-table-column prop="ssl" label="SSL证书" width="150">
                    <template slot-scope="scope">
                        <el-button icon="el-icon-document"  slot="reference" type="text" @click="handleClick(scope.row)" style="fontSize:16px;padding:0" ></el-button>

                    </template>
                  </el-table-column>
                  <el-table-column prop="date" label="产品应用" > </el-table-column>
                </el-table>
              </el-col>
            </el-row>
        </el-card>
      </el-main>
    </el-container>
        <!-- <el-pagination
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
    </el-pagination> -->
  </div>
</template>

<script>
import HomeLeft from './DomainHomeLeft.vue'
export default {
  data () {
    return {
      total: 3211,
      query_time: 111,
      query: '',
      // queryInfo: {
      //   sort: 'asn',
      //   eachpage: 10,
      //   pagenum: 1,
      // },
      loading: false,
      IPlist: [{ id: '1', ipnum: '192.168.1.1', last_seen: '2021-08-18 20:45:55', country: 'US', city: '洛杉矶', ip_type: '2' }],
      IPBaseInfo: [{ id: '1', name: '域名', info: 'a23-196-84-240.dep.' },
        { id: '2', name: '自治域', info: 'Akamai Technologies' },
        { id: '3', name: '自治域编号', info: '16625' },
        { id: '4', name: '运营商', info: 'akamai.com' }],
      tableData: [{
        scantime: '2016-05-02',
        translayer: 'tcp',
        port: '80',
        seragree: 'http'
      },
      {
        scantime: '2016-05-02',
        translayer: 'tcp',
        port: '80',
        seragree: 'http'
      },
      {
        scantime: '2016-05-02',
        translayer: 'tcp',
        port: '80',
        seragree: 'http'
      },
      {
        scantime: '2016-05-02',
        translayer: 'tcp',
        port: '80',
        seragree: 'http'
      },
      {
        scantime: '2016-05-02',
        translayer: 'tcp',
        port: '80',
        seragree: 'http'
      }

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
    async getIPList () {
      // this.loading = true
      // const { data: res } = await this.$http.get('as_info_search', {
      //   params: this.queryInfo,
      // })
      // if (res.meta.status !== 200) {
      //   return this.$message.error('获取默认列表失败！')
      // }
      // // this.$message.success('hahahahah')
      // this.ASlist = res.data.data
      // this.total = res.data.datanum
      // this.query_time = res.data.query_time
      // this.loading = false
      // this.$nextTick(() => {
      //   window.scroll(0, 0)
      // })
      // console.log(res)
    },
    search () {
      // this.$router.push({path:'detail' ,query:{condition:this.query}})
      // this.query=''
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
    view_details (IPnum) {
      // console.log('111')
      this.$router.push({ path: `/DomainDetail/${IPnum}` })
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
      this.getASList()
    },
    handleCurrentChange (newPage) {
      // console.log(newPage)
      this.queryInfo.pagenum = newPage
      this.getASList()
    }

  }
}
</script>

<style  lang="less" scoped>
.body{
  padding: 20px;
}
.div_1 {
  position: relative;
  margin-bottom: 10px;
}
.div_1:after {
  content: '';
  height: 0;
  clear: both;
  overflow: hidden;
  display: block;
  visibility: hidden;
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
  padding:0px 0 20px 20px;
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
}
.IPbase {
  .el-col{
    line-height: 28px;
    height: 28px;
    font-size: 15px;
    text-align: left;
}
}
  .el-table {
    /deep/ th {
      padding: 0 ;
    }
  }

</style>
