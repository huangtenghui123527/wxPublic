<template>
    <div id="baiduMap">
        <div class="container" id="map1_container"><div id="allmap1" class="allmap"></div></div>
	    <div class="container" id="map2_container"><div id="allmap2" class="allmap"></div></div>
        <div class="container" id="map3_container"><div id="allmap3" class="allmap"></div></div>
	    <div class="container" id="map4_container">
            <div class="">hehe</div>
            <div id="allmap4" class="allmap"></div>
        </div>
        <div id="baidu_geo"></div>
    </div>
</template>
<script>
import axios from 'axios'
import $ from 'jquery'

export default {
    name:'BDMap',
    data(){
        return {
            msg:"百度地图"
        }
    },
    mounted(){
        //创建Map实例
        var map1 = new BMap.Map("allmap1");
        var map2 = new BMap.Map("allmap2",{minZoom:4,maxZoom:15}); //设置地图允许最大最小级别
        var map3 = new BMap.Map("allmap3");
        var map4 = new BMap.Map("allmap4");

        // 创建地图实例  
        var BJpoint = new BMap.Point(116.404, 39.915);                            //北京
        var SHpoint = new BMap.Point(121.474, 31.237);                            //上海
        var SZpoint = new BMap.Point(114.065989, 22.555933);                      //深圳
        var GZpoint = new BMap.Point(113.272866, 23.13959);                       //广州
        var pointA = new BMap.Point(116.484152, 39.9515546);
        var pointB = new BMap.Point(121.334799, 31.203141);
        var top_left_control=new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT})      //左上角,比例尺
        var top_left_navigation=new BMap.NavigationControl({                           //左上角,默认缩放平移控件
            anchor:BMAP_ANCHOR_TOP_LEFT,
            type:BMAP_NAVIGATION_CONTROL_LARGE,
            // enableGeolocation:true                                                  //定位属性报错
        })                          
        var top_right_navigation=new BMap.NavigationControl({
            anchor:BMAP_ANCHOR_TOP_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL});          //右上角,仅包含平移和缩放按键

        var mapType1=new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]}); //2d卫星地图
        var mapType2=new BMap.MapTypeControl({anchor:BMAP_ANCHOR_TOP_LEFT});                //左上角,默认地图控件
        var overView=new BMap.OverviewMapControl();                                         //默认缩略地图控件
        var overViewOpen=new BMap.OverviewMapControl({
            isOpen:true,anchor:BMAP_ANCHOR_BOTTOM_RIGHT})                                   //右下角,打开
        var ln=(map1.getDistance(BJpoint,pointA)).toFixed(2);
        // console.log(ln +'米');

        var geolocationControl = new BMap.GeolocationControl();         //添加定位控件
        var cr=new BMap.CopyrightControl({anchor:BMAP_ANCHOR_TOP_RIGHT}) //设置版权控件

        var bs=map2.getBounds();                       //获取可视区域
        // var bssw=bs.getSouthWest();                 //可视区域左下角
        // var bsne=bs.getNorthEast();                 //可视区域右上角
        //拖拽范围(测试无效)
        var b = new BMap.Bounds(new BMap.Point(121.474456, 31.237456),new BMap.Point(121.474456, 32.237));
        var size=new BMap.Size(10,20);                  //城市控件
        var marker=new BMap.Marker(new BMap.Point(116.404,39.915));     //点
        marker.setAnimation(BMAP_ANIMATION_BOUNCE);     //跳动的动画
        var polyline=new BMap.Polyline([BJpoint,pointA],                //定义折线
        {strokeColor:'blue',strokeWeight:6,strokeOpacity:0.5});
        var circle=new BMap.Circle(BJpoint,500,{                        //圆
            strokeOpacity:0.5,
            strokeWeight:2,
            strokeColor:'blue'
        })
        var pStart = new BMap.Point(116.392214,39.918985);              //矩形
        var pEnd = new BMap.Point(116.41478,39.911901);
        var rectangle = new BMap.Polygon([
            new BMap.Point(pStart.lng,pStart.lat),
            new BMap.Point(pEnd.lng,pStart.lat),
            new BMap.Point(pEnd.lng,pEnd.lat),
            new BMap.Point(pStart.lng,pEnd.lat)
        ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});  

        var sy=new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW,{
            scale:0.6,                      //图标缩放大小
            strokeColor:'#fff',             //矢量图标颜色
            strokeWeight:'2'                //线宽
        })
        var icons=new BMap.IconSequence(sy,'10','30');          //创建polylineduix对象
        var pois = [
            new BMap.Point(116.350658,39.938285),
            new BMap.Point(116.386446,39.939281),
            new BMap.Point(116.389034,39.913828),
            new BMap.Point(116.442501,39.914603)
        ];
        var polyline1 =new BMap.Polyline(pois, {
            enableEditing: false,//是否启用线编辑，默认为false
            enableClicking: true,//是否响应点击事件，默认为true
            icons:[icons],
            strokeWeight:'8',//折线的宽度，以像素为单位
            strokeOpacity: 0.8,//折线的透明度，取值范围0 - 1
            strokeColor:"#18a45b" //折线颜色
        });

        var polygon = new BMap.Polygon([
            new BMap.Point(116.387112,39.920977),
            new BMap.Point(116.385243,39.913063),
            new BMap.Point(116.394226,39.917988),
            new BMap.Point(116.401772,39.921364),
            new BMap.Point(116.41248,39.927893)
        ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
        
        
        // var points=[BJpoint,SHpoint,GZpoint];
        // var curve=new BMap.CurveLine(points,{strokeColor:'red',strokeWeight:3,strokeOpacity:0.5});       //创建弧线(报错BMap.CurveLine不是构造函数)

        // polyline1.enableEditing();
        // polygon.enableEditing();                 //面编辑报错

        //创建自定义图标
        var myIcon=new BMap.Icon('http://lbsyun.baidu.com/jsdemo/img/fox.gif',new BMap.Size(300,157));
        var markerFox=new BMap.Marker(pointB,{icon:myIcon});
        markerFox.enableDragging();                     //图标可拖拽
        var opts={                                      //标注位置             
            position:SHpoint,
            offset:new BMap.Size(10,-20)
        }
        var label=new BMap.Label('大上海!',opts);        //标注内容
        label.setStyle({
            color:'red',
            fontSize:'12px',
            height:'20px',
            lineHeight:'20px',
        })

        var SZmarker=new BMap.Marker(SZpoint);
        var SZlabel=new BMap.Label('深圳市',{offset:new BMap.Size(10,-20)})
        SZmarker.setLabel(SZlabel);

        SZmarker.addEventListener('click',getAttr);
        var _this=this;
        function getAttr(){                            
            var p=marker.getPosition();                  //获取标签的经纬度的值
            _this.$message({
                type:'success',
                message:"position:"+p.lng+","+p.lat
            })
        }
        // 创建点坐标  
        map1.centerAndZoom(BJpoint, 15);                //初始化,根据经纬度设置中心点和地图级别
        map1.enableScrollWheelZoom();                //开启鼠标滚轮缩放
        map1.addControl(mapType1);
        map1.addControl(mapType2);
        map1.setCurrentCity('北京');                  //城市名
        map1.addControl(overView);
        map1.addControl(overViewOpen);
        map1.addOverlay(polyline);
        map1.addOverlay(marker);
        map1.addOverlay(circle);
        map1.addOverlay(rectangle);
        map1.addOverlay(polyline1); 
        map1.addOverlay(polygon); 


        // map1.centerAndZoom('深圳', 15);                //初始化,根据城市名设置和地图级别
        map2.centerAndZoom(SHpoint, 11);                //初始化,根据经纬度设置中心点和地图级别
        map2.enableScrollWheelZoom();                 //开启鼠标滚轮缩放
		map2.addControl(top_left_navigation);     
        map2.addControl(top_left_control);        
        map2.addControl(geolocationControl);            //定位控件
        map2.addControl(cr);            //版权控件
        cr.addCopyright({               //该设置无效
            id:1,
            content:"<a href='#' style='font-size:20px;background:yellow'>版权控件</a>",
            bounds:bs
        })
        map2.addOverlay(markerFox)
        map2.addOverlay(label)


        map3.centerAndZoom(SZpoint, 15);                //初始化,根据经纬度设置中心点和地图级别
        map3.addControl(top_right_navigation);
        map3.enableScrollWheelZoom();                 //开启鼠标滚轮缩放
        map3.disableDragging();                       //禁止拖拽(也可禁止点的拖拽)
        // map3.enabeInertialDragging();                       
        // map3.enableContinuousZoom();                       
        map3.addControl(new BMap.CityListControl({
            anchor:BMAP_ANCHOR_TOP_LEFT,
            offset:size
        }));
        map3.addOverlay(SZmarker)
        // map3.addOverlay(curve)                          //弧线


        map4.centerAndZoom(GZpoint, 15);                //初始化,根据经纬度设置中心点和地图级别
        map4.enableScrollWheelZoom();                 //开启鼠标滚轮缩放
        map4.addControl(top_right_navigation);        
    

        try{
            BMapLib.AreaRestriction.setBounds(map2,b);
        } catch(e){
            // alert(e);
        }
        setTimeout(() => {
            map4.panTo(new BMap.Point(113.019922,28.200))    // 3s后移动到长沙
            map2.setZoom(10)             //放大到10级
            map3.enableDragging();       //两秒后开启拖拽
        // map.enableInertialDragging();   //两秒后开启惯性拖拽
            // deletePoint();
        }, 3000);
        geolocationControl.addEventListener("locationSuccess", function(e){
            // 定位成功事件
            var address = '';
            address += e.addressComponent.province;
            address += e.addressComponent.city;
            address += e.addressComponent.district;
            address += e.addressComponent.street;
            address += e.addressComponent.streetNumber;
            alert("当前定位地址为：" + address);
        });
         geolocationControl.addEventListener("locationError",function(e){
            // 定位失败事件
            alert(e.message);

        });

        // html5定位
        // getLocation();
        function getLocation(){   
            if (navigator.geolocation){   
                navigator.geolocation.getCurrentPosition(showPosition,showError);   
            }else{   
                alert("浏览器不支持地理定位。");   
            }   
        }
        function showError(error){   
            switch(error.code) {   
                case error.PERMISSION_DENIED:   
                    alert("定位失败,用户拒绝请求地理定位");   
                    break;   
                case error.POSITION_UNAVAILABLE:   
                    alert("定位失败,位置信息是不可用");   
                    break;   
                case error.TIMEOUT:   
                    alert("定位失败,请求获取用户位置超时");   
                    break;   
                case error.UNKNOWN_ERROR:   
                    alert("定位失败,定位系统失效");   
                    break;   
            }   
        }
        function showPosition(position){   
            var lat = position.coords.latitude; //纬度   
            var lag = position.coords.longitude; //经度   
            // alert('纬度:'+lat+',经度:'+lag);
            var mk = new BMap.Marker(new BMap.Point(lag,lat));
            map3.addOverlay(mk);
            map3.panTo(new BMap.Point(lag,lat));
            var latlon = position.coords.latitude+','+position.coords.longitude;  
            ajaxpoint(latlon)
            // axios.get(url).then(res=>{
            //     console.log(res)
            //     // if(res.status==0){
            //     // }
            // }).catch(err=>{
            //     console.log(err)
            // })
        }

        // 定位不准
        // var geolocation = new BMap.Geolocation();
        //     geolocation.getCurrentPosition(function(r){console.log(r.point)
        //         if(this.getStatus() == BMAP_STATUS_SUCCESS){
        //             var mk = new BMap.Marker(r.point);
        //             map3.addOverlay(mk);//标出所在地
        //             map3.panTo(r.point);//地图中心移动
        //             //alert('您的位置：'+r.point.lng+','+r.point.lat);
        //             lng=r.point.lng;
        //             lat=r.point.lat;
        //             var point = new BMap.Point(r.point.lng,r.point.lat);    //用所定位的经纬度查找所在地省市街道等信息
        //             var gc = new BMap.Geocoder();
        //             gc.getLocation(point, function(rs){
        //                var addComp = rs.addressComponents;
        //                console.log(rs.address);//地址信息
        //                //myKeys = [rs.address];     当有其他信息时，可以定义成数组
        //                 myKeys = rs.address;
        //                //alert(myKeys);         //弹出所在地址
        //                var local = new BMap.LocalSearch(map, {
        //                    renderOptions:{map:map,panel:"r-result"},
        //                    pageCapacity:3
        //                 });
        //                 local.searchInBounds(myKeys, map.getBounds());
        //             });
        //         }else {
        //             alert('failed'+this.getStatus());
        //         }        
        //     },{enableHighAccuracy: true})


        function ajaxpoint(latlon){
            var url = "http://api.map.baidu.com/geocoder/v2/?ak=QUycINkGenOe3uqQspAb99oZ5mFm21AO&callback=renderReverse&location="+latlon+"&output=json&pois=0";   
                $.ajax({    
                    type: "GET",    
                    dataType: "jsonp",    
                    url: url,   
                    beforeSend: function(){   
                        $("#baidu_geo").html('正在定位...');   
                    },   
                    success: function (json) {    
                        if(json.status==0){   
                            console.log(json)
                            $("#baidu_geo").html(json.result.formatted_address);   
                        }   
                    },   
                    error: function (XMLHttpRequest, textStatus, errorThrown) {    
                        $("#baidu_geo").html(latlon+"地址位置获取失败");    
                    }   
            });           
        }
        // 随机添加10个标注再删除其中一个
        var bounds=map3.getBounds();
        var sw=bounds.getSouthWest();
        var ne=bounds.getNorthEast();
        var lngSapn=Math.abs(sw.lng-ne.lng);
        var latSapn=Math.abs(ne.lat-sw.lat);

        for(let i=0;i<10;i++){
            let Bpoint=new BMap.Point(sw.lng+lngSapn*(Math.random()*0.7),ne.lat-latSapn*(Math.random()*0.7));
            let Blabel=new BMap.Label('id='+i,{offset:new BMap.Size(20,-10)});
            addMarker(Bpoint,Blabel);
        }
        function addMarker(Bp,Bl){
            let Bmarker=new BMap.Marker(Bp);
            map3.addOverlay(Bmarker);
            Bmarker.setLabel(Bl);
        }

        function deletePoint(){
            let allOverlay=map3.getOverlays();                          //获取所有的图标
            for(let i=0;i<allOverlay.length-1;i++){
                if(allOverlay[i].getLabel().content=='id=1'){           //每个图标的内容
                    map3.removeOverlay(allOverlay[i]);
                    return false;
                }
            }
        }
    },
    methods:{
    }
}
</script>
<style lang="scss">
    #baiduMap{
        height: 900px;
        .container{
            height: 48%;
            width: 49%;
            // background: #;
            float: left;
            position: relative;
            padding: 5px;
            border: 1px solid #efefef;
            .allmap{
                height: 100%;
            }
        }
        #map1_container{
            padding-bottom: 10px;
        }
    }
</style>
