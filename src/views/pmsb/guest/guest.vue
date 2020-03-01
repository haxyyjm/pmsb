<template>
  <div class="container">
    <el-container style="height: 100%">
        <el-container style="height: 100%">
          <el-main>
            <div class="el-main-container">
               <el-tabs v-model="activeName2" type="card"  @tab-click="handleClick">
                  <el-tab-pane label="在住客人" name="first">
                      <div class="container-top-content">
                          <ul class="top_content_wrap">
                              <li>
                                  <span>房号筛选:</span>
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
                                  <span>姓名筛选:</span>
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
                                <span>入住时间:</span>
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
                                <span>离店时间:</span>
                                <el-select class="select-flag" v-model="value" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                              </li>
                          </ul>
                          <!-- tabel -->
                          <el-table :header-cell-style="{fontWeight: '400',background: '#CCCCCC', color: 'rgba(34,34,34,1)',textAlign: 'center'}" :data="tableData" style="width: 100%">
                              <el-table-column prop="date" label="订单号" ></el-table-column>
                              <el-table-column prop="name" label="房间号"></el-table-column>
                              <el-table-column prop="name" label="客人信息"></el-table-column>
                              <el-table-column prop="name" label="房间类型"></el-table-column>
                              <el-table-column prop="name" label="总消费"></el-table-column>
                              <el-table-column prop="name" label="总付款"></el-table-column>
                              <el-table-column prop="name" label="到达时间"></el-table-column>
                              <el-table-column prop="name" label="离店时间"></el-table-column>
                              <el-table-column prop="name" label="操作"></el-table-column>
                          </el-table>
                      </div>
                  </el-tab-pane>
                  <el-tab-pane label="已离店客人" name="second">已离店客人</el-tab-pane>
                  <el-tab-pane label="黑名单" name="third">黑名单</el-tab-pane>
              </el-tabs>
            </div>
          </el-main>
          <el-aside width="85px">
            <div class="aside-container">
              <ul>
                <li>
                  <i class="iconfont icon-renyuandengji"></i>
                  查询
                </li>
                <li>
                  <i class="iconfont icon-weibiaoti-"></i>
                  打印
                </li>
                <li>
                  <i class="iconfont icon-gongan"></i>
                  导出Excel
                </li>
              </ul>
            </div>
          </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'daily',
  data(){
    return {
      tableData: [],
      value: '',
      options: [],
      input1: '',
      activeName2: 'first',
    }
  },
  mounted(){
  },
  methods: {

  }
}
</script>
<style scoped>
    .el-main-container>>> .el-tabs__item {
       border: 1px solid white; 
    }
    .el-main-container>>> .el-tabs__item.is-active {
        background: #4488E9;
        color: white;
    }
    .el-main-container>>> .el-tabs__header {
        margin: 0px 0px;
    }
    .el-main-container>>> .el-tabs__nav.is-top{
        background:rgba(238,238,238,1);
    }
    /* 得分开写 */
    .container>>> .el-tabs__item {
       border: 1px solid white; 
    }
    .container>>> .el-tabs__header {
        margin: 0px 0px;
    }
    .container>>> .el-tabs__nav.is-top{
        background:rgba(238,238,238,1);
    }
    .container>>> .el-tabs__item.is-active {
        background: #4488E9;
        color: white;
    }
    /* 改造 el-input样式 */
    .container-top-content>>> .el-input__inner{
        height: 20px;
        border: 1px solid #777777;
        width: 150px;
        border-radius: 0px;
    }
    .container-top-content>>> .el-input__icon{
        line-height: 10px;
    }
</style>
<style lang="less" scoped>
  //至关重要的一个类，然后结合各处的height->100% 从而实现缩放等还原 从而达到缩放的自适应 
  .is-vertical{
    width: 100%;
  }
  .common-head{
    font-size:13px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(34,34,34,1);
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
  .container{
    height: 100%;
    /* width: 100%; 设置版心宽度*/
    width: 1500px; 
    margin: 0 auto;
    min-width: 960px;
    .el-aside {
      height: calc(100% - 80px);
      background-color: #EEEEEE;
      color: #333;
      .aside-container{
        .iconfont{
          font-size: 35px;
        }
        font-size:13px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        height: 98%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        ul>li{
          cursor: pointer;
          width: 60px;
          height: 60px;
          border-radius:4px;
          background-color: #3A85E1;
          margin-top: 3px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
    
    .el-main {
      height: calc(100% - 80px);
      padding: 0px;
      border:2px solid rgba(68,136,233,1);
      color: #333;
      .el-main-container{
        height: 100%;
        .container-top-content>.top_content_wrap{
            .common-head
        }
      }
    }
  }
  
</style>