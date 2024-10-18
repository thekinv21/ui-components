import { createBrowserRouter } from 'react-router-dom'

import { BlankLayout } from '@/components/layout/blank/BlankLayout'
import { DefaultLayout } from '@/components/layout/default/DefaultLayout'

import { routes } from './routes'

const finalRoutes = routes.map(route => {
	return {
		...route,
		element:
			route.layout === 'blank' ? (
				<BlankLayout>{route.element}</BlankLayout>
			) : (
				<DefaultLayout>{route.element}</DefaultLayout>
			)
	}
})

const router = createBrowserRouter(finalRoutes)

export default router
