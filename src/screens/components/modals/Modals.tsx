import { useState } from 'react'

import { Button } from '@/components/ui/button/button'
import { Modal } from '@/components/ui/modal/Modal'

import { ModalFormExample } from './ModalFormExample'

type TypeModalConfig = {
	size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '5xl'
	position?: 'center' | 'start'
	animate?:
		| 'animate__fadeIn'
		| 'animate__slideInDown'
		| 'animate__fadeInUp'
		| 'animate__slideInUp'
		| 'animate__zoomInUp'
		| 'animate__fadeInLeft'
		| 'animate__fadeInRight'
}

type TypeButtonConfig = {
	label: string
	modalName: keyof typeof MODAL_CONFIG
	variant: 'info' | 'success' | 'warning' | 'danger' | 'secondary' | 'default'
}

const MODAL_CONFIG: Record<string, TypeModalConfig> = {
	basic: { size: 'xl' },
	vertical: { size: 'xl', position: 'center' },
	static: { size: 'xl', animate: 'animate__fadeInUp' },
	extraLarge: { size: '5xl' },
	large: { size: '3xl' },
	small: { size: 'sm' },
	fadeIn: { size: 'md', animate: 'animate__fadeIn' },
	slideIn: { size: 'md', animate: 'animate__slideInDown' },
	fadeUp: { size: 'md', animate: 'animate__fadeInUp' },
	slideUp: { size: 'md', animate: 'animate__slideInUp' },
	fadeInLeft: { size: 'md', animate: 'animate__fadeInLeft' },
	fadeInRight: { size: 'md', animate: 'animate__fadeInRight' }
}

const BUTTON_CONFIG: TypeButtonConfig[] = [
	{ label: 'Basic', modalName: 'basic', variant: 'info' },
	{ label: 'Vertically Centered', modalName: 'vertical', variant: 'success' },
	{ label: 'Static', modalName: 'static', variant: 'warning' },
	{ label: 'Extra Large', modalName: 'extraLarge', variant: 'warning' },
	{ label: 'Large', modalName: 'large', variant: 'danger' },
	{ label: 'Small', modalName: 'small', variant: 'secondary' },
	{ label: 'FadeIn', modalName: 'fadeIn', variant: 'warning' },
	{ label: 'SlideIn Down', modalName: 'slideIn', variant: 'danger' },
	{ label: 'FadeIn Up', modalName: 'fadeUp', variant: 'secondary' },
	{ label: 'SlideIn Up', modalName: 'slideUp', variant: 'info' },
	{ label: 'FadeIn Left', modalName: 'fadeInLeft', variant: 'default' },
	{ label: 'FadeIn Right', modalName: 'fadeInRight', variant: 'default' }
]

export function Modals() {
	const [isOpen, setIsOpen] = useState<keyof typeof MODAL_CONFIG | null>(null)

	const handleOpen = (modalName: keyof typeof MODAL_CONFIG) =>
		setIsOpen(modalName)
	const handleClose = () => setIsOpen(null)

	return (
		<section className='gap-5 py-10'>
			<div>
				<h1 className='py-3 text-sm font-normal uppercase text-gray-500'>
					Modal
				</h1>

				<p className='py-3 text-sm font-normal text-gray-500'>
					You can also provide custom messages and specify custom widths for
					Modas. Additionally, you can add your own styles to tailor the look
					and feel
				</p>
			</div>

			<div className='grid grid-cols-1 gap-5 py-10 md:grid-cols-2'>
				{BUTTON_CONFIG.map(({ label, modalName, variant }) => (
					<div key={modalName} className='panel flex flex-col'>
						<h1 className='pb-5 text-sm font-normal uppercase text-gray-500'>
							{label}
						</h1>
						<div className='mx-auto flex w-full items-center justify-center'>
							<Button
								size='sm'
								variant={variant}
								className='min-w-40 capitalize'
								onClick={() => handleOpen(modalName)}
							>
								{modalName}
							</Button>
						</div>
					</div>
				))}
			</div>

			{isOpen && (
				<Modal
					modal={{
						isOpen: Boolean(isOpen),
						setIsOpen: handleClose
					}}
					size={MODAL_CONFIG[isOpen].size}
					animate={MODAL_CONFIG[isOpen].animate}
				>
					<ModalFormExample />
				</Modal>
			)}
		</section>
	)
}
