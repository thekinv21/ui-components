import { ReactNode } from 'react'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

interface IModal {
	children: ReactNode
	modal: {
		isOpen: boolean
		setIsOpen: (i: boolean) => void
	}
	position?: 'center' | 'start'
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '5xl'
	animate?:
		| 'animate__fadeIn'
		| 'animate__slideInDown'
		| 'animate__fadeInUp'
		| 'animate__slideInUp'
		| 'animate__zoomInUp'
		| 'animate__fadeInLeft'
		| 'animate__fadeInRight'
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
			case '5xl':
				return `max-w-5xl`
			case '3xl':
				return `max-w-3xl`
			default:
				return 'max-w-md'
		}
	}

	const positionCheck = (position: string): string => {
		switch (position) {
			case 'center':
				return `items-center justify-center`
			case 'start':
				return `items-start justify-center`

			default:
				return 'items-start justify-center'
		}
	}

	return (
		<Dialog
			as='div'
			className='relative z-10'
			open={props.modal.isOpen}
			onClose={() => props.modal.setIsOpen(false)}
		>
			<DialogBackdrop className='fixed inset-0 overflow-y-auto bg-[black]/50'>
				<div
					className={`flex min-h-full p-4 text-center ${props.position ? positionCheck(props.position) : 'items-start justify-center'}`}
				>
					<DialogPanel
						className={`animate__animated ${props.animate ?? 'animate__fadeIn'} w-full transform rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all ${sizeChange(
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
