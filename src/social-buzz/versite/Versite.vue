<template>
    <v-ons-page name="vert-site-page">
        this is verticle page
    </v-ons-page>
</template>

<script>
    import GsOnsCarouselScroll from '../../components/GsOnsCarouselScroll'

    export default {
        name: "versite",
        components: { GsOnsCarouselScroll },
        data() {
            return {
                carouselIndex: 0
            }
        },

        created() {
            let data = []

            for ( let i = 0; i <= 360; i++ ) {
                let t = i / 180 * Math.PI
                let r = Math.sin(2 * t) * Math.cos(2 * t)
                data.push([ r, i ])
            }

            this.polar = {
                title: {
                    text: '极坐标双数值轴'
                },
                legend: {
                    data: [ 'line' ]
                },
                polar: {
                    center: [ '50%', '54%' ]
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                angleAxis: {
                    type: 'value',
                    startAngle: 0
                },
                radiusAxis: {
                    min: 0
                },
                series: [
                    {
                        coordinateSystem: 'polar',
                        name: 'line',
                        type: 'line',
                        showSymbol: false,
                        data: data
                    }
                ],
                animationDuration: 2000
            }
        }
    }
</script>

<style scoped>
    .echarts {
        width: 100%;
        height: 300px;
    }
</style>