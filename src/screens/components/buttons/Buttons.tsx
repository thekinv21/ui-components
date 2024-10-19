import { User2Icon } from 'lucide-react'

import { Button } from '@/components/ui/button/button'

export function Buttons() {
	return (
		<div className='panel my-10 space-y-3 text-sm'>
			<div>
				<h1 className='py-3 text-sm font-normal uppercase text-gray-500'>
					Buttons
				</h1>

				<p className='py-3 text-sm font-normal text-gray-500'>
					You can also provide custom messages and specify custom widths for
					buttons. Additionally, you can add your own styles to tailor the look
					and feel
				</p>
			</div>

			<div className='grid grid-cols-4 gap-10 font-light'>
				<Button size={'sm'} variant='success'>
					Success
				</Button>
				<Button size={'sm'} variant='danger'>
					Error
				</Button>
				<Button size={'sm'} variant='warning'>
					Warning
				</Button>
				<Button size={'sm'} variant='info'>
					Info
				</Button>
				<Button size={'sm'} variant='outline'>
					{' '}
					Outline
				</Button>

				<Button
					size={'sm'}
					variant='secondary'
					leftSection={<User2Icon size={18} />}
				>
					Left Side Icon
				</Button>
				<Button size={'sm'} rightSection={<User2Icon size={18} />}>
					Right Side Icon
				</Button>

				<Button size={'sm'}>
					<User2Icon size={18} />
				</Button>

				<Button size={'sm'} variant='ghost'>
					Ghost
				</Button>

				<Button size={'sm'} variant='link'>
					Link
				</Button>

				<Button size={'icon'}>
					<User2Icon size={18} />
				</Button>
			</div>
		</div>
	)
}
