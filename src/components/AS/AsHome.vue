<template>
  <div class="body" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
    <!-- 导航条 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>自治域系统</el-breadcrumb-item>
      <el-breadcrumb-item>AS查询</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索框 -->
    <el-row :gutter="20" class="search">
      <el-col :span="10" :offset="7">
        <el-input placeholder="请输入内容" class="input-with-select" v-model="queryInfo.query">
          <el-button slot="append" icon="el-icon-search" @click="getASList()"></el-button>
        </el-input>
      </el-col>
      <el-col :span="7">
        <el-button class="btn_help" type="text" @click="dialogVisible = true"> <i class="el-icon-question"></i>帮助 </el-button>
        <el-dialog title="搜索说明" :visible.sync="dialogVisible">
          <span class="searchtips">支持ASN、国家、地区搜索，搜索格式为：asn:6556;country:United States;</span>
                    <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-col>
    </el-row>
    <div class="div_1">
      <!-- 统计 -->
      <span class="statistic"
        >您搜到 <span class="sta_cha">{{ total }}</span> 条数据 , 用时<span class="sta_cha"> {{ query_time }} </span>秒
      </span>
      <!-- 排序 -->
      <!-- <span class="asn_span"
        >ASN&nbsp;
        <span class="sort_icon">
          <el-button icon="el-icon-caret-top" size="mini" style="padding: 0; margin: 0; border: 0"></el-button>
          <el-button icon="el-icon-caret-bottom" size="mini" style="padding: 0; margin: 0; border: 0"></el-button>
        </span>
      </span>
      <span class="lj_span"
        >链接边数&nbsp;
        <span class="sort_icon">
          <el-button icon="el-icon-caret-top" size="mini" style="padding: 0; margin: 0; border: 0"></el-button>
          <el-button icon="el-icon-caret-bottom" size="mini" style="padding: 0; margin: 0; border: 0"></el-button>
        </span>
      </span>
      <span class="qz_span"
        >权重&nbsp;
        <span class="sort_icon">
          <el-button icon="el-icon-caret-top" size="mini" style="padding: 0; margin: 0; border: 0"></el-button>
          <el-button icon="el-icon-caret-bottom" size="mini" style="padding: 0; margin: 0; border: 0"></el-button>
        </span>
      </span> -->

      <!-- 导出 -->
      <span class="export">
        <i class="el-icon-info" style="color: #409eff" @click="open_info"></i>
        <el-dropdown @command="Download">
          <span class="el-dropdown-link"> 导出文件<i class="el-icon-arrow-down el-icon--right"></i> </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="json" >json</el-dropdown-item>
            <el-dropdown-item command="csv">csv</el-dropdown-item>
            <el-dropdown-item command="xml">xml</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>
    <!-- 信息框 -->
    <el-card v-for="item in ASlist" :key="item.id" :body-style="{ padding: '7px 30px'}">
      <div slot="header">
        <el-row>
          <el-col :span="2" style="text-align: left; font-weight: bold">ASN {{ item.asn }}</el-col>
          <el-col :span="4" style="text-align: left"><el-button type="text" icon="el-icon-view" @click="view_details(item.asn)" size="mini">查看详情</el-button></el-col>
          <el-col :span="6" style="text-align: left; text-overflow: ellipsis; white-space: nowrap; overflow: hidden">{{ item.as_name }}</el-col>
          <el-col :span="8" style="text-align: left"> {{ item.country }}-{{ item.city }}&nbsp;&nbsp;<img :src="`http://10.15.1.192:8000/static/${item.iso}.png`" /></el-col>
          <el-col :span="4"><i class="iconfont iconshijian"></i>&nbsp; {{ item.last_seen }}</el-col>
        </el-row>
      </div>
      <!-- 信息内容 -->
      <el-row class="content">
        <el-col class="des" :span="6" :title="item.as_org"><i class="iconfont iconorgan"></i>&nbsp;&nbsp;所属组织 : {{ item.as_org }}</el-col>
        <el-col class="des" :span="6"
          ><i class="iconfont iconwangluodizhi"></i>&nbsp;&nbsp;地址类型 :
          <i v-if="item.ip_type == 0" class="iconfont iconi4"></i>
          <i v-else-if="item.ip_type == 1" class="iconfont iconi6"></i>
          <i v-else><i class="iconfont iconi4"></i><i class="iconfont iconi6"></i></i>
          <!-- <i v-else class="iconfont iconall"></i> -->
        </el-col>
        <el-col class="des" :span="6"><i class="iconfont iconquanzhong"></i>&nbsp;&nbsp;权重 : {{ item.weight }}</el-col>
        <el-col class="des" :span="6"><i class="iconfont icontuopu"></i>&nbsp;&nbsp;邻居AS数量 : {{ item.weight }}</el-col>
      </el-row>
      <el-row class="content">
        <el-col class="des" :span="6"><i class="iconfont iconshujuyuan"></i>&nbsp;&nbsp;注册信息来源 : {{ item.source }}</el-col>
        <el-col class="des" :span="6"><i class="iconfont iconcengcibuju"></i>&nbsp;&nbsp;层次 : {{ item.level }}</el-col>
        <el-col class="des" :span="6"><i class="iconfont icontongjier"></i>&nbsp;&nbsp;IP地址数量 : {{ Number(item.ipv4_count) + Number(item.ipv6_count) }}</el-col>
        <el-col class="des" :span="6"><i class="iconfont iconIP"></i>&nbsp;&nbsp;前缀数量 : {{ item.prefix_count }}</el-col>
      </el-row>
    </el-card>
    <!-- 页码 -->
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
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      // 获取列表的参数对象
      queryInfo: {
        query: '',
        sort: 'asn',
        eachpage: 10,
        pagenum: 1
      },
      ASlist: [],
      total: 0,
      query_time: '',
      radio: 2,
      dialogVisible: false,
    }
  },
  created () {
    this.getASList()
    // console.log(document.querySelector(".body").scrollTop)
  },
  methods: {
    handleCommand (command) {
      this.$message('click on item ' + command)
    },
    // 获取默认AS列表
    async getASList () {
      this.loading = true
      const { data: res } = await this.$http.get('as_info_search', {
        params: this.queryInfo
      })

      if (res.meta.status !== 200) {
        return this.$message.error('获取默认列表失败！')
      }
      // this.$message.success('hahahahah')
      this.ASlist = res.data.data
      this.total = res.data.datanum
      this.query_time = res.data.query_time
      // console.log(document.querySelector(".body").parentNode.scrollTop)
      document.querySelector('.body').parentNode.scrollTop = 0
      this.loading = false

      // console.log(res)
    },
    view_details (asn) {  

      this.CommonFunction.OpenNewBlank(asn,'AsDetail',this)
      // this.$router.push({ path: `/AsDetail/${asn}` })
    },
    Download(command){
      this.CommonFunction.DownloadFile('http://10.15.1.192:8000/api/ip/down',command)
    },
    open_info () {
      const h = this.$createElement
      this.$notify({
        title: '导出帮助',
        message: h('i', { style: 'color: teal;white-space:normal' }, '点击导出，导出当前查询条件下的所有结果到本地，文件命名格式为： EXP-AS-RES-yyyMMddhhmmss.XXX'),
        duration: 0
      })
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

<style lang="less" scoped>
.body {
  padding: 20px;
}
.el-container {
  height: 100%;
}
.searchtips{

  white-space:auto;
}
.search {
  margin-bottom: 20px;
}

.el-radio {
  margin-right: 20px;
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
.div_1 {
  // border: solid;
  position: relative;
  // background-color: pink;
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
.sta_cha {
  color: #409eff;
}
.sort_icon {
  display: inline-flex;
  flex-direction: column;
}
.asn_span,
.lj_span,
.qz_span {
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  margin-left: 100px;
}

.btn_help {
  padding: 24px 0 0 0;
}
.statistic {
  // left: 10px;
  font-size: 12px;
  margin-right: 280px;
  // position: absolute;
  // top: 5px;

  // background-color: gainsboro;
}
.export {
  float: right;
  // background-color: gainsboro;
}
.el-pagination {
  margin-top: 20px;
  float: right;
  padding: 0px 5px 15px 5px;
}
.content {
  .el-col {
    line-height: 24px;
    height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    i {
      height: 24px;
      line-height: 24px;
    }
  }
  line-height: 24px;
  height: 24px;
}
.des {
  text-align: left;
  font-size: 14px;
  color: #606266;
  height: 28px;
  line-height: 28px;
}
</style>
