import { Suspense } from 'react'

import { Sidebar } from '../sidebar/Sidebar'

interface IDefaultLayout {
	children: React.ReactNode
}

export function DefaultLayout({ children }: IDefaultLayout) {
	return (
		<div className='flex min-h-screen text-black transition-all duration-300'>
			<div className='hidden lg:block lg:w-[260px]'>
				<Sidebar />
			</div>

			<div className='flex min-h-screen flex-1 flex-col'>
				{/* <Header /> */}

				<Suspense>
					<div className='p-4 sm:p-6'>{children}</div>
				</Suspense>
			</div>
		</div>
	)
}
