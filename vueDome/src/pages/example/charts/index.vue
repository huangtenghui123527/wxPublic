<template>
	<div class="AllCharts">
		<h2>图表</h2>
		<div class="echarts-content">
		<div class="chart-head">		         	 	
					<p @click="echartShow">
						<strong id="strong">课程分布图</strong>
						<em v-if="echartBtn==false">（部门统计，岗位统计，人员统计，分类统计，类型统计）</em>
						<i :class="{'el-icon-arrow-down':echartBtn==false,'el-icon-arrow-up':echartBtn}"></i>
					</p>
					</div>
					<div class="chart-main" id="chart-main">
					<div class="chart-main-left">
						<div v-show="echartNum==1" id="departmentChart" :style="{width: '500px', height: '215px',float:'left',borderRight:'1px solid #e4e4e4'}"></div>
						<div v-show="echartNum==1" id="postChart" :style="{width: '500px', height: '215px',float:'left',marginLeft:'30px'}"></div>
						<div v-show="echartNum==2" id="personnelChart" :style="{width: '500px', height: '215px',float:'left',borderRight:'1px solid #e4e4e4'}"></div>
						<div v-show="echartNum==2" id="classifyChart" :style="{width: '500px', height: '215px',float:'left',marginLeft:'30px'}"></div>
						<div v-show="echartNum==3" id="fileTypeChart" :style="{width: '1060px', height: '215px'}"></div>
					</div>
					<div class="chart-main-right">
							<el-tooltip class="item" effect="dark" content="部门，岗位" placement="right">
							<span :class="{spanActive:echartNum==1}" @click="echartIsShow('1')"></span>
					</el-tooltip>
						<el-tooltip class="item" effect="dark" content="人员，分类" placement="right">
							<span :class="{spanActive:echartNum==2}" @click="echartIsShow('2')"></span>
					</el-tooltip>
						<el-tooltip class="item" effect="dark" content="类型" placement="right">
							<span :class="{spanActive:echartNum==3}" @click="echartIsShow('3')"></span>
					</el-tooltip>		         	 		
					</div>
		</div>
    </div>
	</div>
  
</template>
<script type="text/javascript;" src="./charts.js"></script>
<style lang="scss" scoped>
.AllCharts{
  margin: 10px 20px;
  h2{
    font-size: 18px;
    font-weight: bold;
  }
}
.echarts-content{
	width:100%;
	min-height:78px;
	max-height:300px;
	background:#fff;
	-webkit-box-shadow: 0 0 15px rgba(0,0,0,.1);
  	-moz-box-shadow: 0 0 15px rgba(0,0,0,.1);
	box-shadow: 0 0 15px rgba(0,0,0,.1);	
 	padding:0 30px;
  	margin-top: 10px;
}
.echarts-content .chart-head{
	height:78px;
	width:100%;	
	padding-top:30px;
	
}
.echarts-content .chart-head p{
	display:inline-block;
	height:21px;
	width:100%;
	cursor:pointer;
	text-align:center;
	
}
.echarts-content .chart-head p strong{
	font-weight:normal;
	font-size:16px;
	color:#999;
}
.echarts-content .chart-head p em{
	display:inline-block;
	font-style:normal;
	font-size:14px;
	color:#999;
}
.echarts-content .chart-head p i{
	display:inline-block;
	color:#e4e4e4;
	font-size: 14px;
	margin-left:10px;
	
}
.echarts-content .chart-main{
	width:100%;
	height:222px;	
	position: relative;  
	overflow: hidden;
    -webkit-transition: height 0.5s;
    -moz-transition: height 0.5s;
    -o-transition: height 0.5s;
     transition: height 0.5s;
}
.echarts-content .chart-main .chart-main-left{
	width:calc(100% - 20px);
	height:100%;
	float:left;
}
.echarts-content .chart-main .chart-main-right{
	width:20px;
	height:100%;
	float:right;
	padding-top:50px;
}
.echarts-content .chart-main .chart-main-right span{
	display:inline-block;
	width:12px;
	height:12px;
	background:#e4e4e4;
	border-radius:100%;
	-moz-border-radius: 100%;
	-webkit-border-radius: 100%;
	cursor:pointer;
}
.echarts-content .chart-main .chart-main-right span:hover{
	background:#0188fd;
}
.echarts-content .chart-main .chart-main-right .spanActive{
	background:#0188fd;
}

</style>