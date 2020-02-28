<template>
  <div class="container">
    <el-container style="height: 100%">
        <el-container style="height: 100%">
          <el-main>
            <div class="el-main-container">
              <div class="little-box">员工操作日志</div>
                <div class="top_content">
                  <ul class="top_content_wrap">
                    <li class="li_flag">
                      <span>员工姓名:</span>
                      <el-select class="select-flag" v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </li>
                    <li class="li_flag li_flag_position">
                      <span>时间筛选:</span>
                        <el-select v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </li>
                  </ul>
                </div>
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
      value: '',
      options: [],
      input1: '',
    }
  },
  mounted(){
  },
  methods: {

  }
}
</script>
<style scoped>
  .li_flag>>> .el-input__inner{
      height: 20px;
      border: 1px solid #777777;
      width: 200px;
      border-radius: 0px;
    }
  /* .li_flag >>>.el-input__suffix{
    top: 7px;
  } */
  .li_flag>>> .el-input__icon{
    line-height: 10px;
  }
  .select-flag{
    
  }
</style>
<style lang="less" scoped>
  //至关重要的一个类，然后结合各处的height->100% 从而实现缩放等还原 从而达到缩放的自适应 
  .is-vertical{
    width: 100%;
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
        .little-box{
            position: absolute;
            width:150px;
            height:30px;
            background:rgba(68,136,233,1);
            text-align: center;
            line-height: 30px;
            font-size:14px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(255,255,255,1);
        }
         .top_content{
            width: 100%;
            // overflow: hidden; //缩放页面
            font-size:13px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(34,34,34,1);
            color: #333;
            padding-top: 30px;
            .top_content_wrap{
              height: 30px;
              display: flex;
              align-items: center;
              .li_flag{
                span{
                  width: 80px;
                }
                display: flex;
                align-items: center;
              }
              .li_flag_position{
                margin-left: 20px;
              }
            }
         }
      }
    }
  }
  
</style>