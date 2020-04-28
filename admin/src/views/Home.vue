<template>
    <el-container class="home-page">
        <el-header class="header">
            <h1>爱创课堂后台管理系统</h1>
            <p>
                <span>你好</span>
                <strong>ihidkah</strong>
                <span>欢迎回来</span>
                <el-button size="mini" type="primary">退出</el-button>
            </p>
        </el-header>
        <el-container>
            <el-aside>
                <el-menu :router="true">
                    <el-submenu v-for="item in menu" :key="item.id" :index="String(item.id)">
                         <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <el-menu-item v-for="item1 in item.children" :key="item1.link" :index="item1.link">{{item1.name}}</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<style lang="scss">
.home-page {
    height: 100%;
    .el-aside, .el-main {
        background-color: #fff;
        height: 100%;
    }
    .header {
        width: 100%;
        background-color: #fff;
        align-items: center;
        display: flex;
        justify-content: space-between;
        color: #666;
        font-size: 15px;
        margin-bottom: 10px;
        h1 {
            color: #333;
            font-size: 22px;
        }
        .el-button {
            margin-left: 20px;
        }
    }

    .el-aside {
        margin-right: 10px;
    }
}
</style>

<script>
export default {
    data() {
        return {
            menu: [
                {   
                    id: 1,
                    name: '商品模块',
                    children: [
                        { name: '创建商品', link: '/product/create'},
                        { name: '商品列表', link: '/product/list/1' },
                    ]
                },
                {
                    id: 2,
                    name: '首页模块',
                    children: [
                        { name: '首页广告', link: '/home/ads' },
                        { name: '分类按钮', link: '/home/types' },
                    ]
                },
                {   
                    id: 3,
                    name: '用户模块',
                    children: [
                        { name: '创建用户', link: '/user/create' },
                        { name: '用户列表', link: '/user/list/1' },
                    ]
                }
            ]
        }
    }
}
</script>