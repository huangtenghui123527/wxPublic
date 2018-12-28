import $t from '@/common/js/tool'

const state={
    // 用户名
    name:''
}

const mutations={
    setName:(state,data)=>{
        if(data){
            $t.setCookie('userName',data,3);
        }else{
            $t.removeCookie('userName')
        }
        state.name=data.name;
    }
}

export default {
    namespaced:true,
    state,
    mutations
}