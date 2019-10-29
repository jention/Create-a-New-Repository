<template>
    <div id="chiPage" v-cloak>
        
        <el-row :gutter="20" class="pt20">
            <el-col :span="4"><div class="grid-content bg-purple">
                <p class="grid-c-title">值班人员汇总</p>
                <p class="grid-c-number">23652</p>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">
                <p class="grid-c-title">值班人员汇总</p>
                <p class="grid-c-number">23652</p>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">
                <p class="grid-c-title">值班人员汇总</p>
                <p class="grid-c-number">23652</p>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">
                <p class="grid-c-title">值班人员汇总</p>
                <p class="grid-c-number">23652</p>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">
                <p class="grid-c-title">值班人员汇总</p>
                <p class="grid-c-number">23652</p>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">
                <p class="grid-c-title">值班人员汇总</p>
                <p class="grid-c-number">23652</p>
            </div></el-col>
        </el-row>

        <!-- <input type="text" name="" v-model="parViewHei" placeholder=""> -->

    </div>
</template>

    

    <script>
        export default {
            data(){
                return {
                    parPage : null,
                    bodyClass : '',
                    message: '这是默认首页',
                    parViewHei : 0
                }
            },
            mounted(){
                // let obj1=window.frames["child"];
                // console.log(this.$parent.pageName);
            },
            methods: {
                chiFun(){
                    this.$message('你进入了首页');
                },
                getParDoc(){    //获取父页面vue示例
                    // this.parPage = window.parent.app;
                    // 以下实时同步iframe视口大小
                    // this.parViewHei = this.parPage.viewHei;
                    // window.onresize = () => {
                    //     this.parViewHei = this.parPage.viewHei;
                    // }

                    // this.parPage.getChiDoc();//执行父页面方法
                }
            },
            mounted(){
                // this.getParDoc();
                
            }
        }
    </script>