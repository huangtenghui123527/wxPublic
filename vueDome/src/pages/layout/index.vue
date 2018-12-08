<template>
    <div class="wrapper">
        <template>
            <header-bar v-once>
                <h1 slot="logo">Vue头部</h1>
            </header-bar>
        </template>
        <!-- <nav-bar></nav-bar> -->
        <el-container class="sys-section">
            <nav-bar></nav-bar>
            <div class="sys-content">
                <tag-nav></tag-nav>
                <div class="content">
                    <router-view></router-view>
                </div>
            </div>
        </el-container>
    </div>
</template>
<script>
import HeaderBar from './Header.vue'
import NavBar from './Navbar'
import TagNav from './Tagnav'

export default {
    components:{
        HeaderBar,
        NavBar,
        TagNav
    }
}
</script>
<style lang="scss" scoped>
    .wrapper,.sys-section{
        height: 100%;
    }
    .sys-content{
        width: 100%;
        height: 100%;
        flex: 1;
        .content{
            height: 100%;
            padding: 10px ;
        }
    }

</style>
