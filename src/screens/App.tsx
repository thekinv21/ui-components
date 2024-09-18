import { Button } from '@/components/ui/button/button'
import { TextArea } from '@/components/ui/textarea/example-1/TextArea'
import { TextArea2 } from '@/components/ui/textarea/example-2/TextArea2'
import { TextArea4 } from '@/components/ui/textarea/example-4/TextArea4'

import { SubmitHandler, useForm } from 'react-hook-form'

interface IForm {
	note1: string
	note2: string
	note3: string
}

export function App() {
	const formMethod = useForm<IForm>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IForm> = data => {
		console.log(data)
	}

	return (
		<section className='h-screen flex items-center justify-center'>
			<form
				onSubmit={formMethod.handleSubmit(onSubmit)}
				className='flex gap-5 flex-wrap flex-col'
			>
				<h1 className='text-2xl font-bold mb-10'>
					Custom UI TextArea with React Hook Form
				</h1>

				<div className='flex gap-5 flex-col'>
					<span>1. Type TextArea Input</span>
					<TextArea
						placeholder='Note 1'
						name='note1'
						control={formMethod.control}
						required
					/>
				</div>

				<div className='flex gap-5 flex-col'>
					<span>2. Type TextArea Input</span>
					<TextArea2
						placeholder='Note 2'
						name='note2'
						control={formMethod.control}
						required
					/>
				</div>

				<div className='flex gap-5 flex-col'>
					<span>3. Type TextArea Input</span>
					<TextArea4
						name='note3'
						control={formMethod.control}
						label='Note 3'
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
