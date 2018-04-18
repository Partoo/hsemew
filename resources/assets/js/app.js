require('./bootstrap');
window.Vue = require('vue');
import ElementUI from 'element-ui';
import VueSlimScroll from 'vue-slimscroll';
import '../sass/element-vars.scss';
import './plugins/axios';
import VueRouter from 'vue-router';
import routes from './routes.js';
import store from './vuex/store.js';
// import App from './App.vue';

Vue.use(ElementUI);
Vue.use(VueSlimScroll);
Vue.use(VueRouter);


Vue.component('logo', require('./components/Logo.vue'));
Vue.component('register', require('./pages/Auth/register.vue'));
Vue.component('reset', require('./pages/Auth/Reset.vue'));


const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: routes
});


new Vue(Vue.util.extend({router, store})).$mount('#app');