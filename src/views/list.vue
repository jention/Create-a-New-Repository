<template>

    <el-container>
        <el-aside></el-aside>
        <el-main>
            
            <h1>这是一级导航list页面</h1>
            <router-view></router-view>
        </el-main>
        
    </el-container>
    
</template>

   

<script>
        export default {
            data(){
                return {
                    
                }
            },
            methods: {
                
            },
            mounted(){
                // this.getParDoc();
                
            }
        }
</script>