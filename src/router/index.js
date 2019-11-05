import Vue from 'vue'
import VueRouter from 'vue-router'
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
import Home from '../views/Home.vue'

import pageIndex from '../views/index.vue'
import pageList from '../views/list.vue'
import pageList1 from '../views/list1.vue'
import pageList2 from '../views/list2.vue'
import pageList3 from '../views/list3.vue'
import pageList4 from '../views/list4.vue'
import pageList5 from '../views/list5.vue'
import pageList6 from '../views/list6.vue'
import pageList7 from '../views/list7.vue'
import pageList8 from '../views/list8.vue'
import pageList9 from '../views/list9.vue'
import pageList10 from '../views/list10.vue'
import pageList11 from '../views/list11.vue'
// import pageList12 from 

import pageModu from '../views/modu.vue'
import pageModu1 from '../views/modu1.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/index', name: '首页', component: pageIndex },
  {path: '/list', name: '官方示例', component: pageList, children:[
      {path: 'list1', name: '基础表单', component: pageList1 },
      {path: 'list2', name: '固定表头', component: pageList2 },
      {path: 'list3', name: '固定列', component: pageList3 },
      {path: 'list4', name: '固定表头+列', component: pageList4 },
      {path: 'list5', name: '多级表头', component: pageList5 },
      {path: 'list6', name: '单选表格', component: pageList6 },
      {path: 'list7', name: '多选表格', component: pageList7 },
      {path: 'list8', name: '排序表格', component: pageList8 },
      {path: 'list9', name: '状态表格', component: pageList9 },
      {path: 'list10', name: '展开表格', component: pageList10 },
      {path: 'list11', name: '合计表格', component: pageList11 },
      {path: 'list12', name: '合并行+列表格', component : () => import ('../views/list12.vue') },
  ]},
  {path: '/modu', name: '系统模板', component: pageModu,children:[
      {path: 'modu1', name: '普遍列表', component: pageModu1 },
      {path: 'modu2', name: '多行表头', component:  () => import ('../views/modu2.vue') },
  ] }
]

// console.log(vtp.get('headerNav'));
// Object.keys(Vue.headerList).forEach(item=>{
 
//     routes.push({
 
//         path: `/${pages[item].name}`,
//         name: pages[item].name,
//         component: pages[item]
//     })
// });





const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
