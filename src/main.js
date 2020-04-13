import Vue from 'vue';
import App from './App.vue';
import store from './store';
import GameController from './lib/GameController';

Vue.config.productionTip = false;
Vue.prototype.$game = new GameController();

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
