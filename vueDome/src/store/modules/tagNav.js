const state={
    cachedPageList:[],
    cachedPageName:[]
}

/**
 * arr.some(callback) 数组arr是否满足条件函数
 * arr.includes(val) 数组arr是否包含val值
 * arr.entries() 返回数组arr的键值对
*/
const mutations={
    addTagNav(state,data){
        if(state.cachedPageList.some(v=>v.path===data.path)) return;
        if(state.cachedPageName.includes(data.name)){
            // console.error(`${data.name} 组件出现命名重复，请检查组件中的name字段。当前组件所在的路由地址为：${data.path}`)
            return;
        }
        state.cachedPageList.push(data)
        state.cachedPageName.push(data.name)
    },
    removeTagNav(state,data){
        if(data){
            for(let [i,v] of state.cachedPageList.entries()){
                if(v.path===data.path){
                    state.cachedPageList.splice(i,1)
                }
            }
            let index=state.cachedPageName.indexOf(data.name)
            if(index>=0){
                state.cachedPageName.splice(index,1)
            }
        }else{
            state.cachedPageList=[];
            state.cachedPageName=[];
        }
    }
}

export default {
    namespaced:true,
    state,
    mutations
}