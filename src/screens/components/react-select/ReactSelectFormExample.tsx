import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/button'
import { MultiSelect } from '@/components/ui/select/react-select/multi/MultiSelect'
import { SingleSelect } from '@/components/ui/select/react-select/single/SingleSelect'

import { ISelectOption } from '@/types/base.types'

interface IForm {
	item1: number | null
	item2: number | null
}

export function ReactSelectFormExample() {
	const formMethod = useForm<IForm>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IForm> = data => {
		alert(JSON.stringify(data))
	}

	const options: ISelectOption[] = [
		{
			label: 'car1',
			value: 1
		},
		{
			label: 'car2',
			value: 2
		},
		{
			label: 'car3',
			value: 3
		}
	]

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
					React Select. Additionally, you can add your own styles to tailor the
					look and feel
				</p>
			</div>

			<div className='flex flex-row gap-5 font-light'>
				<div className='flex w-full flex-col gap-2'>
					<span>Single React Select</span>
					<SingleSelect
						name='item1'
						control={formMethod.control}
						required
						options={options}
					/>
				</div>

				<div className='flex w-full flex-col gap-2'>
					<span>Multi React Select</span>
					<MultiSelect
						options={options}
						name='item2'
						control={formMethod.control}
						required
					/>
				</div>
			</div>

			<div className='flex w-full gap-2'>
				<Button
					onClick={() => {
						formMethod.reset({
							item1: null,
							item2: null
						})
					}}
					variant='warning'
				>
					Reset
				</Button>
				<Button>Submit</Button>
			</div>
		</form>
	)
}
