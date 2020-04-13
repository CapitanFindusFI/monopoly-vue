import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import store from './store';
import GameController from './lib/GameController';
import languages from './i18n/languages';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueI18n);

Vue.config.productionTip = false;
Vue.prototype.$game = new GameController();

const vueI18n = new VueI18n({
  fallbackLocale: 'it',
  locale: 'it',
  messages: languages,
});

new Vue({
  store,
  i18n: vueI18n,
  render: (h) => h(App),
}).$mount('#app');
