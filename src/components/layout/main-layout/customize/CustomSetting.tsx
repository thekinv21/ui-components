import { Computer, Settings, Sun, SunMoon, X } from 'lucide-react'

import { Button } from '@/components/ui/button/button'

import { cn } from '@/utils/shadcn'

import styles from './CustomSetting.module.scss'
import { useCustomSetting } from './useCustomSetting'

export function CustomSetting() {
	const { isOpen, setIsOpen, values, handleChange } = useCustomSetting()

	return (
		<section className={styles.mainLayoutSetting}>
			<button
				type='button'
				className={styles.toggleButton}
				onClick={() => setIsOpen(!isOpen)}
			>
				<Settings size={20} className={styles.icon} />
			</button>

			<div
				className={`${isOpen ? 'block' : 'hidden'} ${styles.overlay}`}
				onClick={() => setIsOpen(false)}
			/>

			{isOpen && (
				<nav
					className={cn(styles.nav, 'animate__animated animate__slideInRight')}
				>
					<button
						type='button'
						className={styles.toggleButtonInside}
						onClick={() => setIsOpen(!isOpen)}
					>
						<Settings size={20} className={styles.icon} />
					</button>

					<div className='perfect-scrollbar h-full overflow-y-auto overflow-x-hidden'>
						<div className={styles.header}>
							<button
								type='button'
								className={styles.closeButton}
								onClick={() => setIsOpen(false)}
							>
								<X />
							</button>

							<h4 className='mb-1 dark:text-white'>Application Styles</h4>
							<p className='text-white-dark'>
								Set your custom styles and use Application
							</p>
						</div>

						<div className={styles.section}>
							<h5 className={styles.sectionTitle}>Color Scheme</h5>
							<p className={styles.sectionDescription}>
								Overall light or dark presentation.
							</p>
							<div className='mt-3 grid grid-cols-3 gap-2'>
								<Button
									variant='outline'
									size='sm'
									type='button'
									className='flex items-center gap-2'
								>
									<Sun strokeWidth={1} size={20} />
									Light
								</Button>

								<Button
									variant='outline'
									size='sm'
									type='button'
									className='flex items-center gap-2'
								>
									<SunMoon strokeWidth={1} size={20} />
									Dark
								</Button>

								<Button
									variant='outline'
									size='sm'
									type='button'
									className='flex items-center gap-2'
								>
									<Computer strokeWidth={1} size={20} />
									System
								</Button>
							</div>
						</div>

						<div className={styles.section}>
							<h5 className={styles.sectionTitle}>Router Transition</h5>
							<p className={styles.sectionDescription}>
								Animation of main content.
							</p>
							<div className='mt-3'>
								<select
									name='animation'
									value={values.animation}
									onChange={handleChange}
								>
									<option value=''>None</option>
									<option value='animate__fadeIn'>Fade</option>
									<option value='animate__fadeInDown'>Fade Down</option>
									<option value='animate__fadeInUp'>Fade Up</option>
									<option value='animate__fadeInLeft'>Fade Left</option>
									<option value='animate__fadeInRight'>Fade Right</option>
									<option value='animate__slideInDown'>Slide Down</option>
									<option value='animate__slideInLeft'>Slide Left</option>
									<option value='animate__slideInRight'>Slide Right</option>
									<option value='animate__slideInUp'>Slide Up</option>
									<option value='animate__zoomIn'>Zoom In</option>
								</select>
							</div>
						</div>
					</div>
				</nav>
			)}
		</section>
	)
}
