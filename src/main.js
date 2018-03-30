// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueOnsenUI, { $ons } from './framework/onsenui'
import MintUI from './framework/mint-ui'
import EchartsUI from './framework/echarts-ui'

import './css/index.css';
import RootNavigator from './navigator/RootNavigator.vue';
import store from './store';

// 注册全局过滤器
import filters from './core/filters'

filters.forEach(f => {
    Vue.filter(f.name, f.filter)
});

Vue.use(Vuex);
Vue.use(VueOnsenUI);
Vue.use(MintUI);
Vue.use(EchartsUI);

registeSeviceWorker();
$ons.ready(() => {
    new Vue({
        render: h => h(RootNavigator),
        store: new Vuex.Store(store),
        beforeCreate() {
            var platform = this.$ons.platform;
            Vue.prototype.md = platform.isAndroid();
            // // set os related-style on html
            // var classes = '';
            //
            // // ios
            // if ( platform.isIOS() ) {
            //     classes += 'ios '
            // }
            //
            // // android
            // if ( platform.isAndroid() ) {
            //     classes += 'android '
            // }
            //
            // // cordova
            // if ( platform.isWebView() ) {
            //     classes += 'cordova '
            // }
            //
            // classes = classes.slice(-1) === ' ' ? classes.slice(0, -1) : classes;
            // document.documentElement.classList += classes;

            // 注册Azure通知服务
            // registeAzureNotification();
        },
    }).$mount('#app')
});

function registeSeviceWorker() {
    if ( !navigator.serviceWorker ) {
        return console.error('当前浏览器不支持ServiceWorker');
    }

    navigator.serviceWorker.addEventListener('message', function (event) {
        setTimeout(() => {
            // alert(event.data)
            console.log(event.data)
        }, 1000)
    })

    navigator.serviceWorker.register('service-worker.js?t=1')
        .then((swRegistration) => {
            swRegistration.active.postMessage('hello from client');
            if ( swRegistration.waiting ) {
                // swRegistration.waiting.postMessage('hello from client');
            }
        })
        .catch((error) => {
            console.log('ServiceWorker注册失败：' + error)
        })

}

function registeAzureNotification() {
    // 請參考https://github.com/phonegap/phonegap-plugin-push
    var push = PushNotification.init({
        //設定 Notification Hub 相關參數
        notificationHubPath: 'CordovaDemoNotificationHub',
        connectionString: 'Endpoint=sb://gridsum.servicebus.chinacloudapi.cn/;SharedAccessKeyName=DefaultListenSharedAccessSignature;SharedAccessKey=ij/lEEwIiR4J/jfTXioEpBFnF+AnF0w9x+FXh5NZl5o=',

        android: {
            sound: true,
            forceShow: true
        },
        ios: {
            alert: true,
            badge: true,
            sound: true
        }
    });

    push.on('registration', function (data) {
        console.log(data.registrationId);
        console.log(data.azureRegId);
        alert(JSON.stringify(data));
    });

    push.on('notification', function (data) {
        console.log(data.message);
        console.log(data.title);
        console.log(data.count);
        console.log(data.sound);
        console.log(data.image);
        console.log(data.additionalData);
        alert(JSON.stringify(data));
    });

    push.on('error', function (error) {
        alert(JSON.stringify(error.message))
    })
}
