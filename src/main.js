// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// eslint-disable-next-line
import VueDrop from 'vue-drop';
import App from './App.vue';
import router from './router';

import './assets/css/fonts/icofonts.css';

Vue.config.productionTip = false;
Vue.use(VueDrop);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
