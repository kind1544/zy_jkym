// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import iView from 'view-design'
import 'view-design/dist/styles/iview.css';
import * as echarts from 'echarts';
import router from './router';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(iView)
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  render: h => h(App),
  template: '<App/>'
})
