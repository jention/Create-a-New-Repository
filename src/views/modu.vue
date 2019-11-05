<template>

    <el-container :style="'height:'+parMainHei+'px;'">
        <el-aside width="auto" class="animate-box">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
              <el-radio-button :label="false" v-show="isCollapse">展开</el-radio-button>
              <el-radio-button :label="true" v-show="!isCollapse">收起</el-radio-button>
            </el-radio-group>
            <!-- <transition name="el-fade-in-linear"> -->
            <el-menu router :default-active="$route.path" class="el-menu-vertical-demo h100p ohabox" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <!-- <el-menu  default-active="1-4-1" class="el-menu-vertical-demo h100p ohabox" @open="handleOpen" @close="handleClose" :collapse="isCollapse"> -->
                    <template v-for="(item,index) in parData">
                        
                        <!-- <el-menu-item index="2"> <i class="el-icon-menu"></i> <span slot="title">导航二</span> </el-menu-item> -->
                        <el-menu-item :index="parStri[0]+'/'+item.path"> <i class="el-icon-menu"></i><span slot="title">{{ item.name }}</span></el-menu-item>
                        <el-submenu v-if="item.children != undefined" :index="parStri[0]+'/'+item.path">
                          <template slot="title">{{ item.name }}</template>
                                <!-- 二级start -->
                                <template v-for="(itchi,index) in item.children">
                        
                                    <el-submenu v-if="itchi.children != undefined" :index="parStri[0]+'/'+item.path+'/'+itchi.path">
                                      <template slot="title">{{ itchi.name }}</template>
                                            
                                            <!-- 三级start -->
                                            <template v-for="(itcchi,index) in itchi.children">
                                    
                                                <el-submenu v-if="itcchi.children != undefined" :index="parStri[0]+'/'+item.path+'/'+itchi.path+'/'+itcchi.path">
                                                  <template slot="title">{{ itcchi.name }}</template>
                                                        <!-- 三级start -->
                                                        <template v-for="(itccchi,index) in itcchi.children">
                                                            <el-menu-item :index="parStri[0]+'/'+item.path+'/'+itchi.path+'/'+itcchi.path+'/'+itccchi.path">{{ itccchi.name }}</el-menu-item>
                                                        </template>
                                                        <!-- 三级end -->
                                                </el-submenu>
                                                <el-menu-item v-else :index="parStri[0]+'/'+item.path+'/'+itchi.path+'/'+itcchi.path">{{ itcchi.name }}</el-menu-item>

                                            </template>
                                            <!-- 三级end -->

                                    </el-submenu>
                                    <el-menu-item v-else :index="parStri[0]+'/'+item.path+'/'+itchi.path">{{ itchi.name }}</el-menu-item>

                                </template>
                                <!-- 二级end -->

                        </el-submenu>

                    </template>
                </el-menu>
            <!-- </transition> -->
        </el-aside>
        <el-main class="page-children">
            
            <router-view  ref="children"></router-view>
        </el-main>
        
    </el-container>
    
</template>

   

<script>
        export default {
            data(){
                return {
                    parStri : [],
                    parData : [],
                    isCollapse: false,
                    parMainHei : this.vtp.winHei(109)
                }
            },
            methods: {
                handleOpen(key, keyPath) {
                    console.log(key, keyPath);
                },
                handleClose(key, keyPath) {
                    console.log(key, keyPath);
                },
                pageLoadInit(){
                    // 获取二级以后导航start
                    this.parStri[0] =  this.vtp.getBeforeStr(this.$route.path);     //父页面路由path
                    this.parStri[2] =  this.vtp.getAfterStr(this.$route.path,0);     //子页面路由path
                    this.parData = this.$router.options.routes[this.vtp.fildata(this.$router.options.routes,this.parStri[0])[2]].children;
                    // 获取二级以后导航end
                }
            },
            mounted(){
                 this.pageLoadInit();
                
            },
            watch:{
              $route(to,from){
                this.pageLoadInit();
              }
            }
        }
</script>