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

Vue.use(VueRouter)

const routes = [
  {path: '/index', name: '首页', component: pageIndex },
  {path: '/list', name: '官方示例', component: pageList, children:[
      {path: 'list1', name: '基础表单', component: pageList1 }
  ]},
  {path: '/about', name: '系统模板', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') }
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
