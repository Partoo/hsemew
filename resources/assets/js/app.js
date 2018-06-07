require('./bootstrap');
window.Vue = require('vue');
import VueSlimScroll from 'vue-slimscroll';
import './plugins/axios';
import VueRouter from 'vue-router';
import routes from './routes.js';
import store from './vuex/store.js';
// import App from './App.vue';

require('../iconfont/iconfont.css');
Vue.use(VueSlimScroll);
Vue.use(VueRouter);


Vue.component('logo', require('./components/Logo.vue'));
Vue.component('register', require('./pages/Auth/Register.vue'));
Vue.component('reset', require('./pages/Auth/Reset.vue'));
Vue.component('app', require('./App.vue'));


const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: routes
});


new Vue(Vue.util.extend({router, store})).$mount('#app');
