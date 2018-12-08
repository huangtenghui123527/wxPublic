<template>
    <div class="expTable">
        <h2>{{msg}}</h2>
        	<el-col :span="24" class="toolbar roleTool">
			<el-form :inline="true" >
				<div class="queryTool" >
					<el-form-item >
						<el-input  ref="Ipfocus" clearable placeholder="请输入行政通道名" ></el-input>
					</el-form-item>
					<el-form-item v-show="btnKeys.Query">
						<el-button type="primary"  class="keyBtn">查询</el-button>
					</el-form-item>
					<el-form-item  v-show="btnKeys.Create">
						<el-button type="primary"  class="keyBtn">新增通道</el-button>
					</el-form-item>
					<el-form-item v-show="btnKeys.Allot">
						<el-button type="primary"  class="keyBtn">分配用户</el-button>
					</el-form-item>
					<el-form-item v-show="btnKeys.Query0">
						<el-button type="primary"  class="keyBtn">分配用户</el-button>
					</el-form-item>
					<el-form-item v-show="btnKeys.Allot0">
						<el-button type="primary"  class="keyBtn">分配用户</el-button>
					</el-form-item>
					<el-form-item v-show="btnKeys.Create0">
						<el-button type="primary"  class="keyBtn">分配用户</el-button>
					</el-form-item>
				</div>
			</el-form>
		</el-col>
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    </div>
</template>

<script>
import {Table} from '@/api/api.js'
export default {
    name:'expTable',
    data() {
        return {
            msg:'expTable',
            btnKeys:{
              Query:0,
              Create:0,
              Allot0:0,
              Create0:0,
              Allot:0,
              Query0:0,
            },
            tableData: [{
            date: '2016-05-02',
            name: '李思',
            address: '撒打发公司的 1518 弄'
          }, {
            date: '2016-05-04',
            name: '李思',
            address: '撒打发公司的 1517 弄'
          }, {
            date: '2016-05-01',
            name: '李思',
            address: '撒打发公司的 1519 弄'
          }, {
            date: '2016-05-01',
            name: '李思',
            address: '撒打发公司的 1519 弄'
          }, {
            date: '2016-05-01',
            name: '李思',
            address: '撒打发公司的 1519 弄'
          }, {
            date: '2016-05-01',
            name: '李思',
            address: '撒打发公司的 1519 弄'
          }, {
            date: '2016-05-03',
            name: '李思',
            address: '撒打发公司的 1516 弄'
          }]
        }
    },
    mounted(){
      Table().then(res=>{
        // console.log(res);
        this.btnKeys=res;
      }).catch(err=>{
        console.log(err)
      })
    }
}
</script>

<style lang="scss" scoped>
  .expTable{
    margin: 10px 20px;
  }
</style>
