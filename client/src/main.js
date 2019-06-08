import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from "vee-validate";
import 'ant-design-vue/dist/antd.css'; 
import antd from 'ant-design-vue';

Vue.use(VeeValidate);
Vue.use(antd)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
