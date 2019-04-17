(function ($) {

    $.fn.softkeys = function(options) {

        var settings = $.extend({
            layout : [],
            target : '',
            rowSeperator : 'br',
            buttonWrapper : 'li'
        },  options);

        var createRow = function(obj, buttons) {
                for (var i = 0; i < buttons.length; i++) {
                    createButton(obj, buttons[i]);
                }

                obj.append('<'+settings.rowSeperator+'>');
                // console.log('<'+settings.rowSeperator+'>');
            },

            createButton = function(obj, button) {
                var character = '',
                    type = 'letter',
                    styleClass = '';

                switch(typeof button) {
                    case 'object' :
                        if(typeof button[0] !== 'undefined') {
                            character += button[0];
                        }
                        if(typeof button[1] !== 'undefined') {
                            character += button[1];
                        }
                        type = 'letter';
                        break;

                    case 'string' :
                        switch(button) {

                            case 'del' :
                                character = '<span>del</span>';
                                type = 'del';
                                break;

                            default :
                                character = button;
                                type = 'letter';
                                break;
                        }

                        break;
                }

                obj.append('<'+settings.buttonWrapper+' class="softkeys__btn  '+styleClass+'" data-type="'+type+'">'+character+'</'+settings.buttonWrapper+'>');
                //console.log('<'+settings.buttonWrapper+' class="softkeys__btn  '+styleClass+'" data-type="'+type+'">'+character+'</'+settings.buttonWrapper+'>');
            },


            bindKeyPress = function(obj) {
                obj.children(settings.buttonWrapper).on('click touchstart', function(event){
                    event.preventDefault();
                    event.stopPropagation();

                    var character = '',
                        type = $(this).data('type'),
                        targetValue = $(settings.target).val();

                    switch(type) {


                        case 'del' :
                            targetValue = "";
                            break;

                        //case 'symbol' :
                        //    if(obj.hasClass('softkeys--alt')) {
                        //        character = $(this).children('span').eq(1).html();
                        //    } else {
                        //        character = $(this).children('span').eq(0).html();
                        //    }
                        //    break;

                        case 'letter' :
                            character = $(this).text();
                            break;

                    }
                    //赋值，光标跳到下一个输入框x
                    $(settings.target).focus().val((targetValue + character).substr(0,1)).next().focus();
                    //替换原来的值
                    $(settings.target).focus().val(character.substr(0,1)).next().focus();
                    if($(settings.target).index() == 6){
                        $(settings.target).next().blur();
                    }
                    //删除，光标跳到上一个输入框
                    if((targetValue + character) == ""){
                        $(settings.target).prev().focus();
                        if($(settings.target).attr("name")=="code"){
                            $(settings.target).focus();
                        }
                    }
                });
            };



        //toggleAlt = function(obj) {
        //    obj.toggleClass('softkeys--alt');
        //};

        return this.each(function(){
            for (var i = 0; i < settings.layout.length; i++) {
                createRow($(this), settings.layout[i]);
            }

            bindKeyPress($(this));
        });
    };

}(jQuery));
function alertDialog(msg){
    var sHeight = document.documentElement.scrollHeight;
    var sWidth = document.documentElement.scrollWidth;
    var wHeight = document.documentElement.clientHeight;

    //遮罩层
    var oMask = document.createElement("div");
    oMask.id = "alert";
    oMask.style.width = sWidth + "px";
    if (sHeight > wHeight) {
        oMask.style.height = sHeight + "px";
    } else {
        oMask.style.height = wHeight + "px";
    }
    document.body.appendChild(oMask);

    //用户积分
    var square = document.createElement("div");
    square.id = "square";
    square.innerHTML = "<div class='sTitle'>温馨提示</div><div class='sContent'>"+msg+
        "</div><div id='sBtn'>确认</div>";
    document.body.appendChild(square);

    var dHeight = square.offsetHeight;
    var dWidth = square.offsetWidth;

    square.style.left = (sWidth-dWidth)/2 + "px";
    square.style.top = (wHeight-dHeight)/3 + "px";

    //点击关闭按钮
    var  oClose = document.getElementById("sBtn");

    oClose.onclick = oMask.onclick = function(){
        document.body.removeChild(square);
        document.body.removeChild(oMask);
    }
}
function carNumberSearch(carNumber) {

    var express = /[A-Za-z]{1}[A-Za-z0-9]{4}[A-Za-z0-9港澳学领]{1}$|[A-Za-z]{1}[A-Za-z0-9]{5}[A-Za-z0-9港澳学领]{1}$/;
    if (carNumber == '') {
        alertDialog("您还未输入车牌号码");
        return false;
    } else if (!express.test(carNumber)) {
        alertDialog("车牌号格式有误，请重新输入");
        return false;
    } else if (express.test(carNumber)){
        return true;
    }
    return false;
}
function getCarNumber(){
    var carCity = $(".carN1").val();
    var carNum;
    var lastNum = $("input[name='num7']").val();
    if(lastNum == ""){
        carNum =  $("input[name='num1']").val()+ $("input[name='num2']").val()+ $("input[name='num3']").val()+ $("input[name='num4']").val()
            + $("input[name='num5']").val()+ $("input[name='num6']").val();
    }else if(!lastNum == ""){
        carNum = $("input[name='num1']").val()+ $("input[name='num2']").val()+ $("input[name='num3']").val()+ $("input[name='num4']").val()
            + $("input[name='num5']").val()+ $("input[name='num6']").val()+$("input[name='num7']").val();
    }
    return carCity+carNum;
}
//调用虚拟键盘插件
$('.softkeys').softkeys({
    target : $('.softkeys').data('target'),
    layout : [
        [
            '京','沪','粤','津','冀','晋','蒙','辽','吉','黑'
        ],
        [
            '苏','浙','皖','闽','赣','鲁','豫','鄂', '湘'
        ],
        [
            '桂','琼','渝','川','贵','云','藏'
        ],
        [
            '陕','甘','青','宁','新','del'
        ]
    ]
});
//循环使用softkeys
for(var i =1;i<=7;i++){
    $(".n"+i).each(function(){
        $(this).softkeys({
            target : $(this).data('target'),
            layout : [
                [
                    '1','2','3','4','5','6','7','8','9','0'
                ],
                [
                    'A','B','C','D','E','F','G','H','J','K'
                ],
                [
                    'L','M','N','P','Q','R','S','T','U','V'
                ],
                [
                    'W','X','Y','Z','港','澳','学','del'
                ]
            ]
        });
    });
}
//根据输入车牌第几位禁止点击键盘中部分按钮
function hideButton(){
    for(var i=0;i<=9;i++){
        $(".carNum li:eq("+i+")").unbind("touchstart");
        $(".carNum li:eq("+i+")").css("color","#ddd");
    }
    for(var j=0;j<=4;j++){
        $(".carNum:eq("+j+") li:eq(34)").unbind("touchstart");
        $(".carNum:eq("+j+") li:eq(34)").css("color","#ddd");
        $(".carNum:eq("+j+") li:eq(35)").unbind("touchstart");
        $(".carNum:eq("+j+") li:eq(35)").css("color","#ddd");
        $(".carNum:eq("+j+") li:eq(36)").unbind("touchstart");
        $(".carNum:eq("+j+") li:eq(36)").css("color","#ddd");
    }
}