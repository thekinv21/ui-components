import { useNavigate } from 'react-router-dom'

import styles from './NotFound1.module.scss'

export default function NotFound1() {
	const navigate = useNavigate()

	return (
		<section className={styles.error}>
			<div className={styles.error_container}>
				<div className={styles.error_text_container}>
					<p className={styles.small_heading}>404 error</p>
					<h1 className={styles.not_found_title}>Page not found</h1>
					<p className={styles.not_found_des}>
						Sorry, the page you are looking for doesn't exist. Here are some
						helpful links:
					</p>

					<div className={styles.navigation_buttons}>
						<button className={styles.back_button} onClick={() => navigate(-1)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
								/>
							</svg>

							<span>Go back</span>
						</button>

						<button
							onClick={() => navigate('/')}
							className={styles.home_button}
						>
							Go Home
						</button>
					</div>
				</div>

				<div className={styles.image_container}>
					<img draggable={false} src='/svg/404.svg' alt='404_image' />
				</div>
			</div>
		</section>
	)
}
