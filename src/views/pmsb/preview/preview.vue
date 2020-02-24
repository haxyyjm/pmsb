<template>
  <div class="container">
    <div class="container-top">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="新增预定单" name="first">
          <div class="container-top-content">
            <div class="content-flag1">
              <ul class="first-row">
                <li>
                    <span>预定类型:</span>
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
              <ul class="second-row">
                <li>
                    <span>预定人:</span>
                    <el-input  v-model="value"></el-input>
                </li>
                <li>
                    <span>联系电话:</span>
                    <el-input v-model="value"></el-input>
                </li>
                <li>
                    <span>预离时间:</span>
                    <div style="display: flex">
                        <el-input v-model="value"></el-input>~<el-input v-model="value"></el-input>
                    </div>
                    <span class="second-row-end">共计2天</span>
                </li>
              </ul>
            </div>
            <div class="content-flag2" style="postion: relative">
                <ul class="first-row" style="padding-right: 15px">
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
                        <span>选择房型:</span>
                        <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
                    </li>
                    <li>
                        <el-button class="bth-flag" type="warning">选择房号</el-button>
                    </li>
                    <li class="row-end-flag">
                        <span>当日房价</span>
                    </li>
                </ul>
                <ul class="first-row" style="padding-right: 15px">
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
                        <span>选择房型:</span>
                        <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
                    </li>
                    <li>
                        <el-button class="bth-flag" type="warning">选择房号</el-button>
                    </li>
                    <li class="row-end-flag">
                        <span>当日房价</span>
                    </li>
                </ul>
                <div  style="bottom: 47px;position: absolute;left: 30px;">
                    <el-button plain style="width: 80px; height: 30px" type="primary">添加房型</el-button>
                </div>
            </div>
            <div style="padding-left: 5px">
                <ul style="display: flex; justify-content: space-between; align-items: center">
                   <li>
                        备注:  <el-input class="remark-flag" style="width: 800px; line-height: 43px;"  v-model="value"></el-input>
                   </li>
                   <li>
                        <el-button style="width: 80px; height: 30px" type="primary">确认</el-button>
                   </li>
                </ul>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="预定单详情" name="second">预定单详情</el-tab-pane>
      </el-tabs>
    </div>
    <div class="container-end">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="今日预定单" name="first">
            <el-table  center :header-cell-style="{fontWeight: '400', color: 'rgba(34,34,34,1)', textAlign: 'center'}" :data="tableData" style="width: 100%">
                <!-- <el-table-column type="index" label="序号" width="120"></el-table-column> -->
                <el-table-column prop="date" label="订单号" width="120"></el-table-column>
                <el-table-column prop="name" label="预定人" width="120"></el-table-column>
                <el-table-column prop="name" label="房间类型" width="120"></el-table-column>
                <el-table-column prop="name" label="房间号/排房" width="120"></el-table-column>
                <el-table-column prop="name" label="联系电话" width="120"></el-table-column>
                <el-table-column prop="name" label="预抵时间" width="120"></el-table-column>
                <el-table-column prop="name" label="离店时间" width="120"></el-table-column>
                <el-table-column prop="name" label="是否钟点房" width="120"></el-table-column>
                <el-table-column prop="name" label="单状态" width="120"></el-table-column>
                <el-table-column prop="name" label="操作"></el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="所有预定单" name="second">所有预定单</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "preview-预定界面",
  data() {
    return {
      tableData: [],
      num: '',
      value: "",
      options: [],
      activeName: "first",
      activeName2: "first"
    };
  },
  methods: {
    handleClick() {},
    handleChange() {}
  }
};
</script>
<style>
</style>
<style scoped>
    .bth-flag {
        width: 80px;
        height: 30px;
        margin-top: 3px;
    }
    .container-end >>> .el-tabs__item {
        border: 1px solid white;
    }
    .container-end >>> .el-tabs__item.is-active {
        background: #4488e9;
    color: white;
    }
    .container-end >>> .el-tabs__header {
        margin: 0px 0px;
    }
    .container-end >>> .el-tabs__nav.is-top {
        background: rgba(238, 238, 238, 1);
    }
    /* 得分开写 */
    .container-top >>> .el-tabs__item {
        border: 1px solid white;
    }
    .container-top >>> .el-tabs__header {
        margin: 0px 0px;
    }
    .container-top >>> .el-tabs__nav.is-top {
        background: rgba(238, 238, 238, 1);
    }
    .container-top >>> .el-tabs__item.is-active {
        background: #4488e9;
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
</style>

<style lang="less" scoped>
// 尝试全部flex 布局 对比效果
.container {
  margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: calc(100% - 70px);
  height: 100%;
  /* width: 100%; 设置版心宽度*/
  width: 1500px;
  min-width: 960px;
  .container-top {
    border: 2px solid rgba(68, 136, 233, 1);
    height: 300px;
    width: 100%;
    .container-top-content {
        display: flex;
        flex-direction: column;
        font-size:13px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(34,34,34,1);
        padding: 2px 9px;
        .content-flag2,.content-flag1 {
            width: 100%;
            height: 80px;
            border: 1px solid rgba(68, 136, 233, 1);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            // align-items: center;
            .first-row{
                display: flex;
                align-items: center;
                li{
                    span{
                        display: inline-block;
                        width: 60px;
                        text-align: right;
                    }
                    .el-select{
                        width: 180px;
                    }
                    margin-left: 15px;
                }
                .row-end-flag{
                    color: #FA8328;
                    margin-left: auto;
                }
            }
            .second-row{
                display: flex;
                align-items: center;
                li{
                    .el-input{
                        width: 180px;
                    }
                    margin-left: 15px;
                    display: flex;
                    span{
                        display: inline-block;
                        width: 60px;
                        text-align: right;
                    }
                }
                .second-row-end{
                    margin-left: 15px;
                    margin-top: 3px;
                }
            }
            .el-input-number{
                width: 180px;
            }
            .el-input-number--small{
                line-height: 18px;
            }
        }
        // 覆盖一部分上述样式
        .content-flag2{
            justify-content: flex-start;
            width: 100%;
            height: 120px;
            margin-top: 8px;
        }
        // .content-flag2 {
        //     width: 100%;
        //     height: 120px;
        //     margin-top: 8px;
        //     border: 1px solid rgba(68, 136, 233, 1);
        //     display: flex;
        //     flex-direction: column;
        //     justify-content: space-around;
        // }
    }
  }
  .container-end {
    margin-top: 10px;
    border: 2px solid rgba(68, 136, 233, 1);
    // flex: 1;
    width: 100%;
    height: calc(100% - 390px);
  }
}
</style>