<!-- 侧边栏写死，前端写 -->
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
                    <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF" unique-opened
                        :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath">

                        <el-menu-item index="/AS">
                            <i class="iconfont iconzizhiyu"></i>
                            <span slot="title">自治域</span>
                        </el-menu-item>

                        <el-menu-item index="/Domain">
                            <i class="iconfont iconanwang"></i>
                            <span slot="title">域名</span>
                        </el-menu-item>

                        <el-menu-item index="/Asset">
                            <i class="iconfont iconyunweiguanli"></i>
                            <span slot="title">资产</span>
                        </el-menu-item>

                        <el-submenu index="2">
                            <template slot="title">
                                <!-- 图标 -->
                                <i class="iconfont iconIPdingwei"></i>
                                <!-- 文本 -->
                                <span>拓扑</span>
                            </template>
                            <el-menu-item index="/Topo">
                                <template slot="title">
                                    <!-- 图标 -->
                                    <i class="el-icon-menu"></i>
                                    <!-- 文本 -->
                                    <span>逻辑拓扑-IP级</span>
                                </template>
                            </el-menu-item>

                            <el-menu-item index="2-1">
                                <template slot="title">
                                    <!-- 图标 -->
                                    <i class="el-icon-menu"></i>
                                    <!-- 文本 -->
                                    <span>逻辑拓扑-路由器级</span>
                                </template>
                            </el-menu-item>

                            <el-menu-item index="2-1">
                                <template slot="title">
                                    <!-- 图标 -->
                                    <i class="el-icon-menu"></i>
                                    <!-- 文本 -->
                                    <span>逻辑拓扑-AS级</span>
                                </template>
                            </el-menu-item>

                            <el-menu-item index="2-1">
                                <template slot="title">
                                    <!-- 图标 -->
                                    <i class="el-icon-menu"></i>
                                    <!-- 文本 -->
                                    <span>物理拓扑-PoP级</span>
                                </template>
                            </el-menu-item>

                            <el-menu-item index="2-1">
                                <template slot="title">
                                    <!-- 图标 -->
                                    <i class="el-icon-menu"></i>
                                    <!-- 文本 -->
                                    <span>物理拓扑-国家网关</span>
                                </template>
                            </el-menu-item>
                        </el-submenu>


                        <el-submenu index="3">

                            <template slot="title">
                                <!-- 图标 -->
                                <i class="iconfont iconleidatance"></i>
                                <!-- 文本 -->
                                <span>可视化</span>
                            </template>
                            <el-menu-item index="/view_one">
                                <template slot="title">
                                    <!-- 图标 -->
                                    <i class="el-icon-menu"></i>
                                    <!-- 文本 -->
                                    <span>可视化一</span>
                                </template>
                            </el-menu-item>

                            <el-menu-item index="/view_two">
                                <template slot="title">
                                    <!-- 图标 -->
                                    <i class="el-icon-menu"></i>
                                    <!-- 文本 -->
                                    <span>可视化二</span>
                                </template>
                            </el-menu-item>
                        </el-submenu>

                        <el-submenu index="4">

                            <template slot="title">
                                <!-- 图标 -->
                                <i class="iconfont iconshejiaowangluo"></i>
                                <!-- 文本 -->
                                <span>测试</span>
                            </template>
                            <el-menu-item index="2-1">
                                <template slot="title">
                                    <!-- 图标 -->
                                    <i class="el-icon-menu"></i>
                                    <!-- 文本 -->
                                    <span>测试一</span>
                                </template>
                            </el-menu-item>

                            <el-menu-item index="2-1">
                                <template slot="title">
                                    <!-- 图标 -->
                                    <i class="el-icon-menu"></i>
                                    <!-- 文本 -->
                                    <span>测试二</span>
                                </template>
                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-scrollbar>
            </el-aside>

            <!-- 右侧内容主体 -->
            <el-main>
                <!-- 路由占位符 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            // 左侧菜单数据
            menulist: [
                { authName: '自治域系统', children: [], id: 1, order: 1, path: '/AS' },
                { authName: '域名系统', children: [], id: 2, order: 2, path: '/Domain' },
                { authName: '资产系统', children: [], id: 3, order: 1, path: '/Asset' },
                { authName: '拓扑系统', children: [], id: 4, order: 3, path: '/Topo' },
                {
                    authName: '可视化', id: 5, order: 1, path: '/View',
                    children: [
                        { authName: '可视化一', children: [], id: 51, order: 1, path: '/view_one' },
                        { authName: '可视化二', children: [], id: 52, order: 2, path: '/view_two' }
                    ],

                },
                {
                    authName: 'test', id: 6, order: 1, path: '/Test',
                    children: [
                        { authName: 'test一', children: [], id: 61, order: 1, path: '/test_one' },
                        { authName: 'test二', children: [], id: 62, order: 2, path: '/test_two' }
                    ],
                },
            ],
            // 是否折叠
            isCollapse: false,
            // 被激活的链接地址
            activePath: ''
        }
    },
    created() {
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
        logout() {
            // window.localStorage.clear()
            window.localStorage.removeItem('token')
            this.$router.push('/login')
        },
        // 获取所有的菜单
        async getMenuList() {
            const { data: res } = await this.$http.get('menu')
            if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
            this.menulist = res.data
            // console.log(res)
        },
        // 点击按钮，切换菜单的折叠与展开
        toggleCollapse() {
            this.isCollapse = !this.isCollapse
        },
        // 保存链接的激活状态
        // saveNavState(activePath) {
        //   window.sessionStorage.setItem('activePath', activePath)
        //   this.activePath = activePath
        // },
        gobackhome() {
            this.$router.push('/welcome')
        }
    }
}
</script>
  
<style lang="less" scoped>
.el-container {
    min-width: 1920px
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

    >div {
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
  