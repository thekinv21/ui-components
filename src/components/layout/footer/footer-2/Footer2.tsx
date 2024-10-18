import styles from './Footer2.module.scss'
import { FooterLinks2 } from './Footer2Links'

export function Footer2() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_container}>
				<FooterLinks2 />
			</div>
		</footer>
	)
}
