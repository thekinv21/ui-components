import { Lock, User2Icon } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { Field } from '@/components/ui/field/example-1/Field1'
import { Field2 } from '@/components/ui/field/example-2/Field2'

interface IForm {
	test1: string
	test2: string
}

export function Inputs() {
	const formMethod = useForm<IForm>({
		mode: 'onChange'
	})

	return (
		<div className='panel space-y-3 text-sm'>
			<div>
				<h1 className='py-3 text-sm font-normal uppercase text-gray-500'>
					Input
				</h1>

				<p className='py-3 text-sm font-normal text-gray-500'>
					You can also provide custom messages and specify custom widths for
					Input. Additionally, you can add your own styles to tailor the look
					and feel
				</p>
			</div>

			<div className='grid grid-cols-2 gap-10 font-light'>
				<div className='flex w-full flex-col gap-2'>
					<span>Input 1</span>
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
			</div>
		</div>
	)
}
