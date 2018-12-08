<template>
  <div class='tinymce'>
    <h1>tinymce</h1>
    <editor id='tinymce' v-model='tinymceHtml' :init='init' @click="images_upload_handler(blobInfo,success,failure)"></editor>
    <el-button type="primary" @click="tinymceInfo(tinymceHtml)">保存</el-button>

  </div>
</template>

<script>
import {Select} from '@/api/api'
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/modern/theme'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
export default {
  name: 'tinymce',
  components: {Editor},
  data () {
    return {
      tinymceHtml: '请输入内容',
      init: {
        language_url: '/static/js/langs/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/static/js/skins/lightgray',
        height: 300,
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
        toolbar:
          'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        branding: false,
        images_upload_handler: (blobInfo, success, failure) =>{
            this.imageHandler(blobInfo, success, failure)
        }
      }
    }
  },
  mounted () {
    tinymce.init({});
    // console.log(this.tinymceHtml)
  },
  methods:{
      tinymceInfo(info){
          console.log(info)
      },
      imageHandler (blobInfo, success, failure) {
        let formdata = new FormData()
        formdata.set('upload_file', blobInfo.blob());
        Select(formdata).then(res=>{
            console.log(res);
            success(res);
        }).catch(err=>{
            failure(err)
            console.log(err)
        })
        // axios.post('/select', formdata).then(res => {
        //     success(res)
        // }).catch(res => {
        //     failure('error')
        // })
    },
    // images_upload_handler(blobInfo,success,failure){

    // }
  }
}
</script>
