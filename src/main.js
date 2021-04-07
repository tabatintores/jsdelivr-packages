import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import throttle from 'sd-throttle';
import VModal from 'vue-js-modal';

Vue.use(throttle);
Vue.use(VModal);

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
