import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import ContactsFinderView from '../views/ContactsFinderView.vue'
import TodosView from '../views/TodosView.vue'
const router = createRouter({
  history: createWebHashHistory(), //import.meta.env.BASE_URL
  routes: [
    // { path: '/', name: 'RouteHome', component: HomeView },
    { path: '/', name: 'RouteContacts', component: ContactsFinderView },
    { path: '/todo', name: 'RouteTodo', component: TodosView },
    { path: '/about', name: 'RouteAbout', component: () => import('../views/AboutView.vue') }
  ]
})

export default router
