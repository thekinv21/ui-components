import {
	AlertCircleIcon,
	CalendarClockIcon,
	CommandIcon,
	ComponentIcon,
	FileInputIcon,
	KeySquareIcon,
	LayoutDashboardIcon,
	LinkIcon,
	ListCheckIcon,
	ListIcon,
	LockKeyholeIcon,
	LockKeyholeOpenIcon,
	MailCheckIcon,
	MessageSquareQuoteIcon,
	PercentIcon,
	SearchXIcon,
	ServerCrashIcon,
	ShieldXIcon,
	TableIcon,
	UserCheck2Icon,
	UserRoundXIcon
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
				url: '/components/table',
				icon: <TableIcon size={16} strokeWidth={2} />
			},
			{
				label: 'Breadcrumb',
				url: '/components/breadcrumb',
				icon: <LinkIcon size={16} strokeWidth={2} />
			},
			{
				label: 'Sweet Alerts',
				url: '/components/sweet-alert',
				icon: <AlertCircleIcon size={16} strokeWidth={2} />
			},
			{
				label: 'Buttons',
				url: '/components/button',
				icon: <CommandIcon size={16} strokeWidth={2} />
			},
			{
				label: 'DatePicker',
				url: '/components/date-picker',
				icon: <CalendarClockIcon size={16} strokeWidth={2} />
			},
			{
				label: 'Inputs',
				url: '/components/input',
				icon: <FileInputIcon size={16} strokeWidth={2} />
			},
			{
				label: 'Select',
				url: '/components/select',
				icon: <ListIcon size={16} strokeWidth={2} />
			},
			{
				label: 'React Select',
				url: '/components/react-select',
				icon: <ListCheckIcon size={16} strokeWidth={2} />
			},
			{
				label: 'TextArea',
				url: '/components/textarea',
				icon: <MessageSquareQuoteIcon size={16} strokeWidth={2} />
			},
			{
				label: 'Modals',
				url: '/components/modal',
				icon: <PercentIcon size={16} strokeWidth={2} />
			}
		]
	},
	{
		label: 'Authentication',
		url: '/auth/:pageName',
		icon: <LockKeyholeIcon size={21} strokeWidth={2} />,
		subLinks: [
			{
				label: 'Login',
				url: '/login',
				icon: <LockKeyholeOpenIcon size={16} strokeWidth={2} />
			},
			{
				label: 'Register',
				url: '/register',
				icon: <UserCheck2Icon size={16} strokeWidth={2} />
			},
			{
				label: 'Recover',
				url: '/recover',
				icon: <MailCheckIcon size={16} strokeWidth={2} />
			},

			{
				label: 'Unlock',
				url: '/unlock',
				icon: <LockKeyholeOpenIcon size={16} strokeWidth={2} />
			},

			{
				label: 'Forgot Password',
				url: '/forgot-password',
				icon: <KeySquareIcon size={16} strokeWidth={2} />
			}
		]
	},
	{
		label: 'Error',
		url: '/error/:errorName',
		icon: <ShieldXIcon size={21} strokeWidth={2} />,
		subLinks: [
			{
				label: '404',
				url: '/not-founds',
				icon: <SearchXIcon size={16} strokeWidth={2} />
			},
			{
				label: '403',
				url: '/permission',
				icon: <UserRoundXIcon size={16} strokeWidth={2} />
			},
			{
				label: '500',
				url: '/server-error',
				icon: <ServerCrashIcon size={16} strokeWidth={2} />
			}
		]
	}
]
