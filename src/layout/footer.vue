<template>
    <div class="container-wrap">
        <ul>
            <li>
                <span>房态</span>
            </li>
            <li>
                <span>房务</span>
            </li>
            <li>
                <span>账务</span>
            </li>
            <li>
                <span>报表</span>
            </li>
            <li>
                <span>制卡</span>
            </li>
            <li>
                <span>预定</span>
            </li>
            <li>
                <span>入住</span>
            </li>
            <li>
                <span>夜审</span>
            </li>
            <li>
                <span>交接班</span>
            </li>
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
        position:absolute;
        bottom:0;
        width:100%;
        height:78px;   /* 底部高度 */
        ul{
            display: flex;
            height:78px;   /* 底部高度 */
            align-items:center;
            justify-content:center;
            li{
                margin-left: 30px; 
                text-align: center;
                line-height: 50px;
                width:50px;
                height:50px;
                background:rgba(255,255,255,1);
                border:1px solid rgba(204,204,204,1);
                font-size:12px;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(34,34,34,1);
            }
        }
    }
</style>