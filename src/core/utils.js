/**
 * 工具库
 */

// 浏览器前缀
export const vendorPrefix = (function () {
    const styles = window.getComputedStyle(document.documentElement, '');
    var pre = (
        Array.prototype.slice
            .apply(styles)
            .join('')
            .match(/-(webkit|moz|ms)-/) || (styles.OLink === '' && [ '', 'o' ])
    )[ 1 ];

    return pre;
}());

// 判断是否支持某个css样式，除了transform外
export function supportCss(css) {
    var div = document.createElement('div');
    if ( css in div.style ) return true;

    // var prefixes = 'Ms O Moz Webkit'.split(' ');
    css = css.replace(/^[a-z]]/, (cha) => {
        return cha.toUpperCase();
    });

    return !!((vendorPrefix + css) in div.style);
    // for ( var i = 0, len = prefixes.length; i < len; i++ ) {
    //     if ( prefixes[ i ] + css in div.style ) return;
    // }
    // return false;
}

// 对日期进行以天为单位的计算
export function addDay(days = 0) {
    const now = new Date();
    now.setDate(now.getDate() + days);
    return now;
}

// 日期格式化
export function formatDate(date, fmt) {
    date = new Date(date);
    const o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}