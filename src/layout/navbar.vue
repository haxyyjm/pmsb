<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="leftContent">
          <ul class="leftContent_wrap">
            <li @click="$router.back(-1)" class="pointer-flag"><span class="icon-flag"><i class="el-icon-back"></i></span>返回</li>
            <li @click="$router.push('/home')" class="pointer-flag"><span class="icon-flag"><i class="el-icon-s-home"></i></span>主页</li>
            <li>
              <el-input
                size="mini"
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="input1">
              </el-input>
            </li>
            <li>皇冠晶品酒店(上海虹桥店)</li>
          </ul>
        </div>
        <div class="rightContent">
          <ul class="rightContent_wrap">
            <li>消息<span class="icon-flag"><i class="el-icon-message"></i></span></li>
            <li>设置<span class="icon-flag"><i class="el-icon-s-tools"></i></span></li>
            <li>
              <span>2020-01-14</span>
            </li>
            <li>
              星期三
            </li>
            <li>早班</li>
            <li><span class="icon-flag"><i class="el-icon-user-solid"></i></span>管理员</li>
            <li><span style="font-weight: bold;">|</span></li>
            <li>注销</li>
          </ul>
          <!-- 全屏显示 -->
          <!-- <div class="btn-fullscreen" @click="handleFullScreen">
            <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
              <i class="el-icon-rank"></i>
            </el-tooltip>
          </div> -->
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      fullscreen:false,
      input1: ''
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    // 全屏事件
    handleFullScreen () {
      let element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    }
  },
  beforeDestroy () {
    // this.$EventBus.off('testM')
  }
}
</script>
<style scoped>
    .header {
        /* 主容器 */
        /* width: 100%; 设置版心宽度*/
        width: 1500px; 
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        min-width: 960px;
        position: relative;
        height: 34px;
        line-height: 34px;
        font-size: 22px;
        padding-left: 4px;
        padding-right: 18px;
        border-bottom: 1px solid #777777;
    }
    /* .header .leftContent{
        float: left;
        line-height: 30px;
    }
    .rightContent{
        float: right;
        line-height: 30px;
    } */
    .btn-fullscreen{
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
    }
    .btn-bell, .btn-fullscreen{
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
    }
    /* 改造 el-input样式 */
    .leftContent_wrap>>> .el-input__inner{
      height: 20px;
      border: 1px solid #777777;
      width: 173px;
      border-radius: 0px;
    }
</style>
<style lang="less" scoped>
  .header .icon-flag{
    padding: 0px 4px;
  }
  // 头部内容样式
  .leftContent .leftContent_wrap, .rightContent .rightContent_wrap
    {
      display: flex;
      font-size:14px;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(51,51,51,1);
      height: 30px;
      li{
        padding: 3px 4px;
      }
      .pointer-flag{
        cursor: pointer;
      }
    }
</style>