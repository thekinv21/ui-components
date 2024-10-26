import { BreadCrumbExample1 } from '@/components/ui/breadcrumb/example-1/BreadCrumbExample1'

import { InputForms } from './InputForms'
import { Inputs } from './Inputs'

export default function InputPage() {
	return (
		<section className='container mx-auto py-5'>
			<BreadCrumbExample1
				array={[
					{
						url: '/components/input',
						key: 'Input'
					}
				]}
			/>

			<div className='grid grid-cols-1 gap-10 py-10 lg:grid-cols-2'>
				<Inputs />
				<InputForms />
			</div>
		</section>
	)
}
