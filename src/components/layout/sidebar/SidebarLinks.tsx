import { Fragment } from 'react/jsx-runtime'

import styles from './Sidebar.module.scss'
import { SidebarItem, SidebarItemDropdown } from './SidebarItem'
import { ISidebarLink, sidebarLinks } from './SidebarLinksData'

export function SidebarLinks() {
	return (
		<nav className={styles.links}>
			{sidebarLinks.map((item: ISidebarLink, idx: number) => (
				<Fragment>
					{item.subLinks && item.subLinks.length ? (
						<SidebarItemDropdown
							key={idx}
							icon={item.icon}
							label={item.label}
							subLinks={item.subLinks}
						/>
					) : (
						<SidebarItem key={idx} icon={item.icon} label={item.label} />
					)}
				</Fragment>
			))}
		</nav>
	)
}
