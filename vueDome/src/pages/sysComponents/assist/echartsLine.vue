<template>
    <div id="line">
        <div class="char-warrper">
             <div id="myChart" :style="{width: '500px', height: '300px'}"></div>
            <!-- <el-button class="reset" type="primary" @click="resetEchart">重置</el-button> -->
        </div>
        <div class="char-warrper">
             <div id="chartRainfall" :style="{width: '500px', height: '300px'}"></div>
            <!-- <el-button class="reset" type="primary" @click="resetEchart">重置</el-button> -->
        </div>

    </div>
    
</template>
<script>
import echarts from 'echarts/lib/echarts'
// 引入柱状图组件
import 'echarts/lib/chart/line'
// require('echarts/lib/chart/bar')
// // 引入提示框和title组件
require('echarts/lib/component/tooltip')
// import 'echarts/lib/component/title'
require('echarts/lib/component/legend')
require('echarts/lib/component/grid')
require('echarts/lib/component/toolbox')
import '@/common/css/echart.scss'
export default {
    name:'echLine',
    data(){
        return {
            msg:'line'
        }
    },
    mounted(){
        this.drawLine();
        this.rainLine();
    },
    methods:{
        rainLine(){
            let chartRainfall = echarts.init(document.getElementById('chartRainfall'))
            app.title = '多 X 轴示例';
            var colors = ['#5793f3', '#d14a61', '#675bba'];
            let option = {
                color: colors,
                tooltip: {
                    trigger: 'none',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                legend: {
                    data:['2015 降水量', '2016 降水量']
                },
                grid: {
                    top: 70,
                    bottom: 50
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: colors[1]
                            }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return '降水量  ' + params.value
                                        + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                }
                            }
                        },
                        data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
                    },
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: colors[0]
                            }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return '降水量  ' + params.value
                                        + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                }
                            }
                        },
                        data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name:'2015 降水量',
                        type:'line',
                        xAxisIndex: 1,
                        smooth: true,
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                    },
                    {
                        name:'2016 降水量',
                        type:'line',
                        smooth: true,
                        data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                    }
                ]
            };
            chartRainfall.setOption(option);

        },
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('myChart'))
            let option={
                title:{text:'简单曲线图'},
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    // tooltip: {},
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'line',
                    stack: '总量',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'直接访问',
                    type:'line',
                    stack: '总量',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }]
            }
            // 绘制图表
            myChart.setOption(option);
        }
    }
}
</script>
<style lang='scss' scoped>

</style>
