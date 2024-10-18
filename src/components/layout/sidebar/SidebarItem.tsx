import styles from './Sidebar.module.scss'

interface ISidebarItem {
	icon: JSX.Element
	label: string
}

export function SidebarItem({ icon, label }: ISidebarItem) {
	return (
		<div role='button' className={styles.link_button}>
			<div className={styles.link_icon}>{icon}</div>
			<span className={styles.link_label}>{label}</span>
		</div>
	)
}
