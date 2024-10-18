import styles from './Footer.module.scss'

export function FooterLogo() {
	return (
		<div className={styles.logo}>
			<img src='/next.svg' alt='logo' draggable={false} />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
				accusantium.
			</p>
		</div>
	)
}
