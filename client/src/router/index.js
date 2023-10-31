import Vue from 'vue'
import Router from 'vue-router'

//Ovenes
import SewingIndex from '@/components/Sewings/Index'
import SewingCreate from '@/components/Sewings/CreateSewing'
import SewingEdit from '@/components/Sewings/EditSewing'
import SewingShow from '@/components/Sewings/ShowSewing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sewings',
      name: 'sewings',
      component: SewingIndex
    },
    {
      path: '/sewing/create',
      name: 'sewing-create',
      component: SewingCreate
    },
    {
      path: '/sewing/edit/:sewingId',
      name: 'sewing-edit',
      component: SewingEdit
    },
    {
      path: '/sewing/:sewingId',
      name: 'sewing',
      component: SewingShow
    }
  ]
})
