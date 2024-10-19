import { useForm } from 'react-hook-form'

import { RangeDate } from '@/components/ui/datePicker/range/RangeDate'
import { SingleDate } from '@/components/ui/datePicker/single/SingleDate'

interface IForm {
	singleDate: Date
	rangeDate: Date
}

export function DatePickers() {
	const formMethod = useForm<IForm>({
		mode: 'onChange'
	})

	return (
		<div className='panel my-10 space-y-3 text-sm'>
			<div>
				<h1 className='py-3 text-sm font-normal uppercase text-gray-500'>
					React DatePicker with React Hook Form
				</h1>

				<p className='py-3 text-sm font-normal text-gray-500'>
					You can also provide custom messages and specify custom widths for
					DatePicker. Additionally, you can add your own styles to tailor the
					look and feel
				</p>
			</div>

			<div className='grid grid-cols-2 gap-10 font-light'>
				<div className='flex w-full flex-col gap-2'>
					<span>Single DatePicker</span>
					<SingleDate name='singleDate' control={formMethod.control} required />
				</div>

				<div className='flex w-full flex-col gap-2'>
					<span>Range DatePicker</span>
					<RangeDate name='rangeDate' control={formMethod.control} required />
				</div>
			</div>
		</div>
	)
}
