<template>
    <div class="sys-header">
        <div class="logo">
            <a href="javascript:;">
                <slot name="logo"></slot>
            </a>
        </div>
        <!-- <slot name="topnav"></slot> -->
        <div class="collapse fa fa-outdent" @click="changeCollapse"></div>
        <div class="userInfo">
            <!-- <h2>{{msg}}</h2> -->
            <el-dropdown @command="handleCommand">
                <div class="el-dropdown-link user_content" >
                    <img src="@/assets/img/6.jpg" alt="userPic">
                    <span>{{suerName?suerName:msg}}</span>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="exitpss"><i class="fa fa-cog" aria-hidden="true"></i>修改密码</el-dropdown-item>
                    <el-dropdown-item command="out" divided><i class="fa fa-circle-o-notch" aria-hidden="true"></i> 退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import $t from '@/common/js/tool.js'
export default {
    data() {
        return {
            msg:'用户名'
        }
    },
    computed:{
        ...mapState({
            suerName:state=>state.user.name
        })
    },
    methods: {
        ...mapActions({
            sysLogout:'auth/logout',
            loadLang:'loadLang'
        }),
      handleCommand(command) {
        this.$message('click on item ' + command);
        if(command=='out'){
            this.sysLogout().then(()=>{
                // console.log(res)
                window.location.replace("/")
            })
        }
      },
      changeCollapse(){
          if(this.$root.isCollapse){
            this.$root.Bus.$emit('elSoll',false)
          }else{
            this.$root.Bus.$emit('elSoll',true)
          }
        //   console.log(this.$root.isCollapse)
      }
    },
    mounted(){
        let isUser=$t.getCookie('userName');
        // console.log(isUser)
        // this.msg=isUser?JSON.parse(isUser).name:''
    }
}
</script>

<style lang="scss" scoped src="@/assets/css/Header.scss"></style>
