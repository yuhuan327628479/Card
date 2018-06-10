// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/dist/css/framework7.css';

import axios from 'axios';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app';

import store from './store';

import VueRouter from 'vue-router'


// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7);

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: Routes
})

Vue.prototype.$ajax = axios;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  store.commit('changeowner', 'huanyu');
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

//进入页面路由跳转
let pathArr = location.href.split('/');
let pathRoute = pathArr[pathArr.length - 1];
if(pathRoute == '') {
	router.push({
		path: '/'
	})
}


// Init App
new Vue({
  el: '#app',
  store,
  router,
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes: Routes,
  },
  // Register App Component
  components: {
    app: App
  }
});



