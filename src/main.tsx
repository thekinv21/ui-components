import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import './index.scss'
import { Providers } from './provider/Providers'
import { App } from './screens/App'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Providers>
			<App />
		</Providers>
	</StrictMode>
)
