import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueRouter from 'vue-router';
import { toCurrency, toNumber } from './filters';

Vue.use(VueRouter);

Vue.filter('toCurrency', toCurrency);
Vue.filter('toNumber', toNumber);

import vSelect from 'vue-select';
Vue.component('v-select', vSelect);

Vue.config.productionTip = false;

// CSS from node-modules
import 'semantic-ui-css/semantic.css';

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
