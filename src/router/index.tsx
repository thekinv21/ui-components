import { createBrowserRouter } from 'react-router-dom'

import { BlankLayout } from '@/components/layout/blank-layout'
import { MainLayout } from '@/components/layout/main-layout'

import { routes } from './routes'

const finalRoutes = routes.map(route => {
	return {
		...route,
		element:
			route.layout === 'blank' ? (
				<BlankLayout>{route.element}</BlankLayout>
			) : (
				<MainLayout>{route.element}</MainLayout>
			)
	}
})

const router = createBrowserRouter(finalRoutes)

export default router
