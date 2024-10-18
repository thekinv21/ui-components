import styles from './Footer3.module.scss'
import { Footer3Links } from './Footer3Links'
import { Footer3Logo } from './Footer3Logo'
import { Footer3Social } from './Footer3Social'

export function Footer3() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_container}>
				<div className={styles.footer_content}>
					<Footer3Logo />
					<Footer3Links />
				</div>
				<hr className={styles.line} />
				<Footer3Social />
			</div>
		</footer>
	)
}
