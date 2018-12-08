<template>
    <div id="tag-nav">
        <router-link ref="tag" class="tag-nav-item" v-for="(item,index) in tagNavList" :to="item.path" :key="index">
            {{item.title}}
            <span class="fa fa-times" @click.prevent.stop="closeTheTag(item,index)"> </span>
        </router-link>
    </div>
</template>
<script>
export default {
    data () {
        return {
            defaultPage:'/home'
        }
    },
    computed:{
        tagNavList(){
            return this.$store.state.tagNav.cachedPageList
        }
    },
    mounted(){
        this.addTagNav()
        // console.log(this.$store.state)
    },
    watch:{
        $route(){
            this.addTagNav();
        }
    },
    methods:{
        addTagNav(){
            this.$store.commit("tagNav/addTagNav",{
                name:this.$router.getMatchedComponents()[1].name,
                path:this.$route.path,
                title:this.$route.meta.name
            })
        },
        isActive(item){
            return item.path===this.route.path
        },
        closeTheTag(item,index){
            // console.log(item)
            this.$store.commit("tagNav/removeTagNav",item)
            if(this.$route.path==item.path){
                if(index){
                    this.$router.push(this.tagNavList[index-1].path)
                }else{
                    this.$router.push(this.defaultPage)
                    if(this.$route.path=='/home'){
                        this.addTagNav()
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss">
    #tag-nav{
        width: 100%;
        height: 51px;
        padding: 10px;
        background: #eee;
        border-bottom: 1px solid #ccc;
        white-space: nowrap; 
        overflow: hidden;
    }
    .tag-nav-item{
        display: inline-block;
        position: relative;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        margin-right: 10px;
        border: 1px solid #ccc;
        background: #fff;
        text-decoration: none;
        border-radius: 5px;
        white-space: normal;
        &:hover {
            background-color: #2FB884;
            color: #fff;
        }
        span{
            width: 14px;
            height: 14px;
            border-radius: 50%;
            text-align: center;
            transition: all .3s ease;
            transform-origin: 100% 50%;
            line-height: 14px;
            &:before {
                transform: scale(.4);
                display: inline-block;
            }
            &:hover {
                background-color: #b4bccc;
                color: #fff;
            }
        }
    }
    .router-link-active{
        background-color: #2FB884;
        color: white;
    }
</style>
