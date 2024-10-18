import {
	ComponentIcon,
	LayersIcon,
	LayoutDashboardIcon,
	PuzzleIcon,
	ServerCrashIcon
} from 'lucide-react'

interface ISidebarLink {
	label: string
	url: string
	icon: JSX.Element
}

export const sidebarLinks: ISidebarLink[] = [
	{
		label: 'Dashboard',
		url: '/',
		icon: <LayoutDashboardIcon size={21} strokeWidth={2} />
	},
	{
		label: 'Components',
		url: '/components/:name',
		icon: <ComponentIcon size={21} strokeWidth={2} />
	},
	{
		label: 'Form',
		url: '/form/:componentName',
		icon: <PuzzleIcon size={21} strokeWidth={2} />
	},
	{
		label: 'Pages',
		url: '/pages/:pageName',
		icon: <LayersIcon size={21} strokeWidth={2} />
	},
	{
		label: 'Error',
		url: '/error/:errorName',
		icon: <ServerCrashIcon size={21} strokeWidth={2} />
	}
]
