import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import './assets/styles/font.scss'
import { Button } from 'vant';
import { Field } from 'vant';
import { Uploader } from 'vant';
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css';
Vue.use(Uploader);

Vue.use(Button);
Vue.use(Field);
Vue.use(Viewer);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
