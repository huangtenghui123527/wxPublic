<template>
    <div id="map1" class="map-container"></div>
</template>
<script>
/* eslint-disable */
// import amap from '@/common/js/amap'
var map,placeSearchOptions,self
import AMap from 'AMap'
var poisArrCopy = [];
var numIndex = 0;
var num=[];
export default {
    data(){
        self=this
        return{
        }
    },
    mounted() {
        this.init()
     this.searchData(this.callback)
    },
    methods: {
        init(){
            // map = new AMap.Map('map1', amap.defaultOption)
            // AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
            //     map.addControl(new AMap.ToolBar())
            //     map.addControl(new AMap.Scale())
            // })
            map=new AMap.Map('map1', {
                center: [113.997428, 22.55923],
                resizeEnable: true,
                zoom: 13
            });
            AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
                map.addControl(new AMap.ToolBar())
                map.addControl(new AMap.Scale())
            })
        },
        searchData(callback){
            let keyWords = ['地铁线路', '大型购物广场', '三甲医院', '学校']
            let distance = [1000, 3000, 3000, 3000]
            // …………………………………………………………周边分类…………………………………………………………………………………………………………
            placeSearchOptions = { // 构造地点查询类
                pageSize: 10,
                pageIndex: 1,
                city: '021', // 城市
                map: map,
                visible: false
            }
            AMap.service('AMap.PlaceSearch', function () {
                map.clearMap()  // 清除地图覆盖物
                let placeSearch = new AMap.PlaceSearch(placeSearchOptions)
                for (let i = 0; i < keyWords.length; i++) {
                    placeSearch.searchNearBy(keyWords[i], [121.44343879031237, 31.207570983863118], distance[i], callback)
                }
            })
            return callback
        },
        callback(status, result){
            let _this=this;
            var promise = new Promise(function (resolve, reject) {
                let _result = result
                const pois = _result.poiList.pois
                poisArrCopy = pois.copyWithin(0);
                // console.log(poisArrCopy)
                num.push(poisArrCopy);
                resolve()
            })
            promise.then(function () {
                // return self.demo()
            })
        },
        demo(){
            numIndex++
            if (numIndex > 4) {
                if (num.length > 0) {
                    return map.clearMap()  // 清除地图覆盖物
                }
            }
        },

    }
}
</script>

<style scoped>
.map-container{
    width: 100%;
    height: 100%;
}
</style>