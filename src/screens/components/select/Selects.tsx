import { useForm } from 'react-hook-form'

import { HtmlSelect } from '@/components/ui/html-select/example-1/HtmlSelect'
import { HtmlSelect2 } from '@/components/ui/html-select/example-2/HtmlSelect2'

interface IForm {
	select: string
}

export function Selects() {
	const formMethod = useForm<IForm>({
		mode: 'onChange'
	})

	return (
		<div className='panel space-y-3 text-sm'>
			<div>
				<h1 className='py-3 text-sm font-normal uppercase text-gray-500'>
					Select
				</h1>

				<p className='py-3 text-sm font-normal text-gray-500'>
					You can also provide custom messages and specify custom widths for
					Select. Additionally, you can add your own styles to tailor the look
					and feel
				</p>
			</div>

			<div className='grid grid-cols-2 gap-10 font-light'>
				<div className='flex w-full flex-col gap-2'>
					<span>Select1</span>
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
			</div>
		</div>
	)
}
