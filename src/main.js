// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
let Bootstrap = require('bootstrap')
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

//import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Hello from './components/Hello.vue'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)


const routes = [
	{path: '/', component: Home},
	{path: '/hello', component: Hello},
	{path: '/Home', component: Home},
	{path: '/time-entries', component: TimeEntries, 
		children: [{path: 'log-time', component: LogTime}]
	},
	{path: '*', redirect: '/Home'} //any invalid route will redirect to home
];

const router = new VueRouter ({
	routes: routes,
	//mode: 'history' --> uncomment to clean up the url /#/hello becomes /hello
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
