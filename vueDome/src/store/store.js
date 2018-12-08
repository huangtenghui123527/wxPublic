import Vue from 'vue'
import Vuex from 'vuex'

// //import * as actions from './actions'
// //import * as getters from './getters'

// Vue.use(Vuex)

// //初始状态
// const state={
// 	count:1,
// 	message:'Hello World',
//     bookList:[
//          {
//              name:'javascript权威指南',
//              price:100,
//              en:'jq'
//          },
//          {
//              name:'angularjs权威指南',
//              price:80,
//              en:'aq'
//          },
//          {
//              name:'HTTP权威指南',
//              price:50,
//             en:'hq'
//          }
//      ]
// };

// // 定义所需的 mutations

   
// //	多用于查询
// const getters={
// 		filterPrice:function(state){
// 	         var narr = [];
// 	         for(var i = 0;i<state.bookList.length;i++){
// 	             state.bookList[i].price<85 ? narr.push(state.bookList[i]) : null;
// 	         }
// 	         	return narr;
//          },
//           getListPrice: (state) => (price) => {
// 		    return state.bookList.find(bookList => bookList.price === price)
// 		  }
// };
// const actions={
//          //异步操作
//     addBook:function(context){
//              setTimeout(function(){
//                  context.commit('addBook',{name:'HTML5权威指南',price:75});
//              },2000);
//          }
//     };
 
// // 创建 store 实例
// export default new Vuex.Store({
//     actions,
//     getters,
//     state,
//     mutations
// })



import vuexModules from './modules'

// import getters from './getters'

// import actions from './actions'

Vue.use(Vuex)
//初始状态
// const state={
//     count:1,
// }
// const mutations={
//     //同步,主要用于修改state状态
// INCREMENT(state,deta) {
//     console.log(deta)
//    state.count+=deta
// },
// DECREMENT(state) {
//    state.count--
// },
// showMessage:function(state,data){
//         state.message = 'Store mutations changed this words。'+data;
//    },
// addBook:function(state,data){
//         state.bookList.push(data)
//    }
// };

export default new Vuex.Store({
    // getters,
    // actions,
    state,
    mutations,
    modules: vuexModules

})