<template>
  <div class="box"></div>
</template>

<script>
export default {
    name: 'pie-chart',
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
                    text: '酒店房态占比图',
                    left: 'center',
                    bottom: 0,
                         textStyle:{
                            fontSize: 12,
                            fontFamily: 'PingFang SC',
                            fontweight: '400',
                            color: 'rgba(34,34,34,1)'
                        }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    top: '0%',
                    data: ['净房', '脏房', '住脏', '住净', '维修', '锁定']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '85%',
                        center: ['53%', '48%'],
                        data: [
                            {value: 335, name: '净房'},
                            {value: 310, name: '脏房'},
                            {value: 234, name: '住脏'},
                            {value: 135, name: '住净'},
                            {value: 1548, name: '维修'},
                            {value: 1548, name: '锁定'}
                        ],
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        //去掉横线指示的文字
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
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