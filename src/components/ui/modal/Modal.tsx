import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

import { IModal } from './Modal.d'

export function Modal({
	children,
	size = 'md',
	position = 'start',
	...props
}: IModal) {
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
				return 'items-center justify-center'

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
					className={`flex min-h-full ${positionCheck(position)} p-4 text-center`}
				>
					<DialogPanel
						className={`animate__animated ${props.animate ?? 'animate__fadeIn'} w-full transform rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all ${sizeChange(
							size
						)} `}
					>
						<div className='mt-4'>{children}</div>
					</DialogPanel>
				</div>
			</DialogBackdrop>
		</Dialog>
	)
}
