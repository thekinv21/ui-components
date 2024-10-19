import { AlertNotification } from '@/components/ui/alert/Alert'
import { Button } from '@/components/ui/button/button'

import {
	AlertCustomEnum,
	AlertEnum,
	AlertMessageEnum
} from '@/types/base.types'

export function NotificationAlert() {
	function handleSuccess() {
		return AlertNotification({
			icon: AlertEnum.SUCCESS,
			message: AlertMessageEnum.SUCCESS,
			customClass: AlertCustomEnum.SUCCESS
		})
	}

	function handleError() {
		return AlertNotification({
			icon: AlertEnum.ERROR,
			message: AlertMessageEnum.ERROR,
			customClass: AlertCustomEnum.ERROR,
			width: 450
		})
	}

	function handleWarning() {
		return AlertNotification({
			icon: AlertEnum.WARNING,
			message: AlertMessageEnum.WARNING,
			customClass: AlertCustomEnum.WARNING,
			width: 450
		})
	}

	function handleInfo() {
		return AlertNotification({
			icon: AlertEnum.INFO,
			message: AlertMessageEnum.INFO,
			customClass: AlertCustomEnum.INFO,
			width: 450
		})
	}

	return (
		<div className='panel space-y-3 text-sm'>
			<div>
				<h1 className='py-3 text-sm font-normal uppercase text-gray-500'>
					Notification Alerts
				</h1>

				<p className='py-3 text-sm font-normal text-gray-500'>
					You can also provide custom messages and specify custom widths for
					alerts. Additionally, you can add your own styles to tailor the look
					and feel
				</p>
			</div>

			<div className='grid grid-cols-4 gap-10 font-light'>
				<Button variant='success' onClick={handleSuccess}>
					Success
				</Button>
				<Button variant='danger' onClick={handleError}>
					Error
				</Button>
				<Button variant='warning' onClick={handleWarning}>
					Warning
				</Button>
				<Button variant='info' onClick={handleInfo}>
					Info
				</Button>
			</div>
		</div>
	)
}
