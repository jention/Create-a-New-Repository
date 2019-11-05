<template>
  <div id="app1" class="index-page">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->

        <el-container>
            <el-header class="clearfix">

                <h1 class="fl el-h-title pr30">示例系统</h1>
                <div class="fl">
                    
                    <el-menu :default-active="tagActiveName" ref="headerNav" class="el-menu-demo"mode="horizontal"@select="handleSelect">
                        <template v-for="item in list">
                            
                            <el-submenu v-if="item.child != undefined" :index="item.file" :key="item.id" >
                                <template slot="title">{{ item.name }}</template>
                                <!-- 二级start -->
                                <template v-for="itChi in item.child">
                                    <el-submenu v-if="itChi.child != undefined" :index="itChi.file" :key="itChi.id" >
                                        <template slot="title">{{ itChi.name }}</template>
                                        <!-- 三级start -->
                                        <template v-for="itCchi in itChi.child">
                                            <el-submenu v-if="itCchi.child != undefined" :index="itCchi.file" :key="itCchi.id" >
                                                <template slot="title">{{ itCchi.name }}</template>

                                                <!-- 四级start -->
                                                <template v-for="itCcchi in itCchi.child">
                                                    <el-submenu v-if="itCcchi.child != undefined" :index="itCcchi.file" :key="itCcchi.id" >
                                                        <template slot="title">{{ itCcchi.name }}</template>

                                                        

                                                    </el-submenu>
                                                    <el-menu-item v-else :index="itCcchi.file" :key="itCcchi.id" >{{ itCcchi.name }}</el-menu-item>
                                                </template>
                                                <!-- 四级end -->

                                            </el-submenu>
                                            <el-menu-item v-else :index="itCchi.file" :key="itCchi.id" >{{ itCchi.name }}</el-menu-item>
                                        </template>
                                        <!-- 三级end -->
                                    </el-submenu>
                                    <el-menu-item v-else :index="itChi.file" :key="itChi.id" >{{ itChi.name }}</el-menu-item>
                                </template>
                                <!-- 二级end -->
                            </el-submenu>
                            <el-menu-item v-else :index="item.file" :pageid="item.id" :key="item.id" >{{ item.name }}</el-menu-item>

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
                    <template v-for="tagObj in tagList" >
                        <el-tab-pane v-if="tagObj.file == 'index'" :label="tagObj.name" :name="tagObj.file" :key="tagObj.id"></el-tab-pane>
                        <el-tab-pane v-else closable :label="tagObj.name" :name="tagObj.file" :key="tagObj.id"></el-tab-pane>
                    </template>
                  </el-tabs>

                <!-- <iframe id="chiIframe" ref="chiIframe" name="chiIframe" :src="'page/'+tagActiveName+'.html'" height="100%" width="100%" border="0" frameborder="0"></iframe> -->
                <router-view/>

            </el-main>
        </el-container>



  </div>
</template>

