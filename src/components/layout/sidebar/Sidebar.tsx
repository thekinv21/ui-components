import { ChevronsRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button/button'

import { useConfigStore } from '@/store/config.store'

import styles from './Sidebar.module.scss'
import { SidebarLinks } from './SidebarLinks'
import { SidebarLogo } from './SidebarLogo'

export function Sidebar() {
	const store = useConfigStore()

	function handleToggle() {
		console.log(store.animation)
	}

	return (
		<aside className='relative'>
			<div className={styles.sidebar}>
				<SidebarLogo />
				<SidebarLinks />
			</div>

			<Button
				className='absolute -right-4 top-1/2 z-10 rounded-full'
				size='icon'
				variant='outline'
				onClick={handleToggle}
			>
				<ChevronsRightIcon size={20} />
			</Button>
		</aside>
	)
}
