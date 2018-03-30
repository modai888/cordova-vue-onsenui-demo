import VEcharts from 'vue-echarts/components/ECharts'

// import ECharts modules manually to reduce bundle size
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'

export default function install(Vue) {
    if ( install.installed ) return;

    install.installed = true;

    Vue.component('e-chart', VEcharts);
}

// require("./lib/chart/line");
//
// require("./lib/chart/bar");
//
// require("./lib/chart/pie");
//
// require("./lib/chart/scatter");
//
// require("./lib/chart/radar");
//
// require("./lib/chart/map");
//
// require("./lib/chart/tree");
//
// require("./lib/chart/treemap");
//
// require("./lib/chart/graph");
//
// require("./lib/chart/gauge");
//
// require("./lib/chart/funnel");
//
// require("./lib/chart/parallel");
//
// require("./lib/chart/sankey");
//
// require("./lib/chart/boxplot");
//
// require("./lib/chart/candlestick");
//
// require("./lib/chart/effectScatter");
//
// require("./lib/chart/lines");
//
// require("./lib/chart/heatmap");
//
// require("./lib/chart/pictorialBar");
//
// require("./lib/chart/themeRiver");
//
// require("./lib/chart/custom");
//
// require("./lib/chart/sunburst");
//
// require("./lib/component/graphic");
//
// require("./lib/component/grid");
//
// require("./lib/component/legendScroll");
//
// require("./lib/component/tooltip");
//
// require("./lib/component/axisPointer");
//
// require("./lib/component/polar");
//
// require("./lib/component/geo");
//
// require("./lib/component/parallel");
//
// require("./lib/component/singleAxis");
//
// require("./lib/component/brush");
//
// require("./lib/component/calendar");
//
// require("./lib/component/title");
//
// require("./lib/component/dataZoom");
//
// require("./lib/component/visualMap");
//
// require("./lib/component/markPoint");
//
// require("./lib/component/markLine");
//
// require("./lib/component/markArea");
//
// require("./lib/component/timeline");
//
// require("./lib/component/toolbox");
//
// require("zrender/lib/vml/vml");
//
// require("zrender/lib/svg/svg");