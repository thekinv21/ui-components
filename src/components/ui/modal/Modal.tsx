import { ReactNode } from 'react'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

interface IModal {
	children: ReactNode
	modal: {
		isOpen: boolean
		setIsOpen: (i: boolean) => void
	}
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
	animate?:
		| 'animate__fadeIn'
		| 'animate__slideInDown'
		| 'animate__fadeInUp'
		| 'animate__slideInUp'
		| 'animate__zoomInUp'
}

export function Modal({ children, size = 'md', ...props }: IModal) {
	const sizeChange = (size: string): string => {
		switch (size) {
			case 'xs':
				return `max-w-xs`
			case 'sm':
				return `max-w-sm`
			case 'md':
				return `max-w-md`
			case 'lg':
				return `max-w-lg`
			case 'xl':
				return `max-w-xl`
			case '2xl':
				return `max-w-2xl`
			default:
				return 'max-w-md'
		}
	}

	return (
		<Dialog
			as='div'
			className='relative z-10'
			open={props.modal.isOpen}
			onClose={() => props.modal.setIsOpen(false)}
		>
			<DialogBackdrop className='fixed inset-0 z-10 overflow-y-auto bg-[black]/50'>
				<div className='flex min-h-full items-center justify-center p-4 text-center'>
					<DialogPanel
						className={`animate__animated ${props.animate ? props.animate : 'animate__fadeIn'} w-full transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all ${sizeChange(
							size
						)}`}
					>
						<div className='mt-4'>{children}</div>
					</DialogPanel>
				</div>
			</DialogBackdrop>
		</Dialog>
	)
}
