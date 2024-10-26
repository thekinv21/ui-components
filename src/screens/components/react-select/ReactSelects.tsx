import { useForm } from 'react-hook-form'

import { MultiSelect } from '@/components/ui/select/react-select/multi/MultiSelect'
import { SingleSelect } from '@/components/ui/select/react-select/single/SingleSelect'

import { ISelectOption } from '@/types/base.types'

interface IForm {
	singleDate: Date
	rangeDate: Date
}

export function ReactSelects() {
	const formMethod = useForm<IForm>({
		mode: 'onChange'
	})

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
		<div className='panel my-10 space-y-3 text-sm'>
			<div>
				<h1 className='py-3 text-sm font-normal uppercase text-gray-500'>
					React DatePicker
				</h1>

				<p className='py-3 text-sm font-normal text-gray-500'>
					You can also provide custom messages and specify custom widths for
					DatePicker. Additionally, you can add your own styles to tailor the
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
		</div>
	)
}
