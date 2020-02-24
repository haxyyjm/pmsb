<template>
  <div class="container">
      <div class="container-top">
        <el-tabs v-model="activeName" type="card"  @tab-click="handleClick">
            <el-tab-pane label="新增入住单" name="first">
                <!-- 最外部的ul -->
                <ul class="container-top-content">
                    <li>
                        <ul class="first-row">
                            <li>
                                <span>入住类型:</span>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </li>
                            <li>
                                <span>市场码:</span>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </li>
                            <li>
                                <span>来源码:</span>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </li>
                            <li>
                                <span>房价码:</span>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class="second-row">
                            <li style="display: flex">
                                <span>入离时间:</span>
                                <div style="display: flex">
                                    <el-input v-model="value"></el-input>~<el-input v-model="value"></el-input>
                                </div>
                                <span class="second-row-end">共计2天</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                       <ul class="third-row">
                            <li>
                                <span>选择房型:</span>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </li>
                            <li>
                                <span>选择房号:</span>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </li>
                            <li>当日房价</li>
                        </ul> 
                    </li>
                    <li>
                        <ul>
                            <li>
                                <ul class="first-row">
                                    <li>
                                        <span>入住人:</span>
                                    </li>
                                    <li>
                                        <el-input placeholder="输入姓名" v-model="value"></el-input>
                                    </li>
                                    <li>
                                        <el-select v-model="value" placeholder="请选择">
                                            <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </li>
                                    <li>
                                        <el-select v-model="value" placeholder="请选择">
                                            <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </li>
                                    <li>
                                        <el-input placeholder="输入证件号码" v-model="value"></el-input>
                                    </li>
                                    <li>
                                        <el-input placeholder="联系方式" v-model="value"></el-input>
                                    </li>
                                    <li>
                                        <el-button style="width: 100px; height: 30px" type="primary">添加同住人</el-button>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <el-input style="width: 800px;margin-left: 76px"  v-model="value"></el-input>
                            </li>
                            <li style="padding-left: 76px">
                                <el-button style="width: 80px; height: 30px" type="warning">上传公安</el-button>
                                <el-button style="width: 80px; height: 30px" type="warning">上传图片</el-button>
                            </li>
                        </ul>
                    </li>
                    <li class="end-row">
                       <ul style="display: flex; justify-content: space-between; align-items: center; width: 100%">
                            <li style="padding-left: 26px">
                                备注: <el-input class="remark-flag" style="width: 800px;"  v-model="value"></el-input>
                            </li>
                            <li style="padding-right: 6px">
                                <el-button style="width: 80px; height: 30px" type="danger">证件导入</el-button>
                                <el-button style="width: 80px; height: 30px" type="primary">早餐</el-button>
                                <el-button style="width: 80px; height: 30px" type="primary">确认入住</el-button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </el-tab-pane>
        </el-tabs>
      </div>
      <div class="container-end">
          <el-tabs v-model="activeName2" type="card"  @tab-click="handleClick">
            <el-tab-pane label="所有在住单" name="first">
                <el-table :header-cell-style="{fontWeight: '400', color: 'rgba(34,34,34,1)',textAlign: 'center'}" :data="tableData" style="width: 100%">
                    <!-- <el-table-column type="index" label="序号" width="120"></el-table-column> -->
                    <el-table-column prop="date" label="订单号" width="120"></el-table-column>
                    <el-table-column prop="name" label="在住人" width="120"></el-table-column>
                    <el-table-column prop="name" label="房间类型" width="120"></el-table-column>
                    <el-table-column prop="name" label="房间号" width="120"></el-table-column>
                    <el-table-column prop="name" label="备注" width="120"></el-table-column>
                    <el-table-column prop="name" label="联系电话" width="120"></el-table-column>
                    <el-table-column prop="name" label="预抵时间" width="120"></el-table-column>
                    <el-table-column prop="name" label="离店时间" width="120"></el-table-column>
                    <el-table-column prop="name" label="是否钟点房" width="120"></el-table-column>
                    <el-table-column prop="name" label="单状态" width="120"></el-table-column>
                    <el-table-column prop="name" label="操作" ></el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="今日在住单" name="second">今日在住单</el-tab-pane>
            <el-tab-pane label="昨日在住单" name="second">昨日在住单</el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>

<script>
export default {
    name: '入住-入住界面',
    data(){
        return {
            value: '',
            tableData: [],
            activeName: 'first',
            activeName2: 'first',
        }
    },
    methods: {
        handleClick(){

        }
    }
}
</script>

<style scoped>
   .container-end>>> .el-tabs__item {
       border: 1px solid white; 
    }
    .container-end>>> .el-tabs__item.is-active {
        background: #4488E9;
        color: white;
    }
    .container-end>>> .el-tabs__header {
        margin: 0px 0px;
    }
    .container-end>>> .el-tabs__nav.is-top{
        background:rgba(238,238,238,1);
    }
    /* 得分开写 */
    .container-top>>> .el-tabs__item {
       border: 1px solid white; 
    }
    .container-top>>> .el-tabs__header {
        margin: 0px 0px;
    }
    .container-top>>> .el-tabs__nav.is-top{
        background:rgba(238,238,238,1);
    }
    .container-top>>> .el-tabs__item.is-active {
        background: #4488E9;
        color: white;
    }

    
    /* 改造 el-input样式 */
    .container-top-content>>> .el-input__inner{
        height: 20px;
        border: 1px solid #777777;
        /* width: 173px; */
        border-radius: 0px;
    }
    .container-top-content>>> .el-input__icon{
        line-height: 10px;
    }
    .remark-flag /deep/ .el-input__inner{
        height: 30px;
    }
</style>>

<style lang="less" scoped>
    .common{
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    // 尝试全部flex 布局 对比效果 
    .container{
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100% - 70px);
        /* width: 100%; 设置版心宽度*/
        width: 1500px; 
        min-width: 960px;
        .container-top{
            border:2px solid rgba(68,136,233,1);
            height: 320px;
            width: 100%;
            font-size:13px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(34,34,34,1);
            //最顶端的样式--->重要
            .container-top-content{
                padding-left: 12px;
                padding-top: 3px;
                padding-bottom: 2px;
                li{
                    margin-top: 7px;
                }
                .first-row,.second-row,.third-row,.end-row{
                    li{
                        margin-left: 15px;
                        span{
                            margin-right: 5px;
                        }
                    }
                   .common
                }
            }
        }
        .container-end{
            margin-top: 10px;
            border:2px solid rgba(68,136,233,1);
            flex: 1;
            width: 100%;
            height: 100%;
        }
    }
</style>