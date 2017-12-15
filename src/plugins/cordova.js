/**
 * Created by mac on 17/12/15.
 */
var _Vue

const install = function (Vue) {
    if ( install.installed && _Vue === Vue ) return

    install.installed = true
    _Vue = Vue

    let native = {};
    let isCordova = navigator.userAgent.indexOf('cordova') > 0;

    let platformPromise = new Promise(function (resolve, reject) {
        if ( isCordova ) {
            document.addEventListener("onload", onDeviceReady, false)
        } else {
            window.onload = onDeviceReady;
        }

        function onDeviceReady() {
            native = {
                device: window.device
            }

            resolve(native)
        }
    });

    Vue.platformReady = platformPromise;
    // Object.defineProperty(Vue.prototype, 'native', {
    //     get(){
    //
    //     }
    // });
    //
    // Object.defineProperty(Vue.prototype, 'platform', {
    //     get() {
    //         return native.device.platform;
    //     }
    // })

    Object.defineProperty(Vue.prototype, 'platformReady', {
        get() {
            return platformPromise
        }
    })

}

export default { install }
