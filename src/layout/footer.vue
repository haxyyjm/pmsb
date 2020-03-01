<template>
    <div class="container-wrap">
        <ul>
            <router-link class="hoverClass" :to="{name: 'roomStatus'}" tag="li">
                <i class="el-icon-s-goods"></i>
                <span>房态</span>
            </router-link>
            <router-link class="hoverClass" :to="{name: 'roomService'}" tag="li">
                <i class="el-icon-s-goods"></i>
                <span>房务</span>
            </router-link>
            <router-link class="hoverClass" :to="{name: 'account'}" tag="li">
                <i class="el-icon-s-goods"></i>
                <span>账务</span>
            </router-link>
            <router-link class="hoverClass" :to="{name: 'report'}" tag="li">
                <i class="el-icon-s-goods"></i>
                <span>报表</span>
            </router-link>
            <li class="hoverClass">
                <i class="el-icon-s-goods"></i>
                <span>制卡</span>
            </li>
            <router-link class="hoverClass" :to="{name: 'preview'}" tag="li">
                <i class="el-icon-s-goods"></i>
                <span>预定</span>
            </router-link>
            <router-link class="hoverClass" :to="{name: 'live'}" tag="li">
                <i class="el-icon-s-goods"></i>
                <span>入住</span>
            </router-link>
           <router-link class="hoverClass" :to="{name: 'nightAudit'}" tag="li">
                <i class="el-icon-s-goods"></i>
                <span>夜审</span>
            </router-link>
            <li class="hoverClass">
                <i class="el-icon-s-goods"></i>
                <span>交接班</span>
            </li>
            <router-link class="hoverClass" :to="{name: 'daily'}" tag="li">
                <i class="el-icon-s-goods"></i>
                <span>日志</span>
            </router-link>
            <router-link class="hoverClass" :to="{name: 'guest'}" tag="li">
                <i class="el-icon-s-goods"></i>
                <span>宾客</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'common-footer',
    data(){
        return {

        }
    }    
}
</script>

<style scoped>

</style>

<style lang="less" scoped>
    .container-wrap{
        width: 100%;
       /* width: 100%; 设置版心宽度*/
        // width: 1500px; 
        // margin: 0 auto;
        min-width: 960px;
        position: fixed;
        bottom:0;
        height:78px;   /* 底部高度 */
        ul{
            .hoverClass{
                cursor: pointer;
            }
            display: flex;
            height:78px;   /* 底部高度 */
            align-items:center;
            justify-content:center;
            li{
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 30px; 
                text-align: center;
                // line-height: 50px;
                width:50px;
                height:50px;
                background:rgba(255,255,255,1);
                border:1px solid rgba(204,204,204,1);
                font-size:12px;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(34,34,34,1);
                .el-icon-s-goods{
                 
                }
            }
        }
    }
</style>