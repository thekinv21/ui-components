import { Suspense } from 'react'

import { cn } from '@/utils/shadcn'

import { Sidebar } from '../sidebar/Sidebar'

import styles from './MainLayout.module.scss'
import { MainLayoutLoader } from './MainLayoutLoader'
import { MainToTopButton } from './MainToTopButton'
import { useMainLayout } from './useMainLayout'

interface IMainLayout {
	children: React.ReactNode
}

export function MainLayout({ children }: IMainLayout) {
	const { isLoader, isTopButton, navigateToTop } = useMainLayout()

	return (
		<section className='relative'>
			{isLoader && <MainLayoutLoader />}

			{isTopButton && <MainToTopButton navigateToTop={navigateToTop} />}

			<div className={styles.main_layout}>
				<div className={styles.sidebar}>
					<Sidebar />
				</div>

				<div className={styles.container}>
					{/* <Header /> */}

					<Suspense>
						<main
							id='screen_content'
							className={cn(
								styles.content,
								'animate__slideInUp animate__animated'
							)}
						>
							{children}
						</main>
					</Suspense>
				</div>
			</div>
		</section>
	)
}
