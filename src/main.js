import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../public/css/style.css'
import vtp from '../public/js/tipconm.js'
import VueResource from 'vue-resource'


Vue.use(ElementUI);
Vue.use(VueResource);
Vue.prototype.vtp = vtp;
// Vue.use(router);

router.beforeEach((to, from, next) => {
// router.beforeEach((to, from, next) => {
  if (to.matched.length ===0) {  //如果未匹配到路由
    from.name ? next({ name:from.name }) : next('/index');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next();    //如果匹配到正确跳转
  }
// });
});

Vue.http.options.root = store.state.httpLocation;
Vue.http.options.emulateJSON = true;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
