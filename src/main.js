import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router/index.js';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import 'common/stylus/index.styl';

Vue.use(VueAwesomeSwiper);
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
