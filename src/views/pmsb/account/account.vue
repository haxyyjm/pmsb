<template>
  <div class="container">
      <div class="container-top">
        <el-tabs v-model="activeName" type="card"  @tab-click="handleClick">
            <el-tab-pane label="总账务列表" name="first">
                <div class="container-top-content">
                    <ul class="top_content_wrap">
                        <li>
                            <span>收银点筛选:</span>
                            <el-select class="select-flag" v-model="value" placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                            <span>房间号筛选:</span>
                            <el-select class="select-flag" v-model="value" placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                            <span>营业日期起:</span>
                            <el-select class="select-flag" v-model="value" placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                         <li>
                            <span>营业日期止:</span>
                            <el-select class="select-flag" v-model="value" placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li class="check_flag">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox label="正常账户"></el-checkbox>
                                <el-checkbox label="AR账户"></el-checkbox>
                                <el-checkbox label="临客账"></el-checkbox>
                                <el-checkbox label="已平账户" ></el-checkbox>
                            </el-checkbox-group>
                        </li>
                        <li style="margin-left: auto;">
                            <el-button style="width: 80px; height: 30px" type="primary">并账</el-button>
                        </li>
                    </ul>
                </div>
                <el-table :header-cell-style="{fontWeight: '400',background: '#CCCCCC', color: 'rgba(34,34,34,1)',textAlign: 'center'}" :data="tableData" style="width: 100%">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column prop="date" label="类型" width="100"></el-table-column>
                    <el-table-column prop="name" label="状态" width="100"></el-table-column>
                    <el-table-column prop="name" label="业务主体" width="100"></el-table-column>
                    <el-table-column prop="name" label="房间号" width="100"></el-table-column>
                    <el-table-column prop="name" label="营业日期" width="100"></el-table-column>
                    <el-table-column prop="name" label="来源" width="100"></el-table-column>
                    <el-table-column prop="name" label="市场" width="100"></el-table-column>
                    <el-table-column prop="name" label="收集点" width="100"></el-table-column>
                    <el-table-column prop="name" label="总消费" width="100"></el-table-column>
                    <el-table-column prop="name" label="总付款" width="100"></el-table-column>
                    <el-table-column prop="name" label="余额" width="100"></el-table-column>
                    <el-table-column prop="name" label="已开票" width="100"></el-table-column>
                    <el-table-column prop="name" label="可开票" width="100"></el-table-column>
                    <el-table-column prop="name" label="操作"></el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
      </div>
      <div class="container-end">
          <el-tabs v-model="activeName2" type="card"  @tab-click="handleClick">
            <el-tab-pane label="消费清单" name="first">
                <div class="container-top-content">
                    <ul class="top_content_wrap">
                        <li>
                            <span>入账代码:</span>
                            <el-select class="select-flag" v-model="value" placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                            <span>营业日期起:</span>
                            <el-select class="select-flag" v-model="value" placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                        <span>营业日期止:</span>
                            <el-select class="select-flag" v-model="value" placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li class="check_flag">
                            <el-radio-group v-model="radio">
                               <el-radio label="全部"></el-radio>
                                <el-radio label="未结账"></el-radio>
                                <el-radio label="已结账"></el-radio>
                                <el-radio label="已冲账"></el-radio>
                                <el-radio label="已转账" ></el-radio>
                                <el-radio label="挂AR" ></el-radio>
                                <el-radio label="异常" ></el-radio>
                            </el-radio-group>
                        </li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane label="收支记录" name="second">收支记录</el-tab-pane>
            <el-tab-pane label="分账记录" name="third">分账记录</el-tab-pane>
            <el-tab-pane label="冲调账记录" name="fourth">冲调账记录</el-tab-pane>
            <el-tab-pane label="转账记录" name="five">转账记录</el-tab-pane>
            <el-tab-pane label="并帐记录" name="six">并帐记录</el-tab-pane>
            <el-tab-pane label="催帐记录" name="seven">催帐记录</el-tab-pane>
            <el-tab-pane label="查账记录" name="eight">查账记录</el-tab-pane>
            <el-tab-pane label="平账记录" name="nine">平账记录</el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>

<script>
export default {
    name: '账务-账务界面',
    data(){
        return {
            radio: '',
            tableData: [],
            activeName: 'first',
            activeName2: 'first',
            checkList: [],
            options: [],
            value: ''
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
    .check_flag /deep/ .el-checkbox__label{
        font-size:13px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(34,34,34,1);
    }
    .check_flag /deep/ .el-radio__label{
        font-size:13px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(34,34,34,1);
    }
    /* 改造 el-input样式 */
    .container-top-content>>> .el-input__inner{
        height: 20px;
        border: 1px solid #777777;
        width: 120px;
        border-radius: 0px;
    }
    .container-top-content>>> .el-input__icon{
        line-height: 10px;
    }
</style>>

<style lang="less" scoped>
    .common-font{
        font-size:13px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(34,34,34,1);
    }
    .common-head{
        padding-left: 10px;
        padding-right: 15px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        li{
            padding-left: 5px;
        }
        .li_flag_position{
            margin-left: 20px;
        }
    }
    // 尝试全部flex 布局 对比效果 
    .container{
        margin: 0 auto;
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        // justify-content: center;
        // height: calc(100% - 70px);
        height: 100%;
        /* width: 100%; 设置版心宽度*/
        width: 1500px; 
        min-width: 960px;
        .container-top{
            .common-font;
            border:2px solid rgba(68,136,233,1);
            height: 300px;
            width: 100%;
            .container-top-content>.top_content_wrap{
                .common-head
            }
        }
    }
    .container-end{
        .common-font;
        margin-top: 10px;
        border:2px solid rgba(68,136,233,1);
        // flex: 1;
        width: 100%;
        // height: 100%;
        height: calc(100% - 390px);
        .container-top-content>.top_content_wrap{
            .common-head
        }
    }
</style>