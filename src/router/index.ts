import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import ContactsFinderView from '../views/ContactsFinderView.vue'
import TodosView from '../views/TodosView.vue'

const routes = [
  { path: '/:pathMatch(.*)*', name: 'RoutePageNotFound', component: () => import('../views/PageNotFound.vue') },
  // { path: '/', name: 'RouteHome', component: HomeView },
  { path: '/', name: 'RouteContacts', component: ContactsFinderView },
  { path: '/todo', name: 'RouteTodo', component: TodosView },
  { path: '/about', name: 'RouteAbout', component: () => import('../views/AboutView.vue') }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //TODO find elegant solution for route-REFRESH on springboot.
  // history: createWebHashHistory(), //For springboot use webHashHistory -- so paths do not sthrow error.
  routes: routes
})

export default router
