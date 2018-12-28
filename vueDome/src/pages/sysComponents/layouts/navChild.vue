<template>
    <div class="navChild">
        <el-submenu v-if="item.childs && item.childs.length" :index="navIndex"> 
            <!-- 创建父级菜单 -->
            <template slot="title">
                <el-tooltip class="item" effect="dark" :content="item.name" placement="top">
                    <el-button>{{ item.name }}</el-button>
                </el-tooltip>
                <el-dropdown @command="handleCommand">
                    <i class="el-icon-edit-outline" ></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="add">添加</el-dropdown-item>
                        <el-dropdown-item command="edit">编辑</el-dropdown-item>
                        <el-dropdown-item command="delete">删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </template>
            <!-- 创建子菜单 -->
            <nav-child v-for="(subItem,i) in item.childs" :key="navIndex+'-'+i" :navIndex="navIndex+'-'+i" :item="subItem" ></nav-child>
        </el-submenu>

        <el-menu-item v-else :index="item.fullPath" :route="{path: item.fullPath}">
            <el-tooltip class="item" effect="dark" :content="item.name" placement="top">
                <el-button>{{ item.name }}</el-button>
            </el-tooltip>
            <el-dropdown @command="handleCommand">
                <i class="el-icon-edit-outline" ></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="edit">编辑</el-dropdown-item>
                    <el-dropdown-item command="delete">删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu-item>
    </div>
</template>
<script>
export default {
    name:'navChild',
    props:['item','navIndex'],
    methods:{
      handleCommand(command) {
          console.log(command)
        }
    }
}
</script>
<style lang="scss">
.navChild{
    .el-dropdown{
        margin-right: 20px;
    }
    .el-menu-item{
        padding: 0 36px !important;
        background-color: #C0DBFB;
         &:hover{
            background-color:#C0DBFB !important;
        } 
        .el-button{
            background-color: #C0DBFB;
        }
    }
    .el-submenu__title{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #eee;
    }
    .el-submenu__title,.el-menu-item{
        font-weight: bold; 
        &:hover{
            background-color:transparent;
        }       
        .el-button{
            padding: 0;
            border: 1px solid transparent;
            width: 100px;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: left;
        }
        .el-button:focus, .el-button:hover{
            background-color:transparent;
            color: #333;
        }
        .fa{
            color: #333;
            font-size: 16px;
        }
    }
}
</style>
