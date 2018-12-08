<template>
    <div id="bar">
        <div id="chartBar" :style="{width: '1000px', height: '600px'}"></div>
        <div id="chartBarLine" :style="{width: '1000px', height: '600px'}"></div>
        <div id="main" :style="{width: '1000px', height: '600px'}"></div>
        <p class="charts" v-if="id">
            <pie :id="id" :option="option"></pie>
        </p>
    </div>
</template>
<script>
import pie from '@/components/PieChart'
import HighCharts from 'highcharts'


import echarts from 'echarts/lib/echarts'
import 'echarts-gl';
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/toolbox'

export default {
    name:"echBar",
     components: {
        pie,
    },
    data(){
        return {
            id: '',
            option:null,
        }
    },
    mounted(){
        this.drawBar();
        this.drawBarLine();
        this.draw3D();
        this.heightChart3D()
    },
    methods:{
        drawBarLine(){
            let chartBarLine = echarts.init(document.getElementById('chartBarLine'));

            chartBarLine.title = '多 Y 轴示例';

            let colors = ['#5793f3', '#d14a61', '#675bba'];

            let option = {
                color: colors,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                grid: {
                    right: '20%'
                },
                toolbox: {
                    feature: {
                        dataView: {show: true, readOnly: false},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                legend: {
                    data:['蒸发量','降水量','平均温度']
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '蒸发量',
                        min: 0,
                        max: 250,
                        position: 'right',
                        axisLine: {
                            lineStyle: {
                                color: colors[0]
                            }
                        },
                        axisLabel: {
                            formatter: '{value} ml'
                        }
                    },
                    {
                        type: 'value',
                        name: '降水量',
                        min: 0,
                        max: 250,
                        position: 'right',
                        offset: 80,
                        axisLine: {
                            lineStyle: {
                                color: colors[1]
                            }
                        },
                        axisLabel: {
                            formatter: '{value} ml'
                        }
                    },
                    {
                        type: 'value',
                        name: '温度',
                        min: 0,
                        max: 25,
                        position: 'left',
                        axisLine: {
                            lineStyle: {
                                color: colors[2]
                            }
                        },
                        axisLabel: {
                            formatter: '{value} °C'
                        }
                    }
                ],
                series: [
                    {
                        name:'蒸发量',
                        type:'bar',
                        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                    },
                    {
                        name:'降水量',
                        type:'bar',
                        yAxisIndex: 1,
                        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                    },
                    {
                        name:'平均温度',
                        type:'line',
                        yAxisIndex: 2,
                        data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                    }
                ]
            };
            chartBarLine.setOption(option)
        },
        drawBar(){
            let chartBar = echarts.init(document.getElementById('chartBar'));
            var posList = [
                'left', 'right', 'top', 'bottom',
                'inside',
                'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
                'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
            ];
            chartBar.configParameters = {
                rotate: {
                    min: -90,
                    max: 90
                },
                align: {
                    options: {
                        left: 'left',
                        center: 'center',
                        right: 'right'
                    }
                },
                verticalAlign: {
                    options: {
                        top: 'top',
                        middle: 'middle',
                        bottom: 'bottom'
                    }
                },
                position: {
                    options: echarts.util.reduce(posList, function (map, pos) {
                        map[pos] = pos;
                        return map;
                    }, {})
                },
                distance: {
                    min: 0,
                    max: 100
                }
            };

            chartBar.config = {
                rotate: 90,
                align: 'left',
                verticalAlign: 'middle',
                position: 'insideBottom',
                distance: 15,
                onChange: function () {
                    var labelOption = {
                        normal: {
                            rotate: chartBar.config.rotate,
                            align: chartBar.config.align,
                            verticalAlign: chartBar.config.verticalAlign,
                            position: chartBar.config.position,
                            distance: chartBar.config.distance
                        }
                    };
                    myChart.setOption({
                        series: [{
                            label: labelOption
                        }, {
                            label: labelOption
                        }, {
                            label: labelOption
                        }, {
                            label: labelOption
                        }]
                    });
                }
            };

            var labelOption = {
                normal: {
                    show: true,
                    position: chartBar.config.position,
                    distance: chartBar.config.distance,
                    align: chartBar.config.align,
                    verticalAlign: chartBar.config.verticalAlign,
                    rotate: chartBar.config.rotate,
                    formatter: '{c}  {name|{a}}',
                    fontSize: 16,
                    rich: {
                        name: {
                            textBorderColor: '#fff'
                        }
                    }
                }
            };
            let option={
                color: ['#003366', '#006699', '#4cabce', '#e5323e'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['Forest', 'Steppe', 'Desert', 'Wetland']
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {show: false},
                        data: ['2012', '2013', '2014', '2015', '2016']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'Forest',
                        type: 'bar',
                        barGap: 0,
                        label: labelOption,
                        data: [320, 332, 301, 334, 390]
                    },
                    {
                        name: 'Steppe',
                        type: 'bar',
                        label: labelOption,
                        data: [220, 182, 191, 234, 290]
                    },
                    {
                        name: 'Desert',
                        type: 'bar',
                        label: labelOption,
                        data: [150, 232, 201, 154, 190]
                    },
                    {
                        name: 'Wetland',
                        type: 'bar',
                        label: labelOption,
                        data: [98, 77, 101, 99, 40]
                    }
                ]
            };
            chartBar.setOption(option);

        },
        draw3D(){
            var myChart = echarts.init(document.getElementById('main'));
            let option = {
                tooltip: {
                    type: ''
                },
                xAxis3D: {
                    type: 'category',
                    name: '单价',
                    data: ['a','b','c','d'],
                    axisTick: {
                        // show: true
                    },
                },
                yAxis3D: {
                    type: 'category',
                    name: '价值',
                    data: [5],
                    axisTick: {
                        show: true
                    },
                    axisLine: {
                        lineStyle: {
                            // color: 'red'
                            color: 'rgba(0,0,0,1)'
                        }
                    }
                },
                zAxis3D: {
                    type: 'value',
                    name: '数量',
                    // top:'top',
                    axisTick: {
                        show: true
                    },
                },
                grid3D: {
                    boxWidth: 150,
                    boxDepth: 30,
                    zlevel: -1,
                    axisPointer: {
                        show: true
                    },
                    light: {
                        main: {
                            intensity: 1.2
                        },
                        ambient: {
                            intensity: 0.3
                        }
                    }
                },
                series: [{
                    type: 'bar3D',
                    name: '',
                    barSize: 11,
                    data: [{
                        value: [ 0,2,11],
                        itemStyle:{
                            color:'red'
                        }
                    },{
                        value: [ 1,2,10],
                        itemStyle:{
                            color:'#EFE42A'
                        }
                    },{
                        value: [ 2,1,25],
                        itemStyle:{
                            color:'#E89589'
                        }
                    },{
                        value: [ 3,2,5],
                        itemStyle:{
                            color:'#66D9EF'
                        }
                    }],
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: 16,
                            borderWidth: 1
                        }
                    },
                    itemStyle: {
                        opacity: 0.8
                    },
                    // emphasis: {
                    //     label: {
                    //         textStyle: {
                    //             fontSize: 20,
                    //             color: 'blue'
                    //         }
                    //     }
                    // }
                }]
            }
            // 为echarts对象加载数据
            myChart.setOption(option);
        },
        heightChart3D(){
            this.id='柱状图';
            this.option={
                chart: {
                    type: 'column',
                    margin: 75,
                    options3d: {
                        enabled: true,
                        alpha: 10,
                        beta: 15,
                        depth: 70,
                        viewDistance: 100,      // 视图距离，它对于计算角度影响在柱图和散列图非常重要。此值不能用于3D的饼图
                        frame: {                // Frame框架，3D图包含柱的面板，我们以X ,Y，Z的坐标系来理解，X轴与 Z轴所形成
                            // 的面为bottom，Y轴与Z轴所形成的面为side，X轴与Y轴所形成的面为back，bottom、
                            // side、back的属性一样，其中size为感官理解的厚度，color为面板颜色
                            bottom: {
                                size: 10,
                                color: '#eee'

                            },
                            side: {
                                size: 5,
                                color: '#eee'
                            },
                            back: {
                                size: 1,
                                color: 'transparent'
                            }
                        }
                    },
                    //  backgroundColor: {
                    //     linearGradient: [0, 0, 500, 500],
                    //     stops: [
                    //         // [0, 'rgb(255, 255, 255)'],
                    //         [1, 'rgb(200, 200, 255)']
                    //     ]
                    // },
                },
                title: {
                    text: '包含空值的3D柱状图'
                },
                subtitle: {
                    text: '请注意值为 0 和 null 的区别'
                },
                plotOptions: {
                    column: {
                        depth: 25
                    },
                },
                xAxis: {
                	categories: HighCharts.getOptions().lang.shortMonths
                },
                yAxis: {
                    title: {
                        text: '价格'
                    },
                    stackLabels: {
                        enabled: false,
                        style: {
                            fontWeight: 'bold',
                            color: (HighCharts.theme && HighCharts.theme.textColor) || 'gray'
                        },
                        align:'left'
                    }                
                },
                series: [{
                    name: '销售',
                    // data: [2, 3, null, 4, 0, 5, 1, 4, 6, 3],
                    data: [{ y: 10, color: 'red', name: '5' }, { y: 23, color: '#C33531', name: '5' }, { y:45, color: '#EFE42A', name: '5' }, { y:  
                    70, color: '#64BD3D', name: '5' }, { y: 55, color: '#EE9201', name: '5' }, { y: 60, color: '#29AAE3', name: '5' }, { y: 32, color: '#B74AE5',  
                    name: '5' }, { y: 65, color: '#0AAF9F', name: '5' }, { y: 24, color: '#E89589', name: '5'}], 
                }]
            }


        }
    }
}
</script>
<style lang="scss" scoped>

</style>
