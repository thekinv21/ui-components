import { BreadCrumbExample1 } from '@/components/ui/breadcrumb/example-1/BreadCrumbExample1'

import { DatePickerFormExample } from './DatePickerFormExample'
import { DatePickers } from './DatePickers'

export default function DatePickerPage() {
	return (
		<section className='container mx-auto py-5'>
			<BreadCrumbExample1
				array={[
					{
						url: '/components/date-picker',
						key: 'DatePicker'
					}
				]}
			/>
			<div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
				<DatePickers />
				<DatePickerFormExample />
			</div>
		</section>
	)
}
