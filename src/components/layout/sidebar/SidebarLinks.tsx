import styles from './Sidebar.module.scss'
import { SidebarItem } from './SidebarItem'
import { sidebarLinks } from './SidebarLinksData'

export function SidebarLinks() {
	return (
		<nav className={styles.links}>
			{sidebarLinks.map((item, idx: number) => (
				<SidebarItem key={idx} icon={item.icon} label={item.label} />
			))}
		</nav>
	)
}
