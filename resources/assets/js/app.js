
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


import App from './components/github/App.vue';
import router from './router/router.js';
import ElementUI from 'element-ui';
import store from './store/store'
import axios from './http/http.js'


Vue.prototype.axios = axios;

Vue.use(ElementUI);

const app = new Vue({
    el: '#app',
    axios,
    router,
    store,
    render: h => h(App)
});


