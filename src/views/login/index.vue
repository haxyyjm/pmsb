<template>
    <div class="login-wrap">
        <!-- :style="{background: 'url(' + img + ')' }"  -->
        <div class="ms-login">
            <div class="ms-title">商务版PMS</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p class="login-tips">Tips : 用户名和密码必填。</p>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      img:require('@/assets/img/login-bg.jpg'),
      ruleForm: {
        username: 'admin',
        password: '123123'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      // 登录成功
      let userInfo = {
        userName: 'hax',
        userId: 1,
        token: '123abc'
      }
      // this.$router.push({
      //   path: '/enter'
      // })
      localStorage.setItem('access-user', JSON.stringify(userInfo.userName));
      console.log('this.$route.path',this.$route.path)
      this.$router.push({ path: '/enter' }, onComplete => { }, onAbort => { })
      console.log('this.$route.path2',this.$route.path)
    }
  }
}
</script>
<style scoped>
    .login-wrap{
      background-image: url('~@/assets/img/login-bg.jpg');
      position:fixed;
      top: 0;
      left: 0;
      width:100%;
      height:100%;
      min-width: 1000px;
      z-index:-10;
      zoom: 1;
      background-repeat: no-repeat;
      background-size: cover;
      -webkit-background-size: cover;
      -o-background-size: cover;
      background-position: center 0;
    }
    .ms-title{
        width:100%;
        line-height: 50px;
        text-align: center;
        font-size:20px;
        border-bottom: 1px solid #ddd;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:350px;
        margin:-190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255,255,255, 0.3);
        overflow: hidden;
    }
    .ms-content{
        padding: 30px 30px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        color:#fff;
    }
</style>
