import { BreadCrumbExample1 } from '@/components/ui/breadcrumb/example-1/BreadCrumbExample1'

import { ConfirmationAlert } from './ConfirmationAlert'
import { NotificationAlert } from './NotificationAlert'
import { ShowAlert } from './ShowAlert'

export default function SweetAlertPage() {
	return (
		<section className='container mx-auto py-5'>
			<BreadCrumbExample1
				array={[
					{
						url: '/components/sweet-alert',
						key: 'Sweet Alerts'
					}
				]}
			/>

			<div className='grid grid-cols-1 gap-10 py-10'>
				<NotificationAlert />
				<ShowAlert />
				<ConfirmationAlert />
			</div>
		</section>
	)
}
