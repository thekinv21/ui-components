import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/button'
import { TextArea } from '@/components/ui/textarea/example-1/TextArea'
import { TextArea2 } from '@/components/ui/textarea/example-2/TextArea2'

interface IForm {
	test1: string
	test2: string
}

export function TextAreaForms() {
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
					TextArea with React Hook Form
				</h1>

				<p className='py-3 text-sm font-normal text-gray-500'>
					You can also provide custom messages and specify custom widths for
					TextArea. Example with React-Hook-Form
				</p>
			</div>

			<form
				onSubmit={formMethod.handleSubmit(onSubmit)}
				className='grid grid-cols-2 gap-10 font-light'
			>
				<div className='flex w-full flex-col gap-2'>
					<span>TextArea 1</span>
					<TextArea
						control={formMethod.control}
						name='test1'
						placeholder='Not 1'
						type='text'
						required
					/>
				</div>

				<div className='flex w-full flex-col gap-2'>
					<span>TextArea 2</span>
					<TextArea2
						control={formMethod.control}
						name='test2'
						placeholder='Not 2'
						required
					/>
				</div>

				<Button
					type='button'
					variant='warning'
					onClick={() => {
						formMethod.reset({
							test1: '',
							test2: ''
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
