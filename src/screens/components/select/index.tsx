import { BreadCrumbExample1 } from '@/components/ui/breadcrumb/example-1/BreadCrumbExample1'

import { SelectForms } from './SelectForms'
import { Selects } from './Selects'

export default function SelectPage() {
	return (
		<section className='container mx-auto py-5'>
			<BreadCrumbExample1
				array={[
					{
						url: '/components/select',
						key: 'Select'
					}
				]}
			/>

			<div className='grid grid-cols-1 gap-10 py-10 lg:grid-cols-2'>
				<Selects />
				<SelectForms />
			</div>
		</section>
	)
}
