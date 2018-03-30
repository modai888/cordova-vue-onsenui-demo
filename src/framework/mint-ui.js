import {
    DatetimePicker
} from 'mint-ui'


export default function install(Vue) {
    if ( install.installed ) return;
    install.installed = true;

    Vue.component(DatetimePicker.name, DatetimePicker);
}