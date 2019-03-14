// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueDrop from 'vue-drop';
import App from './App.vue';
import router from './router';
import store from './store';
import Loading from './components/loading';

import './styles/fonts/icofonts.css';

Vue.config.productionTip = false;
Vue.use(VueDrop);
Vue.use(Loading);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
