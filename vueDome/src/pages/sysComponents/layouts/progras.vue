<template>
    <div id="tool">
        <div class="titleH">
            <h2>进度条-定:</h2>
            <div class="progress progress-striped active">
                <div class="progress-bar progress-bar-success" role="progressbar"
                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                    style="width: 40%;">
                    <span class="sr-only">40% 完成</span>
                </div>
            </div>
        </div>
        <div class="titleH">
            <h2>进度条-动:</h2>
            <div class="progress progress-striped active">
                <div class="progress-bar progress-bar-success progress-bg-green" role="progressbar"
                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                    :style="'width:'+wl+'%;'">
                    <span class="sr-only">40% 完成</span>
                </div>
            </div>
        </div>
        <div class="titleH">
            <h2>进度条-堆叠:</h2>
            <div class="progress">
                <div class="progress-bar progress-bar-success" role="progressbar"
                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                    style="width: 40%;">
                    <span class="sr-only">40% 完成</span>
                </div>
                <div class="progress-bar progress-bar-success progress-bar-info" role="progressbar"
                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                    style="width: 30%;">
                    <span class="sr-only">30% 完成（信息）</span>
                </div>
                <div class="progress-bar progress-bar-success progress-bar-warning" role="progressbar"
                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                    style="width: 30%;">
                    <span class="sr-only">30% 完成（警告）</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'progra',
    data () {
        return {
            msg:'工具',
            wl:40
        }
    },
    mounted(){
        let _this=this;
        let i=0;
        setInterval(function(){
            // _this.wl++;
            if(++i%2){
                _this.wl=100;
            }else{
                _this.wl=0
            }
        },1000)
    }
}
</script>
<style lang='scss' scopde>
        @keyframes progress-bar-stripes{
            from {background-position: 0 0; }
            to {background-position: 40px 0; }
        }
        /* Firefox */
        @-moz-keyframes progress-bar-stripes{
            from {background-position: 0 0; }
            to {background-position: 40px 0; }
        }
        /* Safari 和 Chrome */
        @-webkit-keyframes progress-bar-stripes {
            from {background-position: 0 0; }
            to {background-position: 40px 0; }
        }
        /* Opera */
        @-o-keyframes progress-bar-stripes {
            from {background-position: 0 0; }
            to {background-position: 40px 0; }
        }

    #tool{
        width: 100%;
        height: 100%;
        .titleH{
            width: inherit;
            .progress{
                width: inherit;
                height: 20px;
                margin-bottom: 20px;
                overflow: hidden;
                background-color: #f5f5f5;
                border-radius: 4px;
                .progress-bar{
                    float: left;
                    width: 0;
                    height: 100%;
                    font-size: 12px;
                    line-height: 20px;
                    color: #fff;
                    text-align: center;
                    background-color: #337ab7;
                    border-radius: 4px;
                    -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
                    box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
                    -webkit-transition: width .6s linear;
                    -o-transition: width .6s linear;
                    transition: width .6s linear;
                    background-size: 40px 40px;
                }
                .progress-bar-success{
                    background-image: -webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
                    background-image: -o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
                    background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
                    -webkit-animation: progress-bar-stripes 2s linear infinite;
                    -o-animation: progress-bar-stripes 2s linear infinite;
                    animation: progress-bar-stripes 2s linear infinite;
                }
                .progress-bg-green{
                    background-color: #5cb85c;
                }
                .progress-bar-info{
                    background-color: #5bc0de;
                }
                .progress-bar-warning{
                    background-color: #f0ad4e;
                }
            }

        }
    }
</style>
