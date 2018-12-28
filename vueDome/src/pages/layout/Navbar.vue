<template>
    <div class="Navlist">
        <el-menu router ref="navbar" :class="isCollapse?'changeNavbar':'defaultNavbar'" :default-active="defActive"  @open="openMenu" @close="closeMenu" :collapse="isCollapse" unique-opened >
            <nav-bar-item v-for="(item, n) in navList" :item="item" :navIndex="String(n)" :key="n"></nav-bar-item>
        </el-menu>
        <!-- <div  v-show="navBgShow" class="full-screen-navBg" @click.self="selectMenu"></div> -->
    </div>
</template>
<style>
</style>
<script>
import {mapState} from 'vuex'
import NavBarItem from './NavBarItem'
  export default {
    components:{NavBarItem},
    computed:{
        ...mapState({
            navList:state=>state.auth.navList
        }),
        defActive(){
            return this.$route.path
        },
    },
    data() {
      return {
        isCollapse: false,
        // navBgShow:false
      };
    },
    created(){
        let isCollapse=this.$root.Bus.$on('elSoll',val=>{
            this.$root.isCollapse=val;
            this.isCollapse=val;
        })
        // console.log(this.$root.Bus.isCollapse)
    },
    methods: {
        selectMenu(){
            let openMenu = this.$refs.navbar.openedMenus.concat([])
            openMenu = openMenu.reverse()
            openMenu.forEach((ele) => {
                this.$refs.navbar.closeMenu(ele)
            })
        },
        openMenu(key, keyPath) {
        },
        closeMenu(key, keyPath) {
        },
    },
    mounted(){
        // console.log(this.$root)
    }
  }
</script>
<style lang="scss" scoped src="@/assets/css/Navbar.scss"></style>
