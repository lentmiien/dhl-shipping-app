import Vue from 'vue';
import Router from 'vue-router';
import UploadPage from '@/views/UploadPage.vue';
import BatchPage from '@/views/BatchPage.vue';
import PrintPage from '@/views/PrintPage.vue';
import MonitorPage from '@/views/MonitorPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: UploadPage },
    { path: '/batch', component: BatchPage },
    { path: '/print', component: PrintPage },
    { path: '/monitor', component: MonitorPage }
  ]
});
