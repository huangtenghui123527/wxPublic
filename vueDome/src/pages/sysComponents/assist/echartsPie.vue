<template>
    <div id="pie">
        <div class="char-warrper">
            <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
            <el-button class="reset" type="primary" @click="resetEchart">重置</el-button>
        </div>
        <div class="char-warrper">
            <div id="chartWhear" :style="{width: '600px', height: '300px'}"></div>
            <el-button class="reset" type="primary" @click="resetEchart">重置</el-button>
        </div>
        <div id="echartBarPie" :style="{width: '1000px', height: '800px'}"></div>

        <p class="charts">
            <pie :id="id" :option="option"></pie>
        </p>
    </div>
</template>
<script>
import pie from '@/components/PieChart'
import {Echart} from '@/api/api'
import echarts from 'echarts/lib/echarts'
import 'echarts-gl';
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/visualMap'
import '@/common/css/echart.scss'
export default {
    name:'echPie',
    components: {
        pie,
    },
    data(){
        return {
            msg:'饼图',
            myChart:null,
            chartWhear:null,
            id: 'test',
            option: {
                chart: {
                    type: 'pie',//饼图
                     options3d: {
                         enabled: true,//使用3d功能
                         alpha: 60,//延y轴向内的倾斜角度
                         beta: 0,  
                     }
                },
                title: {
                    text: '测试用'//图表的标题文字
                },
                subtitle: {
                    text: ''//副标题文字
                },
 
            plotOptions: {
                pie: {
                    allowPointSelect: true,//每个扇块能否选中
                    cursor: 'pointer',//鼠标指针
                    depth: 35,//饼图的厚度
                    dataLabels: {
                        enabled: true,//是否显示饼图的线形tip
                    }
                }
            },
                series: [
                {
                    type: 'pie',
                    name: '测试用1',//统一的前置词,非必须
                    data: [
                        ['测试1',12],//模块名和所占比，也可以{name: '测试1',y: 12}
                        ['测试2',23],
                        ['测试3',19],
                        ['测试4',29]
                    ]
                 }
                ]
            }
        }
    },mounted(){
       this.myChart = echarts.init(document.getElementById('myChart'))
       this.chartWhear = echarts.init(document.getElementById('chartWhear'))
       this.custominzed(false);
       this.weather();
       this.echPieBar();


    },
    methods:{
        echPieBar(){
            let ech = echarts.init(document.getElementById('echartBarPie'))
            ech.title = '水印 - ECharts 下载统计'
            let builderJson = {
            "all": 10887,
            "charts": {
                "map": 3237,
                "lines": 2164,
                "bar": 7561,
                "line": 7778,
                "pie": 7355,
                "scatter": 2405,
                "candlestick": 1842,
                "radar": 2090,
                "heatmap": 1762,
                "treemap": 1593,
                "graph": 2060,
                "boxplot": 1537,
                "parallel": 1908,
                "gauge": 2107,
                "funnel": 1692,
                "sankey": 1568
            },
            "components": {
                "geo": 2788,
                "title": 9575,
                "legend": 9400,
                "tooltip": 9466,
                "grid": 9266,
                "markPoint": 3419,
                "markLine": 2984,
                "timeline": 2739,
                "dataZoom": 2744,
                "visualMap": 2466,
                "toolbox": 3034,
                "polar": 1945
            },
            "ie": 9743
            };

            var downloadJson = {
            "echarts.min.js": 17365,
            "echarts.simple.min.js": 4079,
            "echarts.common.min.js": 6929,
            "echarts.js": 14890
            };

            var themeJson = {
            "dark.js": 1594,
            "infographic.js": 925,
            "shine.js": 1608,
            "roma.js": 721,
            "macarons.js": 2179,
            "vintage.js": 1982
            };

            var waterMarkText = 'ECHARTS';

            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = canvas.height = 100;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.globalAlpha = 0.08;
            ctx.font = '20px Microsoft Yahei';
            ctx.translate(50, 50);
            ctx.rotate(-Math.PI / 4);
            ctx.fillText(waterMarkText, 0, 0);

            let option = {
                backgroundColor: {
                    type: 'pattern',
                    image: canvas,
                    repeat: 'repeat'
                },
                tooltip: {},
                title: [{
                    text: '在线构建',
                    subtext: '总计 ' + builderJson.all,
                    x: '25%',
                    textAlign: 'center'
                }, {
                    text: '各版本下载',
                    subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
                        return all + downloadJson[key];
                    }, 0),
                    x: '75%',
                    textAlign: 'center'
                }, {
                    text: '主题下载',
                    subtext: '总计 ' + Object.keys(themeJson).reduce(function (all, key) {
                        return all + themeJson[key];
                    }, 0),
                    x: '75%',
                    y: '50%',
                    textAlign: 'center'
                }],
                grid: [{
                    top: 50,
                    width: '50%',
                    bottom: '45%',
                    left: 10,
                    containLabel: true
                }, {
                    top: '55%',
                    width: '50%',
                    bottom: 0,
                    left: 10,
                    containLabel: true
                }],
                xAxis: [{
                    type: 'value',
                    max: builderJson.all,
                    splitLine: {
                        show: false
                    }
                }, {
                    type: 'value',
                    max: builderJson.all,
                    gridIndex: 1,
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [{
                    type: 'category',
                    data: Object.keys(builderJson.charts),
                    axisLabel: {
                        interval: 0,
                        rotate: 30
                    },
                    splitLine: {
                        show: false
                    }
                }, {
                    gridIndex: 1,
                    type: 'category',
                    data: Object.keys(builderJson.components),
                    axisLabel: {
                        interval: 0,
                        rotate: 30
                    },
                    splitLine: {
                        show: false
                    }
                }],
                series: [{
                    type: 'bar',
                    stack: 'chart',
                    z: 3,
                    label: {
                        normal: {
                            position: 'right',
                            show: true
                        }
                    },
                    data: Object.keys(builderJson.charts).map(function (key) {
                        return builderJson.charts[key];
                    })
                }, {
                    type: 'bar',
                    stack: 'chart',
                    silent: true,
                    itemStyle: {
                        normal: {
                            color: '#eee'
                        }
                    },
                    data: Object.keys(builderJson.charts).map(function (key) {
                        return builderJson.all - builderJson.charts[key];
                    })
                }, {
                    type: 'bar',
                    stack: 'component',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    z: 3,
                    label: {
                        normal: {
                            position: 'right',
                            show: true
                        }
                    },
                    data: Object.keys(builderJson.components).map(function (key) {
                        return builderJson.components[key];
                    })
                }, {
                    type: 'bar',
                    stack: 'component',
                    silent: true,
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            color: '#eee'
                        }
                    },
                    data: Object.keys(builderJson.components).map(function (key) {
                        return builderJson.all - builderJson.components[key];
                    })
                }, {
                    type: 'pie',
                    radius: [0, '30%'],
                    center: ['75%', '25%'],
                    data: Object.keys(downloadJson).map(function (key) {
                        return {
                            name: key.replace('.js', ''),
                            value: downloadJson[key]
                        }
                    })
                }, {
                    type: 'pie',
                    radius: [0, '30%'],
                    center: ['75%', '75%'],
                    data: Object.keys(themeJson).map(function (key) {
                        return {
                            name: key.replace('.js', ''),
                            value: themeJson[key]
                        }
                    })
                }]
            }
            ech.setOption(option);
        },
        weather(){
            let option={
                 title: {
                    text: '天气情况统计',
                    subtext: '虚构数据',
                    left: 'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    // orient: 'vertical',
                    // top: 'middle',
                    bottom: 10,
                    left: 'center',
                    data: ['西凉', '益州','兖州','荆州','幽州']
                },
                series : [
                    {
                        type: 'pie',
                        radius : '65%',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data:[
                            {
                                value:1548,
                                name: '幽州',
                                label: {
                                    normal: {
                                        formatter: [
                                            '{title|{b}}{abg|}',
                                            '  {weatherHead|天气}{valueHead|天数}{rateHead|占比}',
                                            '{hr|}',
                                            '  {Sunny|}{value|202}{rate|55.3%}',
                                            '  {Cloudy|}{value|142}{rate|38.9%}',
                                            '  {Showers|}{value|21}{rate|5.8%}'
                                        ].join('\n'),
                                        backgroundColor: '#eee',
                                        borderColor: '#777',
                                        borderWidth: 1,
                                        borderRadius: 4,
                                        rich: {
                                            title: {
                                                color: '#eee',
                                                align: 'center'
                                            },
                                            abg: {
                                                backgroundColor: '#333',
                                                width: '100%',
                                                align: 'right',
                                                height: 25,
                                                borderRadius: [4, 4, 0, 0]
                                            },
                                            Sunny: {
                                                height: 30,
                                                align: 'left',
                                                backgroundColor: {
                                                    image: ''
                                                }
                                            },
                                            Cloudy: {
                                                height: 30,
                                                align: 'left',
                                                backgroundColor: {
                                                    image: ''
                                                }
                                            },
                                            Showers: {
                                                height: 30,
                                                align: 'left',
                                                backgroundColor: {
                                                    image: ''
                                                }
                                            },
                                            weatherHead: {
                                                color: '#333',
                                                height: 24,
                                                align: 'left'
                                            },
                                            hr: {
                                                borderColor: '#777',
                                                width: '100%',
                                                borderWidth: 0.5,
                                                height: 0
                                            },
                                            value: {
                                                width: 20,
                                                padding: [0, 20, 0, 30],
                                                align: 'left'
                                            },
                                            valueHead: {
                                                color: '#333',
                                                width: 20,
                                                padding: [0, 20, 0, 30],
                                                align: 'center'
                                            },
                                            rate: {
                                                width: 40,
                                                align: 'right',
                                                padding: [0, 10, 0, 0]
                                            },
                                            rateHead: {
                                                color: '#333',
                                                width: 40,
                                                align: 'center',
                                                padding: [0, 10, 0, 0]
                                            }
                                        }
                                    }
                                }
                            },
                            {value:535, name: '荆州'},
                            {value:510, name: '兖州'},
                            {value:634, name: '益州'},
                            {value:735, name: '西凉'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
            this.chartWhear.setOption(option);

        },
        custominzed(isTrue){
            // let para={name:'hehe'}
            Echart().then(res=>{
                // console.log(res);
                let option={
                    backgroundColor:isTrue?res.bgColor:'#2c343c',
                    title: {
                        text: 'Customized Pie',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#ccc'
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    visualMap: {
                        // 不显示 visualMap 组件，只用于明暗度的映射
                        show: false,
                        // 映射的最小值为 80
                        min: 100,
                        // 映射的最大值为 600
                        max: 500,
                        inRange: {
                            // 明暗度的范围是 0 到 1
                            colorLightness: [0, 1]
                        }
                    },
                    // textStyle: {
                        // color: 'rgba(255, 255, 255, 0.3)'
                    // },
                    
                    series : [{
                        name: '访问来源',
                        type: 'pie',
                        roseType: 'angle',
                        radius: '55%',
                        label: {
                            textStyle: {
                                color: 'white'
                            }
                        },
                        labelLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        },
                        itemStyle: {
                            // 阴影的大小
                            // shadowBlur: 200,
                            // 阴影水平方向上的偏移
                            color: '#c23531',
                            // shadowColor: 'rgba(0, 0, 0, 0.5)',
                            // shadowOffsetX: 0,
                            // 阴影垂直方向上的偏移
                            // shadowOffsetY: 0,
                            // 阴影颜色
                            // shadowColor: 'rgba(0, 0, 0, 0.5)',
                            //hover效果
                            // emphasis: {
                            //     shadowBlur: 200,
                            //     shadowColor: 'rgba(0, 0, 0, 0.5)'
                            // },
                        },
                        
                        data:[
                            {value:235, name:'视频广告'},
                            {value:274, name:'联盟广告'},
                            {value:310, name:'邮件营销'},
                            {value:335, name:'直接访问'},
                            {value:400, name:'搜索引擎'}
                        ].sort(function (a, b) { return a.value - b.value; }),
                        // data:[
                        //     {value:235, name:'视频广告',itemStyle:{ color: '#c25'}},
                        //     {value:274, name:'联盟广告',itemStyle:{ color: '#c23'}},
                        //     {value:310, name:'邮件营销',itemStyle:{ color: '#c29'}},
                        //     {value:335, name:'直接访问',itemStyle:{ color: '#c27'}},
                        //     {value:400, name:'搜索引擎',itemStyle:{ color: '#c21'}}
                        // ],
                    }],

                }
                this.myChart.setOption(option);

            }).catch(err=>{
                console.log(err)
            })
            // 绘制图表
        },
        // 重置
        resetEchart(){
           this.custominzed(true);
            // window.location.reload();
        },
    }
}
</script>
