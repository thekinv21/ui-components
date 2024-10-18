import {
	AlertCircleIcon,
	CalendarClockIcon,
	CommandIcon,
	ComponentIcon,
	FileInputIcon,
	LayersIcon,
	LayoutDashboardIcon,
	LinkIcon,
	ListCheckIcon,
	MessageSquareQuoteIcon,
	PercentIcon,
	PuzzleIcon,
	ServerCrashIcon,
	TableIcon
} from 'lucide-react'

export interface ISidebarLink {
	label: string
	url: string
	icon: JSX.Element
	subLinks?: ISidebarSubLink[]
}

export interface ISidebarSubLink {
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
		icon: <ComponentIcon size={21} strokeWidth={2} />,
		subLinks: [
			{
				label: 'Table',
				url: '/table',
				icon: <TableIcon size={16} strokeWidth={2} />
			},
			{
				label: 'BreadCrumb',
				url: '/breadcrumb',
				icon: <LinkIcon size={16} strokeWidth={2} />
			},
			{
				label: 'Sweet Alerts',
				url: '/sweet-alert',
				icon: <AlertCircleIcon size={16} strokeWidth={2} />
			},
			{
				label: 'Buttons',
				url: '/button',
				icon: <CommandIcon size={16} strokeWidth={2} />
			},
			{
				label: 'DatePicker',
				url: '/date-picker',
				icon: <CalendarClockIcon size={16} strokeWidth={2} />
			},
			{
				label: 'Modals',
				url: '/modal',
				icon: <PercentIcon size={16} strokeWidth={2} />
			}
		]
	},
	{
		label: 'Form',
		url: '/form/:componentName',
		icon: <PuzzleIcon size={21} strokeWidth={2} />,
		subLinks: [
			{
				label: 'Inputs',
				url: '/input',
				icon: <FileInputIcon size={16} strokeWidth={2} />
			},
			{
				label: 'React Select',
				url: '/',
				icon: <ListCheckIcon size={16} strokeWidth={2} />
			},
			{
				label: 'TextArea',
				url: '/',
				icon: <MessageSquareQuoteIcon size={16} strokeWidth={2} />
			}
		]
	},
	{
		label: 'Pages',
		url: '/pages/:pageName',
		icon: <LayersIcon size={21} strokeWidth={2} />,
		subLinks: []
	},
	{
		label: 'Error',
		url: '/error/:errorName',
		icon: <ServerCrashIcon size={21} strokeWidth={2} />,
		subLinks: [
			{
				label: '404',
				url: '/not-founds',
				icon: <LayoutDashboardIcon size={16} strokeWidth={2} />
			},
			{
				label: '403',
				url: '/permission',
				icon: <LayoutDashboardIcon size={16} strokeWidth={2} />
			},
			{
				label: '500',
				url: '/server-error',
				icon: <LayoutDashboardIcon size={16} strokeWidth={2} />
			}
		]
	}
]
