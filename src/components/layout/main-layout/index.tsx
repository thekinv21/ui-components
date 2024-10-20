import { Suspense } from 'react'

import { cn } from '@/utils/shadcn'

import { Loader } from '../../ui/loader/Loader'
import { Sidebar } from '../sidebar/Sidebar'

import { CustomSetting } from './customize/CustomSetting'
import styles from './MainLayout.module.scss'
import { MainToTopButton } from './MainToTopButton'
import { useMainLayout } from './useMainLayout'

interface IMainLayout {
	children: React.ReactNode
}

export function MainLayout({ children }: IMainLayout) {
	const { isLoader, isTopButton, navigateToTop, configStore } = useMainLayout()

	return (
		<section className='relative'>
			{isLoader && <Loader />}

			{isTopButton && <MainToTopButton navigateToTop={navigateToTop} />}

			<CustomSetting />

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
								`${configStore.animation} animate__animated`
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
