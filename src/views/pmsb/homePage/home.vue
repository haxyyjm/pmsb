<template>
    <div class="home-container">
        <!-- 内容上半部分 -->
        <el-row class="home-container-top">
            <el-col :span="8" class="left-content-wrapper">
                <div class="left-content">
                    <div class="one-content"></div>
                    <div  class="two-content">
                        <span>当前未处理信息0条</span>
                    </div>
                    <div class="third-content">
                        <span>入住率: 60%</span>
                        <span>今日收益:</span>
                        <span>预计收益:</span>
                    </div>
                </div>
            </el-col>
            <!-- 上右部分 -->
            <el-col :span="16" class="right-content-wrapper">
                <div class="right-content">
                    <div class="right-content_1">
                        <div class="little-box">客房统计图</div>
                        <div class="chart_left">
                            <pie-chart width="100%" height="100%"></pie-chart>
                        </div>
                    </div>
                    <div class="right-content_2">
                        <div class="chart_right">
                            <bar-chart width="100% " height="100%"></bar-chart>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row class="home-container-end">
            <div class="container-end">
                <el-tabs v-model="activeName" type="card"  @tab-click="handleClick">
                    <el-tab-pane label="本日订单" name="first">
                        <el-table :header-cell-style="{fontWeight: '400', color: 'rgba(34,34,34,1)'}" :data="tableData" style="width: 100%">
                            <el-table-column type="index" label="序号" width="120"></el-table-column>
                            <el-table-column prop="date" label="日期" width="120"></el-table-column>
                            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                            <el-table-column prop="name" label="姓名2" width="120"></el-table-column>
                            <el-table-column prop="name" label="姓名3" width="120"></el-table-column>
                            <el-table-column prop="name" label="姓名4" width="120"></el-table-column>
                            <el-table-column prop="name" label="姓名5" width="120"></el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="昨日订单" name="second">昨日订单</el-tab-pane>
                    <el-tab-pane label="在住订单" name="third">在住订单</el-tab-pane>
                    <el-tab-pane label="已离订单" name="fourth">已离订单</el-tab-pane>
                    <el-tab-pane label="应离订单" name="five">应离订单</el-tab-pane>
                    <el-tab-pane label="应到订单" name="six">应到订单</el-tab-pane>
                    <el-tab-pane label="异常单" name="seven">异常单</el-tab-pane>
                    <el-tab-pane label="团队" name="eight">团队</el-tab-pane>
                    <el-tab-pane label="钟点房" name="nine">钟点房</el-tab-pane>
                </el-tabs>
            </div>
        </el-row>
    </div>    
</template>

<script>
import PieChart from './pieChart'
import BarChart from './barChart'
export default {
    components: {
        PieChart,
        BarChart
    },
    data(){
        return {
            activeName: 'first',
            tableData: []
        }
    },
    methods: {
        handleClick(){

        }
    }
}
</script>
<style scoped>
    .container-end>>> .el-tabs--card>.el-tabs__header{
        background:rgba(238,238,238,1);
    }
    .container-end>>> .el-tabs__item {
       border: 1px solid white; 
    }
    .container-end>>> .el-tabs__item.is-active {
        background: rgba(137,87,161,1);
        color: white;
    }
    .container-end>>> .el-tabs__header {
        margin: 0px 0px;
    }
</style>
<style lang="less" scoped>
    .home-container{
       /* width: 100%; 设置版心宽度*/
        width: 1500px; 
        margin: 0 auto;
        min-width: 960px;
        height: 100%; //标记
        .home-container-top{
            .right-content-wrapper, .left-content-wrapper{
                padding: 0px 5px;
            }
            .left-content> .one-content{
                width: 100%;
                height: 166px;
            }
            .left-content> .two-content{
                width: 100%;
                height: 30px;
                background:#777777;
                text-align: center;
                line-height: 30px;
                span{
                    font-size:14px;
                    font-family:PingFang SC;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                }
            }
            .left-content .third-content{
                width: 100%;
                height: 44px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                font-size:14px;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(34,34,34,1);
            }
            .left-content{
                width: 100%;
                height: 240px;
                border: 2px solid rgba(204,204,204,1);;
            }
            // 容纳统计图
            .right-content{
                width: 100%;
                height: 240px;
                border:2px solid rgba(68,136,233,1);
                position: relative;
                display: flex;
                .right-content_2{
                    flex: 1;
                    overflow-x: auto;
                    .chart_right{
                        width: 100%;
                        padding: 16px 27px;
                        height: 100%;
                    }
                }
                .right-content_1{
                    // flex: 1;
                    width: 340px;
                    .chart_left{
                        width: 100%;
                        padding: 30px 27px;
                        height: 100%;
                    }
                    .little-box{
                        position: absolute;
                        width:120px;
                        height:30px;
                        background:rgba(68,136,233,1);
                        text-align: center;
                        line-height: 30px;
                        font-size:14px;
                        font-family:PingFang SC;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                    }
                }
            }
        }
        .home-container-end.el-row{
            height:  calc(100% - 240px); //标记
            // height: 100%;
        }
        .home-container-end{
            padding: 5px 5px;
            .container-end{
                // height: 360px;
                // height: 100%;
                width: 100%;
                border:2px solid rgba(137,87,161,1);
                height: calc(100% - 80px); //标记
            }
        }
    }
</style>