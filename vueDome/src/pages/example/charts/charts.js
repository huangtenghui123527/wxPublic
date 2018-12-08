 // 引入基本模板
 let echarts = require('echarts/lib/echarts');
 // 引入饼图组件 
 require('echarts/lib/chart/pie');
 require('echarts/lib/chart/line');
 // 引入提示框和图例组件
 require('echarts/lib/component/title');
 require('echarts/lib/component/tooltip');
 require('echarts/lib/component/legend');
 require("echarts/lib/component/legendScroll");
export default {
    name:'synthesis',
    data() {
       return {												
           departmentOption:{
               title : {
                   text: '部门统计',
                   subtext: '',
                   x:'left',
                   textStyle:{
                       color:"#222",                           
                       fontStyle:"normal",                    
                       fontWeight:"600",
                       fontFamily:"san-serif",
                       fontSize:16,   
                   }
               },
               tooltip : {
                   trigger: 'item',
                  /* formatter: "{a} <br/>{b} : ({c}门) {d}%"*/
                  formatter: "{a} {b} : ({c}门) {d}%"
               },
               legend: {
                    x : '70%',
                    y : '25%',
                   orient: 'vertical',
                   left: 'left',
                   itemWidth:10,
                   itemHeight:10,                		
                //    selectedMode:false, //禁止点击
                   textStyle: {  
                               fontSize: 12,
                               color:"#000",     
                            }, 
                    formatter: function (name) { //避免文字太长做省略处理
                                  return name.length > 4 ? (name.slice(0,4)+"...") : name 				               
                      },
                   data: ['西凉', '益州','兖州','荆州','幽州']
               },
               series : [
                   {
                       name: '',
                       type: 'pie',
                       radius : '75%',
                       center: ['60%', '54%'], 
                    //    hoverAnimation:false, //是否开启 hover 在扇区上的放大动画效果	
                       selectedMode:'single',  //选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'，'multiple'，分别表示单选还是多选。
                       selectedOffset:5, //选中扇区的偏移距离
                       data:[{value:235, name:'西凉'},
                            {value:274, name:'益州'},
                            {value:310, name:'兖州'},
                            {value:335, name:'荆州'},
                            {value:400, name:'幽州'}],
                       itemStyle: {
                            normal:{
                               label:{
                                   show:true,
                                   textStyle: {  
                                       fontSize: 12  
                                    }, 
                                  /* formatter: '{b} : ({c}门) \n {d}%'	*/
                                  formatter: function(params){ //避免文字太长做省略处理
                                             var name=params.name; //名字
                                             var percent=params.percent; //占比
                                             var value=params.value; //数量
                                             if(name.length>8){
                                                     return name.slice(0,7)+"..."+"\n"+"("+value+"门)"+percent+"%";
                                             }else{
                                                     return name+"\n"+"("+value+")"+percent+"%";
                                             }
                                  }
                                 },
                                labelLine:{
                                   show:true
                                 }
                               },
                           emphasis: {
                               shadowBlur: 10,
                               shadowOffsetX: 0,
                               shadowColor: 'rgba(0, 0, 0, 0.5)'
                           }
                       }
                   }
               ],
               color: ['rgb(187,140,238)','rgb(134,146,243)','rgb(60,184,255)','rgb(113,171,246)','rgb(255,193,134)'] //饼图分块颜色设置
           },
           postChartOption:{
               title : {
                   text: '岗位统计',
                   subtext: '',
                   x:'left',
                   textStyle:{
                       color:"#222",                           
                       fontStyle:"normal",                    
                       fontWeight:"600",
                       fontFamily:"san-serif",
                       fontSize:16,   
                   }
               },
               tooltip : {
                   trigger: 'item',				      
                  formatter: "{a} {b} : ({c}门) {d}%"
               },
               legend: {
                   x : '70%',
                    y : '25%',
                   orient: 'vertical',
                   left: 'left',
                   itemWidth:10,
                   itemHeight:10,  
                   selectedMode:false, //禁止点击
                   textStyle: {  
                               fontSize: 12,
                               color:"#999",  
                            }, 
                   formatter: function (name) {
                                 return name.length > 4 ? (name.slice(0,4)+"...") : name 					               
                       },
                   data: []
               },
               series : [
                   {
                       name: '',
                       type: 'pie',
                       radius : '75%',
                       center: ['60%', '54%'],
                       hoverAnimation:false, //是否开启 hover 在扇区上的放大动画效果
                       selectedMode:'single',  //选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'，'multiple'，分别表示单选还是多选。
                       selectedOffset:5, //选中扇区的偏移距离
                       data:[[  3.4,    4.5,   15,   43],
                       [  4.2,    2.3,   20,   91],
                       [  10.8,   9.5,   30,   18],
                       [  7.2,    8.8,   18,   57]],
                       itemStyle: {
                           normal:{
                               label:{
                                   show:true,
                                  formatter: function(params){
                                             var name=params.name; //名字
                                             var percent=params.percent; //占比
                                             var value=params.value; //数量
                                             if(name.length>8){
                                                     return name.slice(0,7)+"..."+"\n"+"("+value+"门)"+percent+"%";
                                             }else{
                                                     return name+"\n"+"("+value+"门)"+percent+"%";
                                             }
                                  }					           
                                 },
                                labelLine:{
                                   show:true
                                 }
                               },
                           emphasis: {
                               shadowBlur: 10,
                               shadowOffsetX: 0,
                               shadowColor: 'rgba(0, 0, 0, 0.5)'
                           }
                       }
                   }
               ],
              color: ['rgb(187,140,238)','rgb(134,146,243)','rgb(60,184,255)','rgb(113,171,246)','rgb(255,193,134)']
           },
           personnelChartOption:{
               title : {
                   text: '人员统计',
                   subtext: '',
                   x:'left',
                   textStyle:{
                       color:"#222",                           
                       fontStyle:"normal",                    
                       fontWeight:"600",
                       fontFamily:"san-serif",
                       fontSize:16,   
                   }
               },
               tooltip : {
                   trigger: 'item',				      
                 formatter: "{a} {b} : ({c}门) {d}%"
               },
               legend: {
                   x : '70%',
                      y : '25%',
                   orient: 'vertical',
                   left: 'left',
                   itemWidth:10,
                   itemHeight:10,
                   selectedMode:false, //禁止点击
                   textStyle: {  
                               fontSize: 12 ,
                               color:"#999",  
                            }, 
                   formatter: function (name) {
                                  return name.length > 4 ? (name.slice(0,4)+"...") : name 		 				               
                       },
                   data: []
               },
               series : [
                   {
                       name: '',
                       type: 'pie',
                       radius : '75%',
                       center: ['60%', '54%'],
                       hoverAnimation:false, //是否开启 hover 在扇区上的放大动画效果
                       selectedMode:'single',  //选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'，'multiple'，分别表示单选还是多选。
                       selectedOffset:5, //选中扇区的偏移距离
                       data:[[  3.4,    4.5,   15,   43],
                       [  4.2,    2.3,   20,   91],
                       [  10.8,   9.5,   30,   18],
                       [  7.2,    8.8,   18,   57]],
                       itemStyle: {
                           normal:{
                               label:{
                                   show:true,
                                  formatter: function(params){
                                             var name=params.name; //名字
                                             var percent=params.percent; //占比
                                             var value=params.value; //数量
                                             if(name.length>8){
                                                     return name.slice(0,7)+"..."+"\n"+"("+value+"门)"+percent+"%";
                                             }else{
                                                     return name+"\n"+"("+value+"门)"+percent+"%";
                                             }
                                  }						           
                                 },
                                labelLine:{
                                   show:true
                                 }
                               },
                           emphasis: {
                               shadowBlur: 10,
                               shadowOffsetX: 0,
                               shadowColor: 'rgba(0, 0, 0, 0.5)'
                           }
                       }
                   }
               ],
              color: ['rgb(187,140,238)','rgb(134,146,243)','rgb(60,184,255)','rgb(113,171,246)','rgb(255,193,134)']
           },
           classifyChartOption:{
               title : {
                   text: '分类统计',
                   subtext: '',
                   x:'left',
                   textStyle:{
                       color:"#222",                           
                       fontStyle:"normal",                    
                       fontWeight:"600",
                       fontFamily:"san-serif",
                       fontSize:16,   
                   }
               },
               tooltip : {
                   trigger: 'item',				     
                 formatter: "{a} {b} : ({c}门) {d}%"
               },
               legend: {
                    x : '70%',
                    y : '25%',
                   orient: 'vertical',
                   left: 'left',	
                   itemWidth:10,
                   itemHeight:10, 
                   selectedMode:false, //禁止点击                		
                   textStyle: {  
                               fontSize: 12,
                               color:"#999",  
                            }, 
                   formatter: function (name) {
                                 return name.length > 4 ? (name.slice(0,4)+"...") : name 				               
                       },
                   data: []
               },
               series : [
                   {
                       name: '',
                       type: 'pie',
                       radius : '75%',
                       center: ['60%', '54%'],
                       hoverAnimation:false, //是否开启 hover 在扇区上的放大动画效果				           
                       selectedMode:'single',  //选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'，'multiple'，分别表示单选还是多选。
                       selectedOffset:5, //选中扇区的偏移距离
                       data:[[  3.4,    4.5,   15,   43],
                       [  4.2,    2.3,   20,   91],
                       [  10.8,   9.5,   30,   18],
                       [  7.2,    8.8,   18,   57]],
                       itemStyle: {
                           normal:{
                               label:{
                                   show:true,
                                   formatter: function(params){
                                             var name=params.name; //名字
                                             var percent=params.percent; //占比
                                             var value=params.value; //数量
                                             if(name.length>8){
                                                     return name.slice(0,7)+"..."+"\n"+"("+value+"门)"+percent+"%";
                                             }else{
                                                     return name+"\n"+"("+value+"门)"+percent+"%";
                                             }
                                  }						           
                                 },
                                labelLine:{
                                   show:true
                                 }
                               },
                           emphasis: {
                               shadowBlur: 10,
                               shadowOffsetX: 0,
                               shadowColor: 'rgba(0, 0, 0, 0.5)'
                           }
                       }
                   }
               ],
              color: ['rgb(187,140,238)','rgb(134,146,243)','rgb(60,184,255)','rgb(113,171,246)','rgb(255,193,134)']
           },
           fileTypeChartOption:{
               title : {
                   text: '类型统计',
                   subtext: '',
                   x:'left',
                   textStyle:{
                       color:"#222",                           
                       fontStyle:"normal",                    
                       fontWeight:"600",
                       fontFamily:"san-serif",
                       fontSize:16,   
                   }
               },
               tooltip : {
                   trigger: 'item',				       
                   formatter: "{a} {b} : ({c}门) {d}%"
               },
               legend: {
                   x : '70%',
                      y : '25%',
                   orient: 'vertical',
                   left: 'left',
                   itemWidth:10,
                   itemHeight:10, 
                   selectedMode:false, //禁止点击
                   textStyle: {  
                               fontSize: 12 ,
                               color:"#999",  
                            }, 
                   formatter: function (name) {
                                  return name.length > 4 ? (name.slice(0,4)+"...") : name 						               
                       },
                   data: []
               },
               series : [
                   {
                       name: '',
                       type: 'pie',
                       radius : '75%',
                       center: ['50%', '54%'],
                       hoverAnimation:false, //是否开启 hover 在扇区上的放大动画效果	
                       selectedMode:'single',  //选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'，'multiple'，分别表示单选还是多选。
                       selectedOffset:5, //选中扇区的偏移距离
                       data:[[  3.4,    4.5,   15,   43],
                       [  4.2,    2.3,   20,   91],
                       [  10.8,   9.5,   30,   18],
                       [  7.2,    8.8,   18,   57]],
                       itemStyle: {
                           normal:{
                               label:{
                                   show:true,
                                   formatter: function(params){
                                             var name=params.name; //名字
                                             var percent=params.percent; //占比
                                             var value=params.value; //数量
                                             if(name.length>8){
                                                     return name.slice(0,7)+"..."+"\n"+"("+value+"门)"+percent+"%";
                                             }else{
                                                     return name+"\n"+"("+value+"门)"+percent+"%";
                                             }
                                  }							           
                                 },
                                labelLine:{
                                   show:true
                                 }
                               },
                           emphasis: {
                               shadowBlur: 10,
                               shadowOffsetX: 0,
                               shadowColor: 'rgba(0, 0, 0, 0.5)'
                           }
                       }
                   }
               ],
              color: ['rgb(187,140,238)','rgb(134,146,243)','rgb(60,184,255)','rgb(113,171,246)','rgb(255,193,134)']
           },
           api: {					
            //    queryCoursePieChart: global_set.hostRe + '/course/queryCoursePieChart', //图表信息
               
               
           },	
           echartBtn:true,
           echartOn:true,
           echartNum:1,

       }
   },
   mounted: function() {
    //    this.queryCoursePieChart();
        this.drawLine();

   },
   methods: {				
       queryCoursePieChart(){
           this.$http.get(
               this.api.queryCoursePieChart, {
                   params:{
                       access_token:localStorage.token
                   }
               }, {
                   emulateJSON: true
               }
           ).then(function(data) {
               if(data.body.code == 801) {
                   localStorage.token = null
                   this.$router.push({
                       path: '/index-auth-login',
                       query: {
                           'redirect': this.$route.query.fullPath
                       }
                   })
                   return false;
               }
               
               /*****************部门统计****************/
               this.departmentOption.series[0].data=data.body.data.courseCountUsers1.list;
               this.departmentOption.legend.data=data.body.data.courseCountUsers1.names.split(',');

               /*****************岗位统计****************/
               this.postChartOption.series[0].data=data.body.data.courseCountUsers2.list;
               this.postChartOption.legend.data=data.body.data.courseCountUsers2.names.split(',');

               /*****************人员统计****************/
               this.personnelChartOption.series[0].data=data.body.data.courseCountUsers3.list;
               this.personnelChartOption.legend.data=data.body.data.courseCountUsers3.names.split(',');
               /*****************课程分类****************/
               this.classifyChartOption.series[0].data=data.body.data.courseCountUsers4.list;
               this.classifyChartOption.legend.data=data.body.data.courseCountUsers4.names.split(',');
               /*****************文件类型****************/
               this.fileTypeChartOption.series[0].data=data.body.data.courseCountUsers5.list;
               this.fileTypeChartOption.legend.data=data.body.data.courseCountUsers5.names.split(',');
               
               //初始化
               this.drawLine();
               
               

           }, function(err) {
               this.$message.error('网络通讯错误')
           });
       },
       drawLine(){// 初始化echarts实例
           //获取demo元素
           let departmentChart = echarts.init(document.getElementById('departmentChart'));
           let postChart = echarts.init(document.getElementById('postChart'));
           let personnelChart = echarts.init(document.getElementById('personnelChart'));
           let classifyChart = echarts.init(document.getElementById('classifyChart'));
           let fileTypeChart = echarts.init(document.getElementById('fileTypeChart'));

           //初始化echarts
             departmentChart.setOption(this.departmentOption);
             postChart.setOption(this.postChartOption);
             personnelChart.setOption(this.personnelChartOption);
             classifyChart.setOption(this.classifyChartOption);
             fileTypeChart.setOption(this.fileTypeChartOption);
       },
       echartShow(){ //图表展示隐藏				
           let chartMain= document.getElementById("chart-main");
           let strong=document.getElementById("strong");            
           if(this.echartOn){
                this.echartBtn=false;				 
               
           }else{
                this.echartBtn=true;
               
           }
           //显示隐藏上下滑动效果
            chartMain.style.height = this.echartOn? "0": "215px";	
            strong.style.color = this.echartOn? "#222": "#999";	
            this.echartOn=! this.echartOn;
           
       },
       echartIsShow(n){ //不同图表切换
           this.echartNum=n;
           
       },

       
       
   },


}
