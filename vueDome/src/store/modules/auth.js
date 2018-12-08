import $t from '@/common/js/tool'
import Auth from '@/common/js/auth'
import {getToken,getList} from '@/api/api'

const state={
    token:'',
    navList:[]
}

/**
 * 更改vuex的store状态唯一方法是提交mutation
 * 函数必须为同步;
 * store.commit('函数名',型参)
*/
const mutations={
    setNavList:(state,data)=>{
        // console.log(data)
        state.navList=data
    },
    setToken:(state,data)=>{
        // console.log(data)
        if(data){
            Auth.setToken(data);
            Auth.setLoginStatus();
            // $t.setCookie('Token',data,3);
        }else{
            Auth.removeToken();
            Auth.removeLoginStatus();
            // $t.removeCookie('Token')
        }
        state.token=data;
    }
}

const actions={
    // 获取新Token
    getNewToken({commit,state}){
        return new Promise((resolve)=>{
            let para={
                token:state.token
            }
            getToken(para).then(res=>{
                console.log(res)
                commit('setToken',res.token);
                resolve();
            }).catch(err=>{
                console.log(err);

            })
        })
    },
    // 获取用户菜单列表
    getNavList({commit}){
        return new Promise(resolve=>{
            getList().then(res=>{
                // console.log(res);
                commit('setNavList',res)
                resolve(res)
            }).catch(err=>{
                console.log(err)
            })
        })
    },
    //生成权限列表
    getPermissionList({state}){
        return new Promise(resolve=>{
            let permissionList=[];
            function flatNavList(arr){
                for(let v of arr){
                    if(v.child&&v.child.length){
                        flatNavList(v.child)
                    }else[
                        permissionList.push(v)
                    ]
                }
            }
            flatNavList(state.navList);
            resolve(permissionList)
        })
    },
    //退出
    logout({commit}){
        return new Promise(resolve=>{
            commit('setToken','');
            commit('user/setName','',{root:true})
            commit('tagNav/removeTagNav','',{root:true})
            resolve()
        })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}