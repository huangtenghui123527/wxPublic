<template>
    <div id="navTitle">
        <el-menu router ref="navbar" class="el_nav_menu" :default-active="defActive"  @open="openMenu" @close="closeMenu" :collapse="isCollapse" unique-opened >
            <nav-child v-for="(item, n) in navList" :item="item" :navIndex="String(item.id)" :key="n"></nav-child>
        </el-menu>
    </div>
</template>
<script>
import {Echart} from '@/api/api'
import navChild from './navChild'
export default {
    name:'IntTitle',
    components:{navChild},
    computed:{
        defActive(){
            return this.$route.path
        },
    },
    data() {
      return {
        isCollapse: false,
        navList:null
      };
    },
    mounted(){
        this.getData();
    },
    methods: {
      openMenu(key, keyPath) {
      },
      closeMenu(key, keyPath) {
      },
      getData(){
          Echart().then(res=>{
            //   console.log(res.json.data);
              this.navList=res.json.data
          }).catch(err=>{
              console.log(err)
          })
      }
    }
}
</script>
<style lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  #navTitle{
      background: transparent;
      .el-menu{
          border: none ；
      }
        .el_nav_menu{
        //   width: 200px;
          border: 1px solid #eee;
          display: inline-block;
      }
  }
</style>