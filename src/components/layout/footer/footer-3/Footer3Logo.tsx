import styles from './Footer3.module.scss'

export function Footer3Logo() {
	return (
		<div className={styles.logo}>
			<a href='/'>
				<img draggable={false} src='/next.svg' alt='Logo' />
			</a>
		</div>
	)
}
