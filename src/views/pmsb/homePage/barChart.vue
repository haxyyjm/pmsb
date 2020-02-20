<template>
  <div class="box"></div>
</template>

<script>
export default {
    name: 'bar-chart',
    props: {
        width: {
            type: String,
            default: '',
        },
        height: {
            type: String,
            default: '',
        }
    },
    mounted(){
        this.$el.style.width = this.width
        this.$el.style.height = this.height
        this.initChart();
    },
    methods: {
        initChart(){
            this.charts = this.$echarts.init(this.$el)
            // 绘制图表
            this.charts.setOption(this.setOption());
        },
        setOption() {
            let option = {
                title: {
                    text: '酒店房间当日预定数量',
                    left: 'center',
                    bottom: 0,
                         textStyle:{
                            fontSize: 12,
                            fontFamily: 'PingFang SC',
                            fontweight: '400',
                            color: 'rgba(34,34,34,1)'
                        }
                },
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                // 柱状图位置
                grid: {
                    left: '2%',
                    right: '4%',
                    bottom: '10%',
                    height: 220, //设置柱状图高度
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['风雅大床房', '风雅双床房', '商务大床房', '商务双床房', '风雅电竞房', '亲子家庭房'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                // legend: {
                //     orient: 'vertical',
                //     left: 'left',
                //     top: '0%',
                //     data: ['当日预定数量'],
                // },
                series: [
                    {
                        name: '当日预定数量',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220],
                        itemStyle: {
                            normal: {
                                //每根柱子颜色设置
                                color: function(params) {
                                    let colorList = [
                                        "#c23531",
                                        "#2f4554",
                                        "#61a0a8",
                                        "#d48265",
                                        "#91c7ae",
                                        "#749f83",
                                        "#ca8622",
                                    ];
                                    return colorList[params.dataIndex];
                                }
                            }
                        }
                    }
                ]
            }
            return option
        }
    }
}
</script>

<style>

</style>