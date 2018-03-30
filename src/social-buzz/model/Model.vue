<template>
    <v-ons-page>
        <v-ons-carousel fullscreen swipeable auto-scroll direction="vertical"
                        :index.sync="carouselIndex"
        >
            <v-ons-carousel-item>
                <gs-ons-carousel-scroll>
                    <e-chart :options="polar" gestrue-strip></e-chart>

                    <div style="text-align: center; font-size: 30px; margin-top: 20px; height: 900px">
                    </div>
                </gs-ons-carousel-scroll>
            </v-ons-carousel-item>
            <v-ons-carousel-item>
                <gs-ons-carousel-scroll>
                    <div style="text-align: center; font-size: 30px; height: 900px;background: #999;">

                    </div>
                </gs-ons-carousel-scroll>
            </v-ons-carousel-item>
        </v-ons-carousel>

    </v-ons-page>
</template>

<script>
    import GsSection from '../../components/GsSection'
    import GsOnsCarouselScroll from '../../components/GsOnsCarouselScroll'

    export default {
        name: "model",
        components: { GsSection, GsOnsCarouselScroll },
        data() {
            return {
                carouselIndex: 0,
                items: {
                    BLUE: '#fff',
                    DARK: '#fff',
                    ORANGE: '#fff'
                }
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
        },
        mounted() {
        }
    }
</script>

<style scoped>
    .echarts {
        width: 375px;
        height: 300px;
    }

    .wrapper{
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>