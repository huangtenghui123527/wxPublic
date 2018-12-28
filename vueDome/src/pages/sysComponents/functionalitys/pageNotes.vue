<template>
    <div id="pageNotes">
        <div class="tabTitle">
            <ul class="clear">
                <li v-for="(itme,index) in data" :key="itme.id" :class="{red:isRed==itme.id}" @click="handleClick(itme.id,index)">
                    {{itme.title}}
                </li>
            </ul>
            <div class="tabConter" :class="{isShow:isRed=='01'}">table分页01</div>
            <div class="tabConter" :class="{isShow:isRed=='02'}">table分页02</div>
            <div class="tabConter" :class="{isShow:isRed=='03'}">table分页03</div>
            <div class="tabConter" :class="{isShow:isRed=='04'}">table分页04</div>
            <div class="tabConter" :class="{isShow:isRed=='05'}">table分页05</div>
            <div class="tabConter" :class="{isShow:isRed=='06'}">table分页06</div>
            <div class="tabConter" :class="{isShow:isRed=='07'}">table分页07</div>
            <div class="tabLine" :style="{left:lineLeft}"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'pageNotes',
    data () {
        return {
            isRed:'01',
            lineLeft:'0px',
            data:[{
                id:'01',
                title:'table分页01'
            },{
                id:'02',
                title:'table分页02'
            },{
                id:'03',
                title:'table分页03'
            },{
                id:'04',
                title:'table分页04'
            },{
                id:'05',
                title:'table分页05'
            },{
                id:'06',
                title:'table分页06'
            },{
                id:'07',
                title:'table分页07'
            },]
        }
    },
    mounted(){
    },
    methods:{
        handleClick(id,index){
            this.isRed=id;
            this.lineLeft=index*100+'px';
        }
    }

}
</script>
<style  lang="scss">
    @function double($sn){ //SCSS允许自定义函数
        @return $sn;
        // @return paseint($sn)-20+'px';
    }
    #pageNotes{
        height: 100%;
        .tabTitle{
            height: 100%;
            position: relative;
            ul{
                width: 100%;
                li{
                    border: 1px solid #333;
                    float: left;
                    padding: 10px;
                    position: relative;
                    margin-left:-1px;
                    cursor: pointer;
                    &:hover{
                        color: red
                    }
                }
                .red{
                    color: red 
                }
            }
            .tabConter{
                height: calc(100px + 100px);
                width: 100%;
                display: none;
                color: black;
                background-color: #333
            }
            .isShow{
                display: block;
            }

            .tabLine{
                width: 100px;
                height: 2px;
                background-color: red;
                position: absolute;
                top: 45px;
                left: 0px;
                transition:all 0.3s;
            }

        }
    }
</style>
