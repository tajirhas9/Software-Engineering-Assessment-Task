import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignUp from '@/components/SignUp.vue'
import LogIn from '@/components/LogIn.vue'
import NavBar from '@/components/NavBar.vue'

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/home',
			name: 'home',
			component: HomeView,
		},

		{
			path: '/login',
			name: 'Login',
			component: LogIn,
		},

		{
			path: '/signup',
			name: 'SignUp',
			component: SignUp,
		},

		{
			path: '/',
			name: 'navbar',
			component: NavBar,
		},
	],
})

export default router
