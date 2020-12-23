import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import home from '../page/home/home.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', // 默认页面重定向到主页
      redirect: '/home' // 重定向
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
});
