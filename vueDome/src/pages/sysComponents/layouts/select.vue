<template>
    <div class="select">
        <h2>{{msg}}</h2>
        <div class="selContent">
            <div class="exaSelect">
                <el-input v-model="crrentInput" placeholder="请输入" clearable></el-input>
                <el-select v-model="valueSelect" placeholder="请选择" clearable @change="changeSelect">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" ></el-option>
                </el-select>
            </div>
            <el-tabs v-model="activeName" @tab-click="handleClick" class="a">
                <el-tab-pane label="用户管理" name="first" class="b">用户管理</el-tab-pane>
                <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
        <select>
            <option value ="volvo">Volvo</option>
            <option value ="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>

    </div>
</template>
<script>
import {Select} from '@/api/api.js'
export default {
    name:'mySelect',
    data(){
        return {
            msg:'下拉选择',
            activeName: 'second',
            valueSelect: '',
            crrentInput:'',
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            selectArm:[]
        }
    },
    methods:{
        //请求数据
        getSelect(){
            Select().then(res=>{
                this.selectArm=res;
                // console.log(this.selectArm);
                this.crrentInput=this.selectArm[0].label
                this.valueSelect=this.selectArm[0].label
            }).catch(err=>{
                console.log(err)
            })
        },
        //select变化
        changeSelect(val){
            console.log(this.selectArm);
            let temp='';
            for(let i in this.selectArm){
                if(this.selectArm[i].value==val){
                    temp=this.selectArm[i].label;
                    break;
                }
            }
            if(temp){
                this.crrentInput=temp;
            }else{
                this.crrentInput='其他';
            }
        },
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    mounted(){
        this.getSelect();
    }
}
</script>
<style lang="scss" scoped>
    .el-tabs__header{
        margin: 0 !important;
    }
    .select{
        width: 100%;
        padding: 10px 20px;
        h2{
            font-size: 18px;
            font-weight: bold;
        }
        .selContent{
            margin-top: 10px;
            width: 100%;
            .exaSelect{
                .el-input{
                    width: 300px;
                }
            } 
            .el-tabs__active-bar{
                background-color:red;
            }
        }
        select{
            option:hover{
                background-color:red;
            }
        }
    } 
</style>


