import Vue from 'vue';
import VueRouter from 'vue-router'
import staticRoute from './staticRoute'
import whiteList from './whiteList'
import Auth from '@/common/js/auth'
import store from '@/store'
import {Message} from 'element-ui'

let permissionList=[];

function initRoute(router){
  return new Promise(resolve => {
    if(permissionList.length==0){
      store.dispatch('auth/getNavList').then((res)=>{
        store.dispatch('auth/getPermissionList').then((res)=>{
          // console.log(res)
          permissionList=res;
          res.forEach(v=>{
            let routeItem=router.match(v.path);
            if(routeItem){
              routeItem.meta.permission=v.permission?v.permission:[];
              routeItem.meta.name=v.name
            }
          })
          resolve()
        })
      })
    }else{
      resolve()
    }
  })
}

Vue.use(VueRouter)

const router=new VueRouter({
  mode:'history',
  routes:staticRoute
})

// console.log(Auth.isLogin())
router.beforeEach((to,from,next)=>{
  if(Auth.isLogin()){
    // console.log('用户已登录');
    if(to.path==='/login'){
      next({path:'/home',replace:true})
    }else if(to.path.indexOf('/error')!=-1){
      next()
    }else{
      initRoute(router).then(()=>{
        let isPermission=false;
        permissionList.forEach(v => {
          if(v.path==to.fullPath){
            isPermission=true;
          }
        });
        if(!isPermission){
          next({path:'/error/401',replace:true})
        }else{
          next()
        }
      })
    }
  }else{
    // console.log('用户未登录');
    // 进入免登陆页面
    if(whiteList.indexOf(to.path)!=-1){
      next()
    }else{
      // console.log(store.state.auth.token)
      next({path:'/login',replace:true})
      if(store.state.auth.token){
        Message({
          type:'warning',
          message:'登录超时，请重新登录'
        })
      }
    }
  }
})

export default router
