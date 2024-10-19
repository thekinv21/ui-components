import { Alert } from '@/components/ui/alert/Alert'
import { Button } from '@/components/ui/button/button'

import { AlertEnum } from '@/types/base.types'

export function ShowAlert() {
	function handleSuccess() {
		Alert({
			title: 'Operation Successful',
			subTitle: 'Your action was completed successfully.',
			icon: AlertEnum.SUCCESS,
			isConfirmAlert: false
		})
	}

	function handleError() {
		Alert({
			title: 'An Error Occurred',
			subTitle: 'Something went wrong. Please try again.',
			icon: AlertEnum.ERROR,
			isConfirmAlert: false
		})
	}

	function handleWarning() {
		Alert({
			title: 'Warning',
			subTitle: 'Be cautious! This action may have consequences.',
			icon: AlertEnum.WARNING,
			isConfirmAlert: false
		})
	}

	function handleInfo() {
		Alert({
			title: 'Information',
			subTitle: 'Here is some important information for you.',
			icon: AlertEnum.INFO,
			isConfirmAlert: false
		})
	}

	return (
		<div className='panel space-y-3 text-sm'>
			<div>
				<h1 className='py-3 text-sm font-normal uppercase text-gray-500'>
					Alerts
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
