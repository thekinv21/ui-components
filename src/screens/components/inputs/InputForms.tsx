import { Lock, User2Icon } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/button'
import { Field } from '@/components/ui/field/example-1/Field1'
import { Field2 } from '@/components/ui/field/example-2/Field2'

interface IForm {
	test1: string
	test2: string
}

export function InputForms() {
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
					Inputs with React Hook Form
				</h1>

				<p className='py-3 text-sm font-normal text-gray-500'>
					You can also provide custom messages and specify custom widths for
					Inputs. Example with React-Hook-Form
				</p>
			</div>

			<form
				onSubmit={formMethod.handleSubmit(onSubmit)}
				className='grid grid-cols-2 gap-10 font-light'
			>
				<div className='flex w-full flex-col gap-2'>
					<span>INput 1</span>
					<Field
						control={formMethod.control}
						name='test1'
						placeholder='Username'
						type='text'
						icon={<User2Icon size={16} />}
						required
					/>
				</div>

				<div className='flex w-full flex-col gap-2'>
					<span>Input 2</span>
					<Field2
						control={formMethod.control}
						name='test2'
						placeholder='Password'
						type='password'
						icon={<Lock size={16} />}
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
