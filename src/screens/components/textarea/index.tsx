import { BreadCrumbExample1 } from '@/components/ui/breadcrumb/example-1/BreadCrumbExample1'

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

			<TextAreas />
		</section>
	)
}
