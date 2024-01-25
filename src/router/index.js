
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [
  //la ruta base
  {
    path: '/',
    component: () => import('../components/Layout.vue')
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: () => import('../components/Formulario.vue')
  },
  {
    path: '/prueba',
    name: 'prueba',
    component: () => import('../components/Prueba.vue')
  },
  //las rutas asociadas a los componentes
  {
    path: '*',
    component: () => import('../views/ErrorPages/Error404.vue')
  }

]

const router = new VueRouter({ routes, });

export default router;