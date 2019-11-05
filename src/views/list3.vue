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
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              fixed
              prop="date"
              label="日期"
              width="150">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="province"
              label="省份"
              width="120">
            </el-table-column>
            <el-table-column
              prop="city"
              label="市区"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="300">
            </el-table-column>
            <el-table-column
              prop="zip"
              label="邮编"
              width="120">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>

        <!-- <input type="text" name="" v-model="parViewHei" placeholder=""> -->

    </div>
</template>

    <script>
        export default {
            data(){
                return {
                    parPage : null,     //初始页面必备参数，存储父页面对象
                    parViewHei : 0,      //初始页面必备参数，存储父页面对象
                    formInline: {
                      user: '',
                      region: ''
                    },
                    tableData: [{
                      date: '2016-05-03',
                      name: '王小虎',
                      province: '上海',
                      city: '普陀区',
                      address: '上海市普陀区金沙江路 1518 弄',
                      zip: 200333
                    }, {
                      date: '2016-05-02',
                      name: '王小虎',
                      province: '上海',
                      city: '普陀区',
                      address: '上海市普陀区金沙江路 1518 弄',
                      zip: 200333
                    }, {
                      date: '2016-05-04',
                      name: '王小虎',
                      province: '上海',
                      city: '普陀区',
                      address: '上海市普陀区金沙江路 1518 弄',
                      zip: 200333
                    }, {
                      date: '2016-05-01',
                      name: '王小虎',
                      province: '上海',
                      city: '普陀区',
                      address: '上海市普陀区金沙江路 1518 弄',
                      zip: 200333
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
                handleClick(row) {
                    console.log(row);
                }
            },
            mounted(){
                
            }
        }
    </script>