<script >
    export default {
      data(){
        return {
                fullscreenLoading : false,
                message: 'Hello Vue!',
                // activeIndex2: '1',     //头部导航默认选择区块
                viewHei: 500,      //main高度，默认初始化自适应识别高度值
                tagActiveName: 'index',     //tag默认选择区块，及绑定iframe地址文件名称
                tagList:[                   //tag默认数据
                    {id:'1',name:'首页',file:'index'}
                ],
                // pageName: 'index',
                list : [        //默认头部导航数据
                    {id:'1',parId:'0',file:'index',name:'首页',icon:'el-icon-share'},
                    {id:'2',parId:'0',file:'list',name:'官方示例',icon:'el-icon-share',child:[
                        {id:'2-1',parId:'2',file:'list1',name:'二级-常见表单'},
                        {id:'2-2',parId:'2',file:'list2',name:'二级-表格固定表头'},
                        {id:'2-3',parId:'2',file:'list3',name:'二级-表格固定列'},
                        {id:'2-4',parId:'2',file:'list4',name:'常用列表3',child:[
                            {id:'2-4-2',parId:'2-4',file:'list4-1',name:'三级常用菜单2',child:[
                                {id:'2-4-2-1',parId:'2-4-2',file:'list4-1-1',name:'三级常用菜单1'},
                                {id:'2-4-2-2',parId:'2-4-2',file:'list4-1-2',name:'三级常用菜单2'}
                            ]}
                        ]}
                    ]},
                    {id:'3',parId:'0',file:'module',name:'开发模板',icon:'el-icon-share',child:[
                        {id:'3-1',parId:'3',file:'module1',name:'数据列表-modu-1'},
                        {id:'3-2',parId:'3',file:'module2',name:'未读消息'},
                        {id:'3-3',parId:'3',file:'module3',name:'全部消息'}
                    ]},
                ],
                userDown : [    //人员下拉框数据
                    {name:'修改密码',fun:'console.log("1");'},
                    {name:'待办事务',fun:'console.log("2");'},
                    {name:'修改皮肤',fun:'console.log("3");'},
                    {name:'退出系统',fun:'console.log("4");'}
                ],
                child : null,    //iframe内的vue示例，界面初始化同步
                headerList : [
                    {path: '/', name: 'home', component: require('./views/index.vue')},
                    {path: '/demo1', name: 'demo1', component: require('./views/index.vue')},
                    {path: '/demo2', name: 'demo2', component: require('./views/index.vue')},
                    {path: '/demo3', name: 'demo3', component: require('./views/index.vue')},
                    {path: '/demo4', name: 'demo4', component: require('./views/index.vue')},
                    {path: '/demo5', name: 'demo5', component: require('./views/index.vue')},
                    {path: '/demo6', name: 'demo6', component: require('./views/index.vue')},
                    {path: '/demo7', name: 'demo7', component: require('./views/index.vue')},
                  {
                    path: '*',
                    redirect: '/'
                  }
                ]
        }
      },
      name: 'HelloWorld',
      props: {
        msg: String
      },
      methods:{
          openFullScreen() {      //页面加载的动画
                    this.fullscreenLoading = true;
                    setTimeout(() => {
                      this.fullscreenLoading = false;
                    }, 2000);
                },
                handleSelect(key, keyPath) {   //头部菜单的点击事件
                    // 同步tag数据start
                    let isTagData = vtp.fildata(this.tagList,key);
                    let data = vtp.fildata(this.list,key);
                    data = data[0];
                    if(isTagData[0] == null){
                        let addData = {id:data.id,name:data.name,file:data.file};
                        this.tagList.push(addData)
                    }
                    this.tagActiveName = data.file;
                    vtp.rem(isTagData[1]);
                    // 同步tag数据end
                },
                 handleCommand(command) {   //人员下拉框的点击事件
                    this.$message('click on item ' + command);
                },
                getChiDoc() {   //获取子页面vue示例
                    // alert();
                    setTimeout(function(){
                        this.child = window.frames["chiIframe"].chiPage;
                        // console.log(this.child)
                        this.child.chiFun();
                    }, 100);
                },
                removeTab(tag) {      //tag标签关闭
                    this.tagList.splice(this.tagList.indexOf(tag), 1);
                    this.tagActiveName = 'index';
                },
                tagHandleClick(tab, event) {    //tag菜单点击事件
                    this.$message('你点击了：'+tab, event);
                },
                editTab(targetName, action){    //tabs页签变动触发事件
                    this.$message('你操作了TABS' + targetName);
                }
      },
      mounted(){
        this.viewHei = vtp.winHei(60);
        window.onresize = () => {
            this.viewHei = vtp.winHei(60);
        }

        // 初始化导航数据
        vtp.set('headerNav',this.headerList);
      },
      created(){
        // console.log(this.$router.options.routes);
        this.$router.options.routes = this.headerList;
        console.log(this.$router.options.routes);
      }
    }

</script>

<style lang="style">

</style>
