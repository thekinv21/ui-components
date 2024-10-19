import { lazy } from 'react'

import { Outlet } from 'react-router-dom'

const NotFoundPage = lazy(
	() => import('@/screens/error/404/example-1/NotFound1')
)
const HomePage = lazy(() => import('@/screens/home'))

// components page

const TablePage = lazy(() => import('@/screens/components/table'))
const BreadCrumbPage = lazy(() => import('@/screens/components/breadcrumb'))
const SweetAlertPage = lazy(() => import('@/screens/components/sweet-alerts'))
const ButtonPage = lazy(() => import('@/screens/components/buttons'))
const DatePickerPage = lazy(() => import('@/screens/components/datePicker'))

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
	},

	{
		path: '/components',
		element: <Outlet />,
		children: [
			{
				path: 'table',
				element: <TablePage />
			},
			{
				path: 'breadcrumb',
				element: <BreadCrumbPage />
			},
			{
				path: 'sweet-alert',
				element: <SweetAlertPage />
			},
			{
				path: 'button',
				element: <ButtonPage />
			},
			{
				path: 'date-picker',
				element: <DatePickerPage />
			}
		]
	}
]

export { routes }
