<template>
  <div>
    <h4><i class="el-icon-s-marketing"></i>&nbsp;漏洞统计</h4>
    <div class="bugsta">
      <div class="box">
        <h4><i class="el-icon-s-grid"></i>&nbsp;已验证漏洞</h4>
        <el-row>
          <el-col :span="6">
            <h5>{{}}</h5>
            <p>总数量</p>
          </el-col>
          <el-col :span="6">
            <h5>{{}}</h5>
            <p>高危</p>
          </el-col>
          <el-col :span="6">
            <h5>{{}}</h5>
            <p>中危</p>
          </el-col>
          <el-col :span="6">
            <h5>{{}}</h5>
            <p>低危</p>
          </el-col>
        </el-row>
      </div>

      <div class="box">
        <h4><i class="el-icon-s-data"></i>&nbsp;CVE统计</h4>
        <el-row>
          <el-col :span="6">
            <h5>{{}}</h5>
            <p>总数量</p>
          </el-col>
          <el-col :span="6">
            <h5>{{}}</h5>
            <p>高危</p>
          </el-col>
          <el-col :span="6">
            <h5>{{}}</h5>
            <p>中危</p>
          </el-col>
          <el-col :span="6">
            <h5>{{}}</h5>
            <p>低危</p>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.bugsta {
  display: flex;
  justify-content: space-between;
}
.box {
  display: inline-block;
  width: 46%;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  padding: 12px;
}
</style>
