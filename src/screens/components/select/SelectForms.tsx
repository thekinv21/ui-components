import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/button'
import { HtmlSelect } from '@/components/ui/html-select/example-1/HtmlSelect'
import { HtmlSelect2 } from '@/components/ui/html-select/example-2/HtmlSelect2'

interface IForm {
	select: string
	select2: string
}

export function SelectForms() {
	const formMethod = useForm<IForm>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IForm> = data => {
		alert(JSON.stringify(data))
	}

	return (
		<div className='panel space-y-3 text-sm'>
			<div>
				<h1 className='py-3 text-sm font-normal uppercase text-gray-500'>
					Html Select with React Hook Form
				</h1>

				<p className='py-3 text-sm font-normal text-gray-500'>
					You can also provide custom messages and specify custom widths for
					Select. Example with React-Hook-Form
				</p>
			</div>

			<form
				onSubmit={formMethod.handleSubmit(onSubmit)}
				className='grid grid-cols-2 gap-10 font-light'
			>
				<div className='flex w-full flex-col gap-2'>
					<span>Select 1</span>
					<HtmlSelect
						name='select'
						control={formMethod.control}
						options={[
							{ label: 'Araba 1', value: 'car_number_1' },
							{ label: 'Araba 2', value: 'car_number_2' },
							{ label: 'Araba 3', value: 'car_number_3' }
						]}
						required
					/>
				</div>

				<div className='flex w-full flex-col gap-2'>
					<span>Select 2</span>
					<HtmlSelect2
						name='select2'
						control={formMethod.control}
						options={[
							{ label: 'Araba 1', value: 'car_number_1' },
							{ label: 'Araba 2', value: 'car_number_2' },
							{ label: 'Araba 3', value: 'car_number_3' }
						]}
						required
					/>
				</div>

				<Button
					type='button'
					variant='warning'
					onClick={() => {
						formMethod.reset({
							select: '',
							select2: ''
						})
					}}
				>
					Reset
				</Button>

				<Button>Submit</Button>
			</form>
		</div>
	)
}
