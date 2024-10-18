import { lazy } from 'react'

const NotFoundPage = lazy(
	() => import('@/screens/error/404/example-1/NotFound1')
)
const HomePage = lazy(() => import('@/screens/home'))

const routes = [
	{
		path: '*',
		element: <NotFoundPage />,
		layout: 'blank'
	},
	{
		path: '/',
		element: <HomePage />,
		layout: 'default'
	}
]

export { routes }
