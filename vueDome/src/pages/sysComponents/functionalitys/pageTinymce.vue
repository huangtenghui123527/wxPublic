<template>
    <div class="app-container">
        <div>
            <!-- 组件有两个属性 value 传入内容双向绑定 setting传入配置信息 -->
            <!-- <editor class="editor" :value="content"  :setting="editorSetting" @input="(content)=> content = content"></editor> -->
             <vue-tinymce></vue-tinymce>

        </div>
 
    </div>
</template>
<script>
    import editor from '@/components/tinymce'
    import VueTinymce from '@/components/vueTinymce'
    export default {
        name: "editor-demo",
        data: function () {
            return {
                content:'我是富文本编辑器的内容',
                //tinymce的配置信息 参考官方文档 https://www.tinymce.com/docs/configure/integration-and-setup/
                editorSetting:{
                    height:400,
                }
            }
        },
        components:{
            'editor':editor,
            'VueTinymce':VueTinymce
        }
    }
</script>
