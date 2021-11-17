import Vue from 'vue'
import Router from 'vue-router'
import Files from '@/components/Files'
import AddFile from '@/components/AddFile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Files',
      component: Files
    },
    {
      path: '/add-file',
      name: 'AddFile',
      component: AddFile
    }
  ],
  mode: 'history'
})
