import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.scss'
import { Providers } from './provider/Providers'
import router from './router'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Providers>
			<RouterProvider router={router} />
		</Providers>
	</StrictMode>
)
