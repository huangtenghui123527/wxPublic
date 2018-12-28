import Vue from 'vue';
import {getTF} from '@/api/api'
let dom = null
export default {
    data(){
        return {
            list:[],
            changeLi:null,
            courseClick:false,
            projectdatas:[{
                id:1,
                name:'葡萄',
              },{
                id:2,
                name:'芒果',
              },{
                id:3,
                name:'木瓜',
              },{
                id:4,
                name:'榴莲',
              }],
              peopledata:[{
                id:1,
                name:'小颖',
              },{
                id:2,
                name:'hover',
              },{
                id:3,
                name:'空巢青年三 ',
              },{
                id:3,
                name:'一丢丢',
              }]
        }
    },
    methods:{
        getData(){
            getTF().then(res=>{
                console.log(res);
                this.list=res;
            })
        },
        // 樣式計算全部被修改，類似計算屬性
        lineStyle(isClick){
            console.log(isClick)
            if (isClick===true){
                return 'crrentli'
            }else {
                return ''
            }
        },
        // 第三種
        //  selectCrrent(index){
        //     // this.changeLi=index;
        //     this.courseClick=true;
        // },
        // 第二種
        selectCrrent(index){
            this.changeLi=index;
        },
        // 第一種
        // selectCrrent(id){
        //     console.log(typeof id);
        //     for(let i in this.list){
        //         if(id==this.list[i].id){
        //             this.list[i].isSelect=true;
        //         }else{
        //             this.list[i].isSelect=false;
                    
        //         }
        //     }
        // },
        drag:function(event){
           dom = event.currentTarget
         },
         drop:function(event){
           event.preventDefault();
        //    event.target.appendChild(dom);
            event.target.parentNode.insertBefore(dom,event.target);
         },
         allowDrop:function(event){
           event.preventDefault();
         },
    },
    mounted(){
        this.getData()
    }
}
