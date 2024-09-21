import { ReactNode } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface IProviders {
	children: ReactNode
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export function Providers({ children }: IProviders) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
