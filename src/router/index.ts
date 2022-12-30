import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import login from '@/components/LogIn.vue'
import signup from '@/components/SignUp.vue'

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},

		{
			path: '/Login',
			name: 'login',
			component:login,
		},
		 {

			path: '/Signup',
			name: 'signup',
			component: signup,
		},
		
	],
})

export default router
