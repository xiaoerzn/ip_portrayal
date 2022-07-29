<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div @click="gobackhome()">
        <!-- <img src="../assets/logo.png" alt="" /> -->
        <span>网络空间画像系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container style="height: 1500px">
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '165px'">
        <el-scrollbar style="width: 100%">
          <div class="toggle-button" @click="toggleCollapse">|||</div>
          <!-- 侧边栏菜单区域 -->
          <!-- 开启router，使用index作为导航跳转路由 -->
          <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF" unique-opened :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath">
            <!-- 一级菜单 index控制只展开自己的index -->
            <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
              <!-- 一级菜单的模板区域 -->
              <template slot="title">
                <!-- 图标 -->
                <i :class="iconsObj[item.id]"></i>
                <!-- 文本 -->
                <span>{{ item.authname }}</span>
              </template>

              <!-- 二级菜单 -->
              <!-- <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id" @click="saveNavState('/' + subItem.path)"> -->
              <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id" >
                <template slot="title">
                  <!-- 图标 -->
                  <i class="el-icon-menu"></i>
                  <!-- 文本 -->
                  <span>{{ subItem.authname }}</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </el-aside>

      <!-- 右侧内容主体 -->
      <el-main >
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      // 左侧菜单数据
      // menulist: [
      //   {
      //     authName: 'AS查询',
      //     children: [
      //       { authName: 'AS一', children: [], id: 105, order: 1, path: 'ASone' },
      //       { authName: 'AS二', children: [], id: 145, order: 2, path: 'AStwo' }
      //     ],
      //     id: 145,
      //     order: 1,
      //     path: 'AS'
      //   },
      //   { authName: 'IP查询', children: [], id: 125, order: 2, path: 'IP' },
      //   { authName: '社交网络查询', children: [], id: 103, order: 1, path: 'social' },
      //   { authName: '漏洞查询', children: [], id: 101, order: 3, path: 'loophole' },
      //   { authName: '路由查询', children: [], id: 102, order: 4, path: 'route' }
      // ],
      menulist: [],
      iconsObj: {
        1: 'iconfont iconzizhiyu',
        2: 'iconfont iconleidatance',
        3: 'iconfont iconIPdingwei',
        4: 'iconfont icontoputance',
        5: 'iconfont iconanwang',
        6: 'iconfont iconshejiaowangluo',
        7: 'iconfont iconwangzhan',
        8: 'iconfont iconrenwuguanli',
        9: 'iconfont iconziyuanguanli',
        10: 'iconfont iconyunweiguanli',
        11: 'iconfont iconkeshihua'
      },
      // 是否折叠
      isCollapse: false,
      // 被激活的链接地址
      activePath: ''
    }
  },
  created () {
    this.getMenuList()
    // this.activePath = window.sessionStorage.getItem('activePath')
    this.activePath = this.$route.path
    // console.log(this.$route.path);
    // console.log(this.activePath);
    // console.log(window.sessionStorage)
  },
  // mounted(){
  //   console.log(this.$refs)
  // },
  methods: {
    logout () {
      // window.localStorage.clear()
      window.localStorage.removeItem('token')
      this.$router.push('/login')
    },
    // 获取所有的菜单
    async getMenuList () {
      const { data: res } = await this.$http.get('menu')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
      // console.log(res)
    },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    // 保存链接的激活状态
    // saveNavState(activePath) {
    //   window.sessionStorage.setItem('activePath', activePath)
    //   this.activePath = activePath
    // },
    gobackhome () {
      this.$router.push('/welcome')
    }
  }
}
</script>

<style lang="less" scoped>
.el-container{
  min-width:1920px
}
.home-container {
  height: 100%;
}
.el-header {
  height: 55px !important;
  // min-width:1725px ;
  background-color: #333744;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  // top: 155px;
  height: calc(100vh - 55px);
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  max-width: 100%;
  padding-bottom: 10px;
  // padding: 0 !important;
  // margin-bottom:10px ;
  height: calc(100vh - 55px);
  // top: 155px;
  background-color: #eaedf1;
  // min-width:1725px
  padding: 0;
}

.iconfont {
  margin-right: 10px;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
