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
const ModalPage = lazy(() => import('@/screens/components/modals'))

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
			},
			{
				path: 'input',
				element: <div>Input page</div>
			},
			{
				path: 'react-select',
				element: <div>React-Select page</div>
			},
			{
				path: 'textarea',
				element: <div>textarea page</div>
			},
			{
				path: 'modal',
				element: <ModalPage />
			},
			{
				path: 'date-picker',
				element: <div>Input page</div>
			}
		]
	}
]

export { routes }
