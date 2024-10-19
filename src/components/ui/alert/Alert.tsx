import Swal from 'sweetalert2'

import { IAlert, IAlertNotification } from './Alert.d'
import './Alert.scss'

/* 

	1) AlertNotification: it's notification for show after crud
	2) Alert: alert modal for confirming crud's
	3) import "./Alert.scss" custom styles for sweet alerts2

*/

export function AlertNotification(props: IAlertNotification) {
	const notification = Swal.mixin({
		toast: true,
		position: 'top-right',
		icon: props.icon,
		showConfirmButton: false,
		timer: 2000,
		showCloseButton: false,
		customClass: {
			popup: props.customClass
		},
		width: props.width
	})
	notification.fire({
		title: props.message
	})
}

export function Alert<T>(props: IAlert<T>) {
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: 'alert-confirm-btn',
			cancelButton: 'alert-cancel-btn',
			popup: 'sweet-alerts'
		},
		buttonsStyling: false
	})
	swalWithBootstrapButtons
		.fire({
			title: props.title ?? 'Are you sure?',
			text: props.subTitle ?? 'You want to continue?',
			icon: props.icon ?? 'warning',
			confirmButtonText: props.confirmText ?? `Confirm`,
			cancelButtonText: props.cancelText ?? `Cancel`,
			reverseButtons: true,
			showConfirmButton: props.isConfirmAlert ?? true,
			showCancelButton: props.isConfirmAlert ?? true,
			padding: '2em'
		})
		.then(result => {
			if (result.isConfirmed && props.action) {
				props.action()
			}
		})
}
