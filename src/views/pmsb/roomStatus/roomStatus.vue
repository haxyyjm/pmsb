<template>
  <div class="container">
    <el-container style="height: 100%">
        <el-header style="height: 30px">
          <div class="top_content">
            <ul class="top_content_wrap">
              <li class="li_flag">
                <span>快速查找:</span>
                <el-input
                  size="mini"
                  placeholder="请输入内容"
                  v-model="input1">
                </el-input>
              </li>
              <li class="li_flag">
                <span>楼层筛选:</span>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </li>
              <li class="li_flag li_flag_position">
                <span>房型筛选:</span>
                  <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </li>
              <li>
                <ul class="little_box_container">
                  <li>
                    <div class="bg1"></div>
                    空净0
                  </li>
                  <li>
                    <div class="bg2"></div>
                    脏房0</li>
                  <li>
                    <div class="bg3"></div>
                    住脏0</li>
                  <li>
                    <div class="bg4"></div>
                    住净0</li>
                  <li>
                    <div class="bg5"></div>
                    维修0</li>
                  <li>
                    <div class="bg6"></div>
                    锁定0</li>
                  <li>
                    <div class="bg6"></div>
                    将到0</li>
                  <li>
                    <div class="bg6"></div>
                    将离0</li>
                  <li>
                    <div class="bg6"></div>
                    钟点0</li>
                </ul>
              </li>
            </ul>
          </div>
        </el-header>
        <el-container style="height: 100%">
          <el-main>
            <div class="room_flag">
              <el-col  :span="2" v-for="(item, index) of room_data" :key="index">
                <div class="boxActive">
                </div>
              </el-col>
            </div>
          </el-main>
          <el-aside width="85px">
            <div class="aside-container">
              <ul>
                <li>
                  <i class="iconfont icontuding"></i>
                  登记
                </li>
                <li>预定</li>
                <li>公安</li>
                <li>制卡</li>
              </ul>
              <div class="aside-end">
                <div>改房态</div>
              </div>
            </div>
          </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value: '',
      options: [],
      input1: '',
      room_data: [{
        room_num: '111'
      },{
        room_num: '222'
      },{
        room_num: '222'
      },{
        room_num: '222'
      }]
    }
  },
  mounted(){
    this.room_data = new Array(20)
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
  .li_flag >>>.el-input__suffix{
    top: 7px;
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
    .el-header {
      .top_content{
        width: 100%;
        // overflow: hidden; //缩放页面
      }
      background: #EEEEEE;
      font-size:13px;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(34,34,34,1);
      color: #333;
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
        // 小方块样式
        .little_box_container{
          margin-left: 5px;
          li{
            display: flex;
            align-items: center;
            width: 66px;
            padding-left: 5px;
            div{
              margin-right: 5px;
              width: 20px;
              height: 20px;
              border: 1px solid;
            }
            .bg1{
              background-color: #0367A6;
            }
            .bg2{
              background-color: #D93D4A;
            }
            .bg3{
              background-color: #F2CB05;
            }
            .bg4{
              background-color: #F49421;
            }
            .bg5{
              background-color: #0DB3D9;
            }
            .bg6{
              background-color: #4488E9;
            }
          }
          display: flex;
          align-items: center;
        }
      }
    }
    
    .el-aside {
      height: calc(100% - 80px);
      background-color: #EEEEEE;
      color: #333;
      .aside-container{
        font-size:13px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        height: 99%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        ul>li, .aside-end>div{
          width: 60px;
          height: 60px;
          border-radius:4px;
          background-color: #3A85E1;
          margin-top: 3px;
        }
      }
    }
    
    .el-main {
      height: calc(100% - 80px);
      padding: 3px;
      border:2px solid rgba(68,136,233,1);
      color: #333;
      .room_flag{
        .boxActive{
          height: 80px;
          margin: 1px 4px 4px 1px; //上右下左
          cursor: pointer;
          background-color: #58D56D;
          border-radius: 5px;
        }
      }
    }
  }
  
</style>>