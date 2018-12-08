<template>
    <div class="search">
        <h2>search</h2>
          <el-table
          :data="tableData5"
          :row-key="getRowKeys"
          :expand-row-keys="expands"
          @row-click="toggleRowExpansion"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.howLong }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.Pack }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.carNum }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="商品名称"
            prop="lockTime">
          </el-table-column>
          <el-table-column
            label="商品名称"
            prop="timeH" >
          </el-table-column>
          <el-table-column
            label="商品名称"
            prop="timeN" >
          </el-table-column>
          <el-table-column
            label="描述"
            prop="note" width="280">
          </el-table-column>
          <el-table-column
            label="操作" width="200">
            <template slot-scope="scope">
              <el-button type="primary" >导出</el-button>
              <el-button type="primary">打印</el-button>
            </template>
          </el-table-column>

        </el-table>
    </div>
</template>

<script>
import {Table} from '@/api/api'
export default {
    name:'pageSearch',
    data(){
        return {
          tableData5: [],
          getRowKeys(row) {
            return row.id;
          },
          // 要展开的行，数值的元素是row的key值
          expands: [],
        }
    },
    mounted(){
      this.getTable();
    },
    methods:{
      getTable(){
        Table().then(res=>{
          this.tableData5=res.arr
          // console.log(res)
        }).catch(err=>{
          console.log(err)
        })
      },
      toggleRowExpansion(row){
        if(this.expands[0]!=row.id){
          this.expands = [];
          this.expands.push(row.id);
        }else{
          this.expands = [];
        }

        //   this.expands = [];
        // if(this.expands[0]!=row.id){
        //   this.expands.push(row.id);
        // }

      }

    },
}
</script>
