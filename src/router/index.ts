import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignUp from '@/components/SignUp.vue'
import LogIn from '@/components/LogIn.vue'

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},

		{
			path: '/LogIn',
			name: 'Login',
			component: LogIn,
		},

		{
			path: '/SignUp',
			name: 'SignUp',
			component: SignUp,
		},
	],
})

export default router
