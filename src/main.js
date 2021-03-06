import Vue from 'vue'
import App from './App.vue'
import Framework7 from "framework7/framework7.esm.bundle";
import Framework7Vue from "framework7-vue/framework7-vue.esm.bundle";
import "framework7/css/framework7.bundle.min.css";

import 'framework7-icons';

Framework7.use(Framework7Vue);
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
