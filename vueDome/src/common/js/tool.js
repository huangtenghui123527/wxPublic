import CryptoJS from 'crypto-js'
import Cookies from 'js-cookie'


export default {
    setCookie:function(name,value,time){
        Cookies.set(name, value, { expires: time });
    },
    getCookie:function(name){
        return Cookies.get(name);
    },
    removeCookie:function(name){
        Cookies.remove(name);
    },
    setLocalstorage:function(name,val){
        localStorage.setItem(name,val)
    },
    getLocalstorage:function(name){
        return localStorage.getItem(name);
    },
    clearLocalstorage:function(name){
        localStorage.removeItem(name)
    },
    setSessionstorage:function(name,val){
        sessionStorage.setItem(name,val)
    },
    getSessionstorage:function(name){
        return sessionStorage.getItem(name);
    },
    clearSessionstorage:function(name){
        sessionStorage.removeItem(name)
    },
    // 加密cookie
    encSetCookie:function(name,val,passKey,time){
        // this.setCookie(name,val,time)
        this.setCookie(name,encryptByDES(JSON.stringify(val),passKey),time);
    },
    // 解密cookie
    decGetCookie:function(name,passKey){
        let cookie=this.getCookie(name);
        if(cookie){
          return  JSON.parse(decryptByDES(cookie,passKey))
        }
        return cookie;
    },
    // 加密localstorage
    encSetLStorage:function(name,val,passKey){
        // this.setCookie(name,val,time)
        this.setLocalstorage(name,encryptByDES(JSON.stringify(val),passKey));
    },
    // 解密localstorage
    decGetLStorage:function(name,passKey){
        let LStorage=this.getLocalstorage(name);
        if(LStorage){
          return  JSON.parse(decryptByDES(LStorage,passKey))
        }
        return LStorage;
    },
    // 加密sessionstorage
    encSetSStorage:function(name,val,passKey){
        // this.setCookie(name,val,time)
        this.setSessionstorage(name,encryptByDES(JSON.stringify(val),passKey));
    },
    // 解密localstorage
    decGetSStorage:function(name,passKey){
        let SStorage=this.getSessionstorage(name);
        if(SStorage){
          return  JSON.parse(decryptByDES(SStorage,passKey))
        }
        return SStorage;
    }

}
    //带密匙的加密方式
    //DES加密 Pkcs7填充方式  
   function encryptByDES(message, key){  
        const keyHex = CryptoJS.enc.Utf8.parse(key);  
        const encrypted = CryptoJS.DES.encrypt(message, keyHex, {  
            mode: CryptoJS.mode.ECB,  
            padding: CryptoJS.pad.Pkcs7  
        });  
        return encrypted.toString();  
    }  

    //DES解密  
   function decryptByDES(ciphertext, key){  
        const keyHex = CryptoJS.enc.Utf8.parse(key);  
        // direct decrypt ciphertext  
        const decrypted = CryptoJS.DES.decrypt({  
                    ciphertext: CryptoJS.enc.Base64.parse(ciphertext)  
        }, keyHex, {  
                    mode: CryptoJS.mode.ECB,  
                    padding: CryptoJS.pad.Pkcs7  
        });  
        return decrypted.toString(CryptoJS.enc.Utf8);  
    } 
