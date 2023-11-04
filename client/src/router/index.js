import Vue from 'vue'
import Router from 'vue-router'

// Index
import Index from '@/components/Medicine/Index'

// Antacids
import AntacidsIndex from '@/components/Medicine/Index/IndexAntacids'
import AntacidsCreate from '@/components/Medicine/Create/CreateAntacids'
import AntacidsEdit from '@/components/Medicine/Edit/EditAntacids'
import AntacidsShow from '@/components/Medicine/Show/ShowAntacids'

// Antipyretics
import AntipyreticsIndex from '@/components/Medicine/Index/IndexAntipyretics'
import AntipyreticsCreate from '@/components/Medicine/Create/CreateAntipyretics'
import AntipyreticsEdit from '@/components/Medicine/Edit/EditAntipyretics'
import AntipyreticsShow from '@/components/Medicine/Show/ShowAntipyretics'

// Cough
import CoughIndex from '@/components/Medicine/Index/IndexCough'
import CoughCreate from '@/components/Medicine/Create/CreateCough'
import CoughEdit from '@/components/Medicine/Edit/EditCough'
import CoughShow from '@/components/Medicine/Show/ShowCough'

// Decongestant
import DecongestantIndex from '@/components/Medicine/Index/IndexDecongestant'
import DecongestantCreate from '@/components/Medicine/Create/CreateDecongestant'
import DecongestantEdit from '@/components/Medicine/Edit/EditDecongestant'
import DecongestantShow from '@/components/Medicine/Show/ShowDecongestant'

Vue.use(Router)

export default new Router({
  routes: [
    // Index
    {
      path: '/index',
      name: 'index',
      component: Index
    },

    // Antacids
    {
      path: '/antacidss',
      name: 'antacidss',
      component: AntacidsIndex
    },
    {
      path: '/antacids/create',
      name: 'antacids-create',
      component: AntacidsCreate
    },
    {
      path: '/antacids/edit/:antacidsId',
      name: 'antacids-edit',
      component: AntacidsEdit
    },
    {
      path: '/antacids/:antacidsId',
      name: 'antacids',
      component: AntacidsShow
    },

    // Antipyretics
    {
      path: '/mas',
      name: 'mas',
      component: AntipyreticsIndex
    },
    {
      path: '/antipyretics/create',
      name: 'antipyretics-create',
      component: AntipyreticsCreate
    },
    {
      path: '/antipyretics/edit/:antipyreticsId',
      name: 'antipyretics-edit',
      component: AntipyreticsEdit
    },
    {
      path: '/antipyretics/:antipyreticsId',
      name: 'antipyretics',
      component: AntipyreticsShow
    },

    // Cough
    {
      path: '/coughs',
      name: 'coughs',
      component: CoughIndex
    },
    {
      path: '/cough/create',
      name: 'cough-create',
      component: CoughCreate
    },
    {
      path: '/cough/edit/:coughId',
      name: 'cough-edit',
      component: CoughEdit
    },
    {
      path: '/cough/:coughId',
      name: 'cough',
      component: CoughShow
    },

    // Decongestant
    {
      path: '/decongestants',
      name: 'decongestants',
      component: DecongestantIndex
    },
    {
      path: '/decongestant/create',
      name: 'decongestant-create',
      component: DecongestantCreate
    },
    {
      path: '/decongestant/edit/:decongestantId',
      name: 'decongestant-edit',
      component: DecongestantEdit
    },
    {
      path: '/decongestant/:decongestantId',
      name: 'decongestant',
      component: DecongestantShow
    },
  ]
})
