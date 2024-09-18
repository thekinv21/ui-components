import { Button } from '@/components/ui/button/button'
import { Field } from '@/components/ui/field/example-1/Field1'
import { Field2 } from '@/components/ui/field/example-2/Field2'
import { PhoneField } from '@/components/ui/field/example-3/PhoneField'
import { Field4 } from '@/components/ui/field/example-4/Field4'

import { Lock, Mail } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IForm {
	email: string
	password: string
	username: string
	phone: string
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
					Custom UI Inputs with React Hook Form
				</h1>

				<div className='flex gap-5 flex-col'>
					<span>1. Type Input</span>
					<Field
						placeholder='Email'
						name='email'
						control={formMethod.control}
						required
						icon={<Mail size={20} strokeWidth={1} />}
					/>
				</div>

				<div className='flex gap-5 flex-col'>
					<span>2. Type Input</span>
					<Field2
						placeholder='Password'
						name='password'
						control={formMethod.control}
						icon={<Lock size={20} strokeWidth={1} />}
						required
					/>
				</div>

				<div className='flex gap-5 flex-col'>
					<span>3. Phone Number Input</span>
					<PhoneField name='phone' control={formMethod.control} required />
				</div>

				<div className='flex gap-5 flex-col'>
					<span>4.Type Input</span>
					<Field4
						name='username'
						control={formMethod.control}
						required
						label='Username'
					/>
				</div>

				<Button type='submit' className='mt-10'>
					Submit
				</Button>
			</form>
		</section>
	)
}
