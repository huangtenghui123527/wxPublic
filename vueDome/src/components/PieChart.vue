<template>
<div class="container">
    <p :id="id" :option="option"></p>
</div>
</template>
<script>
import HighCharts from 'highcharts'
export default {
    props: {
        id: {
            type: String
        },
            //option 是图表的配置数据
        option: {
            type: Object
        }
    },
    mounted() {
        console.log(this.id);
        HighCharts.chart(this.id, this.option)
    }
}
</script>
 
<style scoped>
/* 容器 */   
.container {
width: 1000px;
height: 550px;
}
</style>