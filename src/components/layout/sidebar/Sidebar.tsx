import styles from './Sidebar.module.scss'
import { SidebarLinks } from './SidebarLinks'
import { SidebarLogo } from './SidebarLogo'

export function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<SidebarLogo />
			<SidebarLinks />
		</div>
	)
}
