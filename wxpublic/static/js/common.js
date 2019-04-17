var search=window.location.search;
var searchStr=search.substr(1,search.length)

function getQueryString(str){
    let arr=searchStr.split('&');
    let reg=RegExp(str);
    for(let i in arr){
        if(reg.test(arr[i])){
            // console.log(arr[i])
            return arr[i].split('=')[1];
        }
    }
    return '';
}
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('5 16="u://17.v.t";5 18="u://15.v.t";5 12="u://13.v.t/";5 14="u://19.v.t";5 1e="1f://1g.1d.t";5 H=\'1a\';5 J=\'1b\';f 1c(F){5 A=E e("(^|&)"+F+"=([^&]*)(&|$)","i");5 r=T.U.V.z(1).11(A);n(r!=L)c Y(r[2]);c L}f W(8){5 8=8;5 9=[];5 7=\'\';B 8.w;p(5 i x 8){9.N(i);}9.O(f(l,r){c l>r?1:-1});p(5 j=0;j<9.g;j++){7+=9[j]+\'=\'+8[9[j]]+\'&\'}n(7==\'\'){7+=\'&\'}7=I(7+\'X=10-Z@6$P-Q\');8.w=7;c 8}R.1v.1u=f(a){5 o={"M+":b.C()+1,"d+":b.1s(),"h+":b.1t(),"m+":b.1r(),"s+":b.1k(),"q+":1l.1j((b.C()+3)/3),"S":b.1i()};n(/(y+)/.D(a)){a=a.G(e.$1,(b.1p()+"").z(4-e.$1.g))}p(5 k x o){n(E e("("+k+")").D(a)){a=a.G(e.$1,(e.$1.g==1)?(o[k]):(("1q"+o[k]).z((""+o[k]).g)))}}c a};f 1o(8,K){5 8=8;5 9=[];5 7=\'\';B 8.w;p(5 i x 8){9.N(i)}9.O(f(l,r){c l>r?1:-1});p(5 j=0;j<9.g;j++){7+=9[j]+\'=\'+8[9[j]]+\'&\'}n(7==\'\'){7+=\'&\'}7=I(H+K+1m(7.1n(0,7.g-1))+J).1h();c 7}',62,94,'|||||var||sigeStr|params|paramsList|fmt|this|return||RegExp|function|length|||||||if||for||||cn|http|mallparking|sign|in||substr|reg|delete|getMonth|test|new|name|replace|appkey|MD5|appsecret|timestamp|null||push|sort|3f2C_d08o9|6969C7eB|Date||window|location|search|getSignParams|secret|decodeURI|bC84b9|z3ydBD2|match|webIp|wechat|BILL_IP|wxpay|codeIP|coupon|interfaceIP|api|FXw579aPEYQzRgqSGU1KjcqBXrhsQTnZ|4SnMvGLVxuQojWKt4v8wh06OW7JxHxm7e8EMwSXM0YWIGfv0|getQueryString|fapiaoer|TAX_IP|https|openapi|toUpperCase|getMilliseconds|floor|getSeconds|Math|encodeURIComponent|substring|getSign|getFullYear|00|getMinutes|getDate|getHours|format|prototype'.split('|'),0,{}))
