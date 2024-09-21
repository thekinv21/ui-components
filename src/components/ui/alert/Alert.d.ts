import { SweetAlertIcon } from 'sweetalert2'

export interface IAlert<T> {
	action: () => Promise<void>
}

export interface IAlertNotification {
	icon: SweetAlertIcon
	message: string
	customClass: string
	width?: number
}
