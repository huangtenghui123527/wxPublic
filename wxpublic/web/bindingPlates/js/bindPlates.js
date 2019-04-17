/**
 * Created by zhengxj on 18-9-5.
 */
/**
 * 添加车牌
 */
function sendAdd() {
    var cartype;
    if($(".car_type img").attr("src")==='../../static/img/bindPlates/check@2x.png'){
        cartype="small";
    }else{
        cartype="large"
    }
    var carnumber= getCarNumber();
    var openid=$('#openid').val();
    var smallid=$('#smallid').val();
    if(carNumberSearch(carnumber)){
        $.ajax({
            type: "post",
            url: interfaceIP+'/webchatPark/page/bindCarNumber',
            dataType: "json",
            data: JSON.stringify(getSignParams({
                carnumber:carnumber,
                openid:openid,
                type:'addcar',
                carType:cartype,
                smallid:smallid
            })),
            contentType: "application/json;charset=utf-8;",
            success: function(data, textStatus) {
                if(data.flag==1){
                    showAll();
                    for(var i=0;i<3;i++){
                        if($("#chkc"+(i+1)+"").text() !== null){
                            $("#chkc"+(i+1)+"").parents(".plate_box").show();
                        }
                    }
                    alertDialog("添加车牌成功！")
                }else{
                    if(data.msg){
                        alertDialog(data.msg)
                    }else{
                        alertDialog("系统繁忙,请稍后再试！")
                    }
                }
            }
        });
    }


};


/**
 * 删除车牌
 */
function sendDelete(obj){
    var that = $(obj);
    var carNumber = that.siblings(".car").text();
    alertKnown("确定删除车牌?",carNumber)
}
function alertKnown(msg,car){
    console.log(car);
    var sHeight = document.documentElement.scrollHeight;
    var sWidth = document.documentElement.scrollWidth;
    var wHeight = document.documentElement.clientHeight;

    //遮罩层
    var oMask = document.createElement("div");
    oMask.id = "alert";
    oMask.style.width = sWidth + "px";
    oMask.style.height = wHeight + "px";
    document.body.appendChild(oMask);

    var square = document.createElement("div");
    square.id = "square";
    square.innerHTML = "<div class='sTitle'>温馨提示</div><div class='sContent'>"+msg+
        "</div><div id='line'></div><div id='cancel'>取消</div><div id='sKnow'>确定</div>";
    document.body.appendChild(square);

    var dHeight = square.offsetHeight;
    var dWidth = square.offsetWidth;

    square.style.left = (sWidth-dWidth)/2 + "px";
    square.style.top = (wHeight-dHeight)/3 + "px";

    //点击关闭按钮
    var  oClose1 = document.getElementById("cancel");
    var  oClose2 = document.getElementById("sKnow");

    oClose1.onclick = function(){
        document.body.removeChild(square);
        document.body.removeChild(oMask);
    }
    oClose2.onclick = function(){
        var openid=$('#openid').val();
        var smallid=$('#smallid').val();
        $.ajax({
            type: "post",
            url: interfaceIP+'/webchatPark/page/removePlate',
            dataType: "json",
            data: JSON.stringify(getSignParams({
                carnumber:car,
                openid:openid,
                smallid:smallid
            })),
            contentType: "application/json;charset=utf-8;",
            success: function(data, textStatus) {
                document.body.removeChild(square);
                document.body.removeChild(oMask);
                if(data.flag==true){
                    showAll()
                    alertDialog("删除车牌成功！");

                }else{
                    if(data.msg){
                        alertDialog(data.msg)
                    }else{
                        alertDialog("系统繁忙,请稍后再试！")
                    }
                }
            }
        });
    }
}





//遍历调用同一个键盘
function carText(index){
    $(".carNum").eq(index).css("display","block");
}

/**
 * 车牌号初始化
 */
$(document).ready(function(){
    chosecartype();
    var openid = getQueryString("openid");
    var smallid = getQueryString("smallid");
    $("#openid").val(openid);
    $("#smallid").val(smallid);
    document.oncontextmenu = function(e){
        e.preventDefault();
    };
    showAll();
    hideButton();

    //输入框聚焦或失焦，键盘的消失和隐藏
    $(".carN1").focus(function  () {
        $('.softkeys').css("display","block");
    });
    $(".carN1").blur(function  () {
        $('.softkeys').css("display","none");
    });
    $(".carN").each(function(index){
        $(this).focus(function(){
            carText(index);
        })
    });
    $(".carN").blur(function  () {
        $(".carNum").css("display","none");
    });
});
//选择车牌类型
function chosecartype() {
    $(".car_type").click(function () {
        $(".car_type img").attr("src","../../static/img/bindPlatescheck@2x.png");
        $(".car_type1 img").attr("src","../../static/img/bindPlates/uncheck@2x.png")
    });
    $(".car_type1").click(function () {
        $(".car_type1 img").attr("src","../../static/img/bindPlates/check@2x.png");
        $(".car_type img").attr("src","../../static/img/bindPlates/uncheck@2x.png")
    })
}
function showAll(){
    var openid=$('#openid').val();
    var smallid=$('#smallid').val();
//        var mycard=$('#mycard').val();
//        if(mycard!='undefined'){
//            alertDialog(mycard)
//        }
    var data = {
        openid:openid,
        smallid:smallid
    };

    if(smallid&&openid){
        $.ajax({
            type: "post",
            url: interfaceIP+'/webchatPark/page/viewcarnumber',
            dataType: "json",
            data: JSON.stringify(getSignParams(data)),
            contentType: "application/json;charset=utf-8;",
            success: function(data, textStatus) {
                if(data.data){
                    $(".show_plate").show();
                    if(data.data.length ===0){
                        $(".show_plate").hide();
                    }
                    for(var i=0;i<data.data.length;i++){
                        $("#chkc"+(i+1)+"").text('');
                        if(data.data[i].plateNumber){
                            $("#chkc"+(i+1)+"").text(data.data[i].plateNumber);
                            if(data.data[i].type==="small"){
                                $("#cartype"+(i+1)+"").text("小型车辆")
                            }else{
                                $("#cartype"+(i+1)+"").text("大型车辆")
                            }
                        }else{
                            $("#chkc"+(i+1)+"").parents(".plate_box").hide();
                        }
                        if(data.data.length===1){
                            $("#chkc"+(data.data.length+1)+"").parents(".plate_box").hide();
                            $("#chkc"+(data.data.length+2)+"").parents(".plate_box").hide()
                        }
                        if(data.data.length===2){
                            $("#chkc"+(data.data.length+1)+"").parents(".plate_box").hide();
                        }
                    }
                }else{
                    $(".show_plate").hide();
                    if(data.msg){
                        if(data.msg==='暂无数据'){
                            return;
                        }else{
                            alertDialog(data.msg)
                        }
                    }else{
                        alertDialog("初始化信息失败,请稍后再试！")
                    }
                }
            }
        });

    }
}