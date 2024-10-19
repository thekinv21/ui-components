import { useState } from 'react'

import { ChevronDown, ChevronRight } from 'lucide-react'
import AnimateHeight from 'react-animate-height'
import { NavLink } from 'react-router-dom'

import styles from './Sidebar.module.scss'
import { ISidebarLink, ISidebarSubLink } from './SidebarLinksData'

interface ISidebarItem {
	item: ISidebarLink
}

export function SidebarItem({ item }: ISidebarItem) {
	return (
		<NavLink
			to={item.url}
			className={({ isActive }) =>
				[
					styles.link_button,
					isActive ?? 'bg-blue-50 bg-opacity-80 text-blue-900'
				].join(' ')
			}
		>
			<div className={styles.link_icon}>{item.icon}</div>
			<span className={styles.link_label}>{item.label}</span>
		</NavLink>
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
						<NavLink
							to={item.url}
							key={idx}
							className={({ isActive }) =>
								[
									styles.dropdown_item,
									isActive ? 'bg-blue-50 bg-opacity-80 text-blue-900' : ''
								].join(' ')
							}
						>
							<li>
								<span>{item.icon}</span>
								<p>{item.label}</p>
							</li>
						</NavLink>
					))}
				</ul>
			</AnimateHeight>
		</div>
	)
}
