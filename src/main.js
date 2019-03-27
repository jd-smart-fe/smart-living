// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueDrop from 'vue-drop';
import Stone from 'vue-stone';

import 'vue-stone/dist/vue-stone.css';
import 'vue-stone/dist/iconfonts.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import jdWUI from 'jd-whale-ui';

import App from './App.vue';
import router from './router';
import store from './store';
import Loading from './components/loading';


import './styles/fonts/icofonts.css';

import '../node_modules/jd-whale-ui/dist/css/app.css';


Vue.config.productionTip = false;
Vue.use(VueDrop);
Vue.use(Loading);
Vue.use(Stone);
Vue.use(jdWUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
