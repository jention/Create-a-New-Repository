<template>
    <div v-cloak>
        
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item class="mb10" label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item class="mb10" label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="mb10">
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>

        <el-table
            :data="tableData3"
            height="250"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>

        <!-- <input type="text" name="" v-model="parViewHei" placeholder=""> -->

    </div>
</template>

    
    <script>
        export default {
            // name: '#chiPage',
            data(){
                return {
                    parPage : null,     //初始页面必备参数，存储父页面对象
                    parViewHei : 0,      //初始页面必备参数，存储父页面对象
                    formInline: {
                      user: '',
                      region: ''
                    },
                    tableData3: [{
                      date: '2016-05-03',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                      date: '2016-05-02',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                      date: '2016-05-04',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                      date: '2016-05-01',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                      date: '2016-05-08',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                      date: '2016-05-06',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                      date: '2016-05-07',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                    }]

                }
            },
            mounted(){
                // let obj1=window.frames["child"];
                // console.log(this.$parent.pageName);
            },
            methods: {
                onSubmit() {
                    console.log('submit!');
                },
                chiFun(){
                    this.$message('你进入了list2');
                }
            },
            mounted(){
                
            }
        }
    </script>