import { useForm } from 'react-hook-form'

import { TextArea } from '@/components/ui/textarea/example-1/TextArea'
import { TextArea2 } from '@/components/ui/textarea/example-2/TextArea2'

interface IForm {
	test1: string
	test2: string
}

export function TextAreas() {
	const formMethod = useForm<IForm>({
		mode: 'onChange'
	})

	return (
		<div className='panel space-y-3 text-sm'>
			<div>
				<h1 className='py-3 text-sm font-normal uppercase text-gray-500'>
					TextArea
				</h1>

				<p className='py-3 text-sm font-normal text-gray-500'>
					You can also provide custom messages and specify custom widths for
					TextArea. Additionally, you can add your own styles to tailor the look
					and feel
				</p>
			</div>

			<div className='grid grid-cols-2 gap-10 font-light'>
				<div className='flex w-full flex-col gap-2'>
					<span>TextArea 1</span>
					<TextArea
						control={formMethod.control}
						name='test1'
						placeholder='Not 1'
					/>
				</div>

				<div className='flex w-full flex-col gap-2'>
					<span>TextArea 2</span>
					<TextArea2
						control={formMethod.control}
						name='test2'
						placeholder='Not 2'
					/>
				</div>
			</div>
		</div>
	)
}
