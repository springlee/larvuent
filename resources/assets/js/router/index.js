import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            name: 'home',
            path: '/',
            component: resolve => void(require(['../components/Main.vue'], resolve))
        },
        {
            name: 'test',
            path: '/test',
            component: resolve => void(require(['../components/Test.vue'], resolve))
        },
    ]
});