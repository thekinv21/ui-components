import { BreadCrumbExample1 } from '@/components/ui/breadcrumb/example-1/BreadCrumbExample1'

import { Modals } from './Modals'

export default function ModalPage() {
	return (
		<section className='container mx-auto py-5'>
			<BreadCrumbExample1
				array={[
					{
						url: '/components/modal',
						key: 'Modal'
					}
				]}
			/>

			<Modals />
		</section>
	)
}
