/**
 * Created by zhengxj on 18-9-5.
 */
var tel = getQueryString("tel");
var balance = getQueryString("balance");
var openid = getQueryString("openid");
$.ajax({
    type: "get",
    url: interfaceIP+"/webchatPark/page/recharge_new",
    data: getSignParams({openid: openid}),
    dataType: "json",
    contentType: "application/json;charset=utf-8;",
    success: function(data){
        data.balance=parseFloat(data.balance).toFixed(2);
        balance=parseFloat(balance).toFixed(2);
        if(data.flag===1){
            var content = `<p>手机号码<span>${tel}</span></p><p>账户余额<span class="use_money">${data.balance}</span>元</p>`;
            $(".re_money").append(content);
            $("#openid").val(openid);
        }else{
            alert("网络链接失败,请刷新重试!");
            var content = `<p>手机号码<span>${tel}</span></p><p>账户余额<span class="use_money">${balance}</span>元</p>`;
            $(".re_money").append(content);
            $("#openid").val(openid);
        }
    },
    error:function(err){
        alert("网络链接失败,请刷新重试!");
        var content = `<p>手机号码<span>${tel}</span></p><p>账户余额<span class="use_money">${balance}</span>元</p>`;
        $(".re_money").append(content);
        $("#openid").val(openid);
    }
});
$(function(){


});
//禁止安卓手机长按出现浏览器打开
document.oncontextmenu = function(e){
    e.preventDefault();
};
$("#money").val('50');
function checkMoney(){
    var money = $("#money").val().trim();
    var ret=/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
    if(money.match(ret)){

    }else{
        alert("请输入正确充值金额,小数位不超过两位");
        return false
    }
    if(money == "" || isNaN(money)){
        return false;
    }
    return true;
}
function sureSubmit(){
    var money = $("#money").val().trim();
    var openid = $("#openid").val().trim();
    console.log(openid);
    if(checkMoney()){
        $(".sure-btn").css('display','none');
        $.ajax({
            type:"GET",
            url:interfaceIP+"/pay/routeWXjs/rechange",
            dataType:"json",
            data:getSignParams({
                openid: openid,
                money:money
            }),
            contentType: "application/json;charset=utf-8",
            success:function(data){
                function onBridgeReady(data){
                    WeixinJSBridge.invoke(
                        'getBrandWCPayRequest', eval(data), function(res){
                            console.log(res);

                            //             $(".sure-btn").css('display','block');
                //             if(res.err_msg == "get_brand_wcpay_request:ok"){
                //                 window.location.reload();
                //             }else{
                //                 window.location.reload();
                //             }
                        });
                // }
                // if (typeof WeixinJSBridge == "undefined"){
                //     if( document.addEventListener ){
                //         document.addEventListener('WeixinJSBridgeReady', onBridgeReady(data), false);
                //     }else if (document.attachEvent){
                //         document.attachEvent('WeixinJSBridgeReady', onBridgeReady(data));
                //         document.attachEvent('onWeixinJSBridgeReady', onBridgeReady(data));
                //     }
                // }else{
                //     onBridgeReady(data);
                }

            },
            error:function(err){
                console.log(err);
                // window.location.reload();
            }
        });
    }
}
function inputMoney(obj){
    $('#prop_phone').css("display","none");
    var mon = $(obj).text().substring(0,$(obj).text().length-1);
    $(obj).addClass("mon_active").siblings().removeClass("mon_active");
    if(!isNaN(parseInt($(obj).text().trim()))){
        $("#money").val(mon);
    }else{
        $(".re_money input").val('')
        $(".re_money input").focus()
    }
}
