<template>
  <div id="app" class="index-page">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->

        <el-container>
            <el-header class="clearfix">

                <h1 class="fl el-h-title pr30">示例系统</h1>
                <div class="fl">
                    
                    <el-menu router :default-active="$route.path" ref="headerNav" class="el-menu-demo"mode="horizontal"@select="handleSelect">
                        <template v-for="(item,index) in $router.options.routes">
                            
                            <el-submenu v-if="item.children != undefined" :index="index+''" :key="item.name" >
                                <template slot="title">{{ item.name }}</template>
                                <!-- 二级start -->
                                <template v-for="itChi in item.children">
                                    
                                    <el-menu-item :index="item.path+'/'+itChi.path" :key="itChi.name" >{{ itChi.name }}</el-menu-item>
                                </template>
                                <!-- 二级end -->
                            </el-submenu>
                            <el-menu-item v-else :index="item.path" :key="item.name" >{{ item.name }}</el-menu-item>

                        </template>
                    </el-menu>

                </div>
                <!-- <div> -->
                <el-dropdown class="fr"  @command="handleCommand">
                    <span class="el-dropdown-link">
                        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="unav in userDown" :command="unav.name">{{ unav.name }}</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <!-- </div> -->

            </el-header>
            <el-main :style="'height:'+ viewHei +'px;'" class="ohbox">

                <el-tabs v-model="tagActiveName" @tab-click="tagHandleClick" class="pl16 pr16" @tab-remove="removeTab" @edit="editTab">
                    <template v-for="(tagObj,index) in tagList" >
                        <el-tab-pane v-if="tagObj.path == '/index'" :label="tagObj.name" :name="tagObj.path" :key="index"></el-tab-pane>
                        <el-tab-pane v-else closable :label="tagObj.name" :name="tagObj.path" :key="index"></el-tab-pane>
                    </template>
                  </el-tabs>

                <!-- <iframe id="chiIframe" ref="chiIframe" name="chiIframe" :src="'page/'+tagActiveName+'.html'" height="100%" width="100%" border="0" frameborder="0"></iframe> -->
                <router-view  ref="child"></router-view>

            </el-main>
        </el-container>



  </div>
</template>

<script>

    export default {
      data(){
        return {
                message: 'Hello Vue!',
                // activeIndex2: '1',     //头部导航默认选择区块
                viewHei: 500,      //main高度，默认初始化自适应识别高度值
                tagActiveName: '/index',     //tag默认选择区块，及绑定iframe地址文件名称
                tagList:[                   //tag默认数据
                    {name:'首页',path:'/index'}
                ],
                userDown : [    //人员下拉框数据
                    {name:'修改密码',fun:'console.log("1");'},
                    {name:'待办事务',fun:'console.log("2");'},
                    {name:'修改皮肤',fun:'console.log("3");'},
                    {name:'退出系统',fun:'console.log("4");'}
                ]
                
            }
        },
        name: 'HelloWorld',
        props: {
            msg: String
        },

        methods:{
            rouTo(o,data = {}){
                this.$router.push({  //核心语句
                    path:o,   //跳转的路径
                    query:data
                })
            },
            openFullScreen() {      //页面加载的动画
                this.fullscreenLoading = true;
                setTimeout(() => {
                  this.fullscreenLoading = false;
                }, 2000);
            },
            handleSelect(key, keyPath) {   //头部菜单的点击事件
                // 同步tag数据start
                let key1 = this.vtp.returnRootPathStr(key);
                let isTagData = this.vtp.fildata(this.tagList,key1,'headerNavJson');
                let data = this.vtp.fildata(this.$router.options.routes,key1,'headerNavJson');
                if(isTagData[0] == null){
                    let addData = {name:data[0].name,path:key1};
                    this.tagList.push(addData)
                }
                this.vtp.rem('headerNavJson');
                // 同步tag数据end
            },
             handleCommand(command) {   //人员下拉框的点击事件
                this.$message('click on item ' + command);
            },
            removeTab(tag) {      //tag标签关闭
                //页签关闭自动跳转首页页签start
                this.tagList.splice(this.tagList.indexOf(tag), 1);
                this.rouTo('/index');
                //页签关闭自动跳转首页页签end
            },
            tagHandleClick(tab, event) {    //tag菜单点击事件
                // 头部导航同步tag页面切换start
                let d =this.vtp.fildata(this.$router.options.routes,tab.name,'tabName');
                this.rouTo(this.vtp.get('routerHoy')[d[2]]);
                this.vtp.rem('tabName');
                // 头部导航同步tag页面切换end
                // this.$message('你点击了：'+tab, event);
            },
            editTab(targetName, action){    //tabs页签变动触发事件
                this.$message('你操作了TABS' + targetName);
            }
        },
        mounted(){

            
        },
        created(){
            // console.log(this.tagActiveName);
            // 初始化以及导航最后一条记录start
            let data = [];
            let hoyNum = this.vtp.fildata(this.$router.options.routes,this.tagActiveName,'initName');
            data[hoyNum[2]] = this.$route.path;
            this.vtp.set('routerHoy',data);
            this.vtp.rem('initName');
            // 初始化以及导航最后一条记录end
            // 初始化视口可视化大小start
            this.viewHei = this.vtp.winHei(60);
            // this.$store.viewHei = this.viewHei;
            // this.vtp.set('indexViewHei',this.viewHei);
            window.onresize = () => {
                this.viewHei = this.vtp.winHei(60);
                // this.vtp.set('indexViewHei',this.viewHei);
                //同步子组件内的自适应高度start
                this.$refs.child.parMainHei = this.vtp.winHei(109);
                this.$refs.child.$refs.children.chiAutoHeiFun(this.viewHei);
                //同步子组件内的自适应高度end
               // console.log(this.$refs.child.$refs.children.parViewHei);
            }

            // 初始化视口可视化大小end
        },
        watch:{
            $route(to,from){
                //监听路由变化修改TAG栏的值start
                this.tagActiveName = this.vtp.returnRootPathStr(this.$route.path);
                //监听路由变化修改TAG栏的值end
                //tab切换的历史记录查询与修改start
                let hoyData = this.vtp.get('routerHoy');
                let hoyNum = this.vtp.fildata(this.$router.options.routes,this.vtp.returnRootPathStr(this.$route.path),'navHoy');
                if(hoyData == null){
                    let data = [];
                    data[hoyNum[2]] = this.$route.path;
                    this.vtp.set('routerHoy',data);
                }else{
                    if(hoyData[hoyNum[2]] != this.$route.path){
                        hoyData[hoyNum[2]] = this.$route.path;
                    }
                    this.vtp.set('routerHoy',hoyData);
                }
                this.vtp.rem('navHoy');
                //tab切换的历史记录查询与修改end
            }
        },
        destroyed() {
            //清除tab切换历史记录start
            this.vtp.rem('routerHoy');
            this.vtp.rem('indexViewHei');
            //清除tab切换历史记录end
        }
    }

</script>

<style lang="style">

</style>
