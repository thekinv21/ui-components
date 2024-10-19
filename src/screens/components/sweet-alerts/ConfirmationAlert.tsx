import { useMutation } from '@tanstack/react-query'

import { Alert, AlertNotification } from '@/components/ui/alert/Alert'
import { Button } from '@/components/ui/button/button'

import {
	AlertCustomEnum,
	AlertEnum,
	AlertMessageEnum
} from '@/types/base.types'

import { baseService } from '@/service/base.service'

export function ConfirmationAlert() {
	const mutateFun = useMutation({
		mutationKey: ['delete-post-by-id'],
		mutationFn: (id: number) => baseService.deletePost(id),
		onSuccess: () => {
			AlertNotification({
				icon: AlertEnum.SUCCESS,
				message: AlertMessageEnum.SUCCESS,
				customClass: AlertCustomEnum.SUCCESS
			})
		},
		onError: () => {
			AlertNotification({
				icon: AlertEnum.ERROR,
				message: AlertMessageEnum.ERROR,
				customClass: AlertCustomEnum.ERROR
			})
		}
	})

	function handleConfirm() {
		Alert({
			icon: AlertEnum.WARNING,
			confirmText: 'Confirm',
			cancelText: 'Cancel',
			action: async () => {
				return mutateFun.mutate(1)
			}
		})
	}

	function handleError() {
		Alert({
			title: 'An Error Occurred',
			subTitle: 'Something went wrong',
			icon: AlertEnum.ERROR,
			confirmText: 'Retry',
			cancelText: 'Close',
			action: async () => {
				return mutateFun.mutate(1)
			}
		})
	}

	function handleWarning() {
		Alert({
			title: 'Warning',
			subTitle: 'Be cautious! This action may have consequences.',
			icon: AlertEnum.WARNING,
			confirmText: 'I`m sure',
			cancelText: 'No, Cancel',
			action: async () => {
				return mutateFun.mutate(1)
			}
		})
	}

	function handleInfo() {
		Alert({
			title: 'Information',
			subTitle: 'Here is some important information for you.',
			icon: AlertEnum.INFO,
			confirmText: 'Ok',
			cancelText: 'Cancel',
			action: async () => {
				return mutateFun.mutate(1)
			}
		})
	}

	return (
		<div className='panel space-y-3 text-sm'>
			<div>
				<h1 className='py-3 text-sm font-normal uppercase text-gray-500'>
					Confirm Alert for Crud with React Query
				</h1>

				<p className='py-3 text-sm font-normal text-gray-500'>
					You can also provide custom messages and specify custom widths for
					alerts. Additionally, you can add your own styles to tailor the look
					and feel
				</p>
			</div>

			<div className='grid grid-cols-4 gap-10 font-light'>
				<Button variant='success' onClick={handleConfirm}>
					Confirm
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
