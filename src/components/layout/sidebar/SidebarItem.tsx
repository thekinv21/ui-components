import { useState } from 'react'

import { ChevronDown, ChevronRight } from 'lucide-react'
import AnimateHeight from 'react-animate-height'
import { NavLink } from 'react-router-dom'

import styles from './Sidebar.module.scss'
import { ISidebarSubLink } from './SidebarLinksData'

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

interface ISidebarItemDropdown {
	icon: JSX.Element
	label: string
	subLinks: ISidebarSubLink[]
}

export function SidebarItemDropdown({
	icon,
	label,
	subLinks
}: ISidebarItemDropdown) {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const toggleDropdown = () => setIsOpen(!isOpen)

	return (
		<div>
			<button className={styles.link_button} onClick={toggleDropdown}>
				<span className={styles.link_icon}>{icon}</span>
				<div className={styles.dropdown_label}>
					<span>{label}</span>
					<p>
						{isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
					</p>
				</div>
			</button>
			<AnimateHeight duration={500} height={isOpen ? 'auto' : 0}>
				<ul className={styles.dropdown_list}>
					{subLinks.map((item: ISidebarSubLink, idx: number) => (
						<li key={idx} className={styles.dropdown_item}>
							<NavLink to={item.url} className={styles.link}>
								<span>{item.icon}</span>
								<p>{item.label}</p>
							</NavLink>
						</li>
					))}
				</ul>
			</AnimateHeight>
		</div>
	)
}
