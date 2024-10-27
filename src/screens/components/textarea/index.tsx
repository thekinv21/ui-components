import { BreadCrumbExample1 } from '@/components/ui/breadcrumb/example-1/BreadCrumbExample1'

import { TextAreaForms } from './TextAreaForms'
import { TextAreas } from './TextAreas'

export default function TextAreaPage() {
	return (
		<section className='container mx-auto py-5'>
			<BreadCrumbExample1
				array={[
					{
						url: '/components/textarea',
						key: 'Textarea'
					}
				]}
			/>

			<div className='grid grid-cols-1 gap-10 py-10 lg:grid-cols-2'>
				<TextAreas />
				<TextAreaForms />
			</div>
		</section>
	)
}
