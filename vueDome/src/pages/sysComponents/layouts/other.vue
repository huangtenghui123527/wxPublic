<template>
    <div id="other">
       <div class="container">
            <h2>徽章</h2>
            <p><a href="javascript:;">收件箱 <span class="badge">21</span></a></p>
        </div>
       <div class="container">
            <h2>change实现弹窗提示</h2>
            <el-select v-model="value" placeholder="请选择" @change="selectCapa">
                <el-option v-for="item in myOptions" :key="item.value" :label="item.label" :value="item.value"> 
                </el-option>
            </el-select>        
            <!-- <el-select  v-model="value"  placeholder="请选择" @click="valClick(this)">
                <el-option data_val='0' label="出场控制" :value="0"></el-option>
                <el-option data_val='1' label="进场控制" :value="1"></el-option>
            </el-select>  -->
             <select id="inOrout" v-model="value" @change="valClick">
                <option value="0" >出场控制</option>
                <option value="1" >进场控制</option>
            </select>
        </div>

        <div id="app" >
            <button @click="downloadExl">导出</button>
            <div id="tableId">
                 <table class="table table-bordered" style="min-width: 100%;">
                   <thead>
                        <tr>
                            <th>#</th>
                            <th v-for="(item,index) in Object.keys(jsonData[0])" :key="index">
                                {{item}}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row,index) in jsonData" :key="index">
                            <th scope="row">{{index}}</th>
                            <td v-for="col in Object.keys(jsonData[0])" > {{(row)[col]}}</td>
                        </tr>
                    </tbody>
                </table> 
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
var XLSX = require('xlsx')
var FileSaver = require('file-saver')

function valClick(val){
    console.log(val)
}

export default {
    name:'other',
    data (){
        return{
            msg:'其他类',
            value:'',
            oldVal: '1',
            curVal:'',
            data_val:'',
            returned: false,
            myOptions:'',
            jsonData: [{
                    "姓名": "小杨",
                    "联系电话": "021-33829544",
                    "家庭地址": "浦东新区金桥镇五莲路1706号"
                }]
        }
    },
    mounted(){
        $(".inOrout").bind('onchange',function(){
            console.log($(this));
            console.log($(this).val());
            // if($(this).val()==0){
            //     $(this).parents(".moneycheck").siblings(".moneycheck1").css("visibility","hidden");
            // }if($(this).val()==1){
            //     $(this).parents(".moneycheck").siblings(".moneycheck1").css("visibility","visible");
            // }
        })
    },
    created() {
        let result;
        let promise = new Promise ((resolve,reject)=>{
        sessionStorage.setItem("user", JSON.stringify([{
            value: "test1",
            label: 'A0100928',
        }, {
            value: "test2",
            label: 'AZ100928'
        }, {
            value: "test3",
            label: 'AF1003928'
        }]))
        result = JSON.parse(sessionStorage.getItem("user"))
        if(result) {
            resolve(result)
        }else {
            reject(result)
        }
        })
        promise.then((val)=>{
        this.myOptions = val
        },(val)=>{
        // console.log(1)
        })
        // console.log(JSON.parse(sessionStorage.getItem("user")))
    },
    watch:{
        value:{
            handler(curVal,oldVal){
                this.oldVal = oldVal
                this.curVal = curVal
        　　　},
        },
    },
    methods:{
        selectCapa(){
            // console.log(this.returned);

            // if(! this.returned){
            // this.returned = false
            // this.value = this.oldVal

                this.$confirm('确定要切换身份, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    // this.$message({
                    //     type: 'success',
                    //     message: '切换身份成功!'
                    // });
                this.value = this.curVal
                // this.label=this.curVal
                }).catch(() => {
                // this.$message({
                //     type: 'info',
                //     message: '已取消切换身份'
                // })
                this.returned = true
                this.value = this.oldVal
                //this.$set(this.value,oldVal)
                // return oldVal;

                })   
            // }else{
            //     this.returned = false
            // }

        },
        valClick(val){
            console.log(val)
        },
        downloadExl() {
            let wb = XLSX.utils.table_to_book(document.getElementById('tableId')),
                wopts = {
                    bookType: 'xlsx',
                    bookSST: false,
                    type: 'binary'
                },

                wbout = XLSX.write(wb, wopts);
                // console.log(wbout)
            FileSaver.saveAs(new Blob([this.s2ab(wbout)], {
                type: "application/octet-stream;charset=utf-8"
            }), "个人简介表.xlsx");
        },
        s2ab(s) {
            if (typeof ArrayBuffer !== 'undefind') {
                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
                // return buf;
            } else {
                var buf = new Array(s.length);
                for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
                // return buf;
            }
            console.log(buf)
        }
    }
}
</script>

<style lang='scss' scoped>
    #other{
        width: 100%;
        .container{
            width: inherit;
            a{
                color: #23527c;
                text-decoration: none;
                .badge{
                    background: #f00;
                    padding: 5px 8px;
                    border-radius: 10px;
                    color: white;
                    display: inline-block;
                }
            }
            a:hover{
                text-decoration: underline;
            }
        }
    }
</style>

