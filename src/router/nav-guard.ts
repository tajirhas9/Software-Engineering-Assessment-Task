import router from '.'
import type { RouteLocationNormalized as Route } from 'vue-router'

router.beforeEach(async (to: Route, _: Route, next: any) => {
	next()
})
