import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './HomeView.vue'
import UsersView from './UsersView.vue'
import UserView from './UserView.vue'
import NotFoundView from './NotFoundView.vue'
import UserProfile from './UserProfile.vue'
import UserPosts from './UserPosts.vue'
import LoginPage from './LoginPage.vue'
import SecretPage from './SecretPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: () => import('./AboutView.vue') },
    { path: '/users', component: UsersView },
    {
      path: '/users/:id',
      component: UserView,
      redirect: (to) => `/users/${to.params.id}/profile`,
      children: [
        { path: 'profile', component: UserProfile },
        { path: 'posts', component: UserPosts },
      ],
    },
    { path: '/login', component: LoginPage },
    { path: '/secret', component: SecretPage },
    { path: '/:pathMatch(.*)*', component: NotFoundView },
  ],
})

router.beforeEach((to) => {
  const isAuthenticated = localStorage.getItem('auth')
  if (!isAuthenticated && to.path === '/secret') {
    return '/login'
  }
})

export default router
