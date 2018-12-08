import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
// import echarts from './echarts'
import tinymce from 'tinymce';

import ElementUI from 'element-ui';
import VueParticles from 'vue-particles'
import highcharts from 'highcharts'
import VueHighCharts from 'vue-highcharts'
import './mock'
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/scss/font-awesome.scss'
import '@/common/css/reset.scss'
import highcharts3d from 'highcharts/highcharts-3d'
highcharts3d(highcharts)
Vue.use(ElementUI);
Vue.use(VueParticles)
window.tinymce = tinymce;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // echarts,
  components: { App },
  template: '<App/>',
  data:{
    Bus: new Vue()
  }
})
