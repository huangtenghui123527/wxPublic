
// import '@/mock/login.js'
import $t from '@/common/js/tool.js'
import {Login} from '@/api/api.js'
export default {
    naem:'login',
    data(){
       return {
            isMemery:true,
            //    用户名密码
            userInfo:{
                name:'admin',
                password:'132456'
            },

            // 用户密码校验
            loginRules:{
                name:[{
                    required: true, message: '请输入账号', trigger: 'blur'
                }],
                password:[{
                    required: true, message: '请输入密码', trigger: 'blur' 
                }]
            },
       }
    },
    methods:{
        // 忘记密码提示
        openMsg(){
            this.$message({
                type:"success",
                message:'132465'
            })
        },
        Login(userInfo){
            this.$refs.formUser.validate(valid => {
                if (valid) {
                // $t.encSetCookie('aaa',{id:1},'key',7);
                // console.log($t.decGetCookie('aaa','key'))
                    let para={
                        username: userInfo.name,
                        password: userInfo.password
                    }
                    Login(para).then(res=>{
                        let user={
                            name:res.name,
                            id:res.uid
                        }
                        this.$store.commit('auth/setToken',res.token)
                        this.$store.commit('user/setName',user)
                        // window.location.replace("/")
                        this.$router.push('home')
                        // console.log(res);
                    }).catch(err=>{
                        console.log(err)
                    })
                }
              });
        }
    },
    mounted(){

    }
}