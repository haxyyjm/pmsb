<template>
  <div class="container">
    <el-container style="height: 100%">
        <el-container style="height: 100%">
          <el-aside width="204px" style="background-color: #fff;border: 2px solid #4488E9;">
            <div class="little-box">房务种类</div>
            <el-menu :default-openeds="['1', '2']"  default-active="2" >
              <el-submenu index="1">
                <template slot="title">
                  <span>
                    1.客房打扫
                  </span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">打扫任务</el-menu-item>
                  <el-menu-item index="1-2">打扫干净程度设置</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">2.客房查房</template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">查房任务</el-menu-item>
                  <el-menu-item index="2-2">查房内容</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="3">
                <span slot="title">3.净房检验</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <div class="el-main-container">
              <div class="little-box">打扫任务</div>
                <div class="top_content">
                  <el-radio-group v-model="radio" size="medium">
                    <el-radio-button label="已生成" ></el-radio-button>
                    <el-radio-button label="已下发"></el-radio-button>
                    <el-radio-button label="执行中"></el-radio-button>
                    <el-radio-button label="已完成"></el-radio-button>
                  </el-radio-group>
                </div>
                <!-- tabel -->
                 <el-table :header-cell-style="{fontWeight: '400',background: '#CCCCCC', color: 'rgba(34,34,34,1)',textAlign: 'center'}" :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="序号" ></el-table-column>
                    <el-table-column prop="name" label="后台"></el-table-column>
                    <el-table-column prop="name" label="后台"></el-table-column>
                    <el-table-column prop="name" label="后台"></el-table-column>
                    <el-table-column prop="name" label="后台"></el-table-column>
                    <el-table-column prop="name" label="后台"></el-table-column>
                    <el-table-column prop="name" label="后台"></el-table-column>
                    <el-table-column prop="name" label="后台"></el-table-column>
                </el-table>
            </div>
          </el-main>
          <el-aside width="85px">
            <div class="aside-container">
              <ul>
                <li>
                  <i class="iconfont icon-weibiaoti-"></i>
                  打印
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
      radio: '已生成',
    }
  },
  mounted(){
  },
  methods: {

  }
}
</script>
<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
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
    .little-box{
      height: 30px;
      line-height: 30px;
      color: #FFFFFF;
      padding-left: 20px;
      background:rgba(68,136,233,1);
    }
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
      margin-left: 5px;
      border:2px solid #8957A1;
      color: #333;
      .el-main-container{
        height: 100%;
        .little-box{
            height:30px;
            background:rgba(137,87,161,1);
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
            padding: 5px 3px;
         }
      }
    }
  }
  
</style>