import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/button'
import { RangeDate } from '@/components/ui/datePicker/range/RangeDate'
import { SingleDate } from '@/components/ui/datePicker/single/SingleDate'

interface IForm {
	singleDate: Date
	rangeDate: Date
}

export function DatePickerFormExample() {
	const formMethod = useForm<IForm>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IForm> = data => {
		alert(JSON.stringify(data))
	}

	return (
		<form
			className='panel my-10 space-y-3 text-sm'
			onSubmit={formMethod.handleSubmit(onSubmit)}
		>
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

			<div className='flex flex-row gap-5 font-light'>
				<div className='flex w-full flex-col gap-2'>
					<span>Single DatePicker</span>
					<SingleDate name='singleDate' control={formMethod.control} required />
				</div>

				<div className='flex w-full flex-col gap-2'>
					<span>Range DatePicker</span>
					<RangeDate name='rangeDate' control={formMethod.control} required />
				</div>
			</div>

			<Button>Submit</Button>
		</form>
	)
}
