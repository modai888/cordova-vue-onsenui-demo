// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from'mint-ui'

import Framework from './framework'
import CordovaPlugin from './plugins/cordova'
import App from './App'
import router from './router'
import mixins from './mixins'

Vue.use(MintUI);
Vue.use(CordovaPlugin);
Vue.use(Framework);

Vue.mixin(mixins);

Vue.config.productionTip = false;
const app = new Vue({
    router,
    template: '<App/>',
    components: { App }
});

Vue.platformReady.then(function ({ device }) {
    app.$mount('#app');
});
