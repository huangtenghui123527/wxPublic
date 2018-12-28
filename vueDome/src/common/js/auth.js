import $t from './tool'

export default {
    //设置Token
    setToken:function(data){
        $t.setCookie('token',data,3);
    },
    // token是否超时
    hasToken:function(){
        return $t.getCookie('token')
    },
    // 移除Token
    removeToken:function(){
        $t.removeCookie('token')
    },
    // 用户是否登录
    isLogin:function(){
        return $t.getCookie('isLogin')
    },
    // 设置登录状态
    setLoginStatus:function(){
        $t.setCookie('isLogin',true,3);
    },
    // 移除登录状态
    removeLoginStatus:function(){
        $t.removeCookie('isLogin')
    },
}

