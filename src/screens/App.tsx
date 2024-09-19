import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/button'
import { RangeDate } from '@/components/ui/datePicker/range/RangeDate'
import { SingleDate } from '@/components/ui/datePicker/single/SingleDate'
import { Field4 } from '@/components/ui/field/example-4/Field4'
import { TextArea4 } from '@/components/ui/textarea/example-4/TextArea4'

interface IForm {
	singleDate: Date
	rangeDate: Date
	test: string
	test1: string
	test2: string
}

export function App() {
	const formMethod = useForm<IForm>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IForm> = data => {
		console.log(data)
	}

	return (
		<section className='flex h-screen items-center justify-center'>
			<form
				onSubmit={formMethod.handleSubmit(onSubmit)}
				className='flex flex-col flex-wrap gap-5'
			>
				<h1 className='mb-10 text-2xl font-bold'>
					Custom UI DatePicker with React Hook Form
				</h1>

				<div className='flex w-full flex-col gap-5'>
					<span>Single DatePicker</span>
					<SingleDate name='singleDate' control={formMethod.control} required />
				</div>

				<div className='flex w-full flex-col gap-5'>
					<span>Range DatePicker</span>
					<RangeDate name='rangeDate' control={formMethod.control} required />
				</div>

				<div className='flex w-full flex-col gap-5'>
					<span>Field</span>
					<Field4
						name='test'
						control={formMethod.control}
						required
						label='Field'
					/>
				</div>

				<div className='flex w-full flex-col gap-5'>
					<span>TextARea</span>
					<TextArea4
						label='Field'
						name='test1'
						control={formMethod.control}
						required
					/>
				</div>

				<Button type='submit' className='mt-10'>
					Submit
				</Button>
			</form>
		</section>
	)
}
