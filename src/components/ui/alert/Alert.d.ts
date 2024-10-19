import { SweetAlertIcon } from 'sweetalert2'

export interface IAlert<T> {
	title?: string
	subTitle?: string
	confirmText?: string
	cancelText?: string
	isConfirmAlert?: boolean = true
	icon?: 'warning' | 'error' | 'success' | 'info'
	action?: () => Promise<void>
}

export interface IAlertNotification {
	icon: SweetAlertIcon
	message: string
	customClass: string
	width?: number
}
