import { useState } from 'react'

import { Button } from '@/components/ui/button/button'
import { Modal } from '@/components/ui/modal/Modal'

import { CreateForm } from './CreateForm'

export function App() {
	const [isCreate1, setIsCreate1] = useState<boolean>(false)
	const [isCreate2, setIsCreate2] = useState<boolean>(false)
	const [isCreate3, setIsCreate3] = useState<boolean>(false)
	const [isCreate4, setIsCreate4] = useState<boolean>(false)
	const [isCreate5, setIsCreate5] = useState<boolean>(false)

	return (
		<section className='flex h-screen items-center justify-center'>
			<div>
				<div className='mt-5 flex items-center gap-5'>
					<Button
						type='button'
						onClick={() => {
							setIsCreate1(!isCreate1)
						}}
					>
						Fade In
					</Button>

					<Button
						type='button'
						variant='warning'
						onClick={() => {
							setIsCreate2(!isCreate2)
						}}
					>
						SlideIn Down
					</Button>

					<Button
						type='button'
						variant='danger'
						onClick={() => {
							setIsCreate3(!isCreate3)
						}}
					>
						FadeIn Up
					</Button>

					<Button
						type='button'
						variant='info'
						onClick={() => {
							setIsCreate4(!isCreate4)
						}}
					>
						SlideIn Up
					</Button>

					<Button
						type='button'
						variant='secondary'
						onClick={() => {
							setIsCreate4(!isCreate5)
						}}
					>
						ZoomIn Up
					</Button>
				</div>

				{isCreate1 && (
					<Modal
						modal={{
							isOpen: isCreate1,
							setIsOpen: setIsCreate1
						}}
						size='xl'
					>
						<CreateForm />
					</Modal>
				)}

				{isCreate2 && (
					<Modal
						modal={{
							isOpen: isCreate2,
							setIsOpen: setIsCreate2
						}}
						size='xl'
						animate='animate__slideInDown'
					>
						<CreateForm />
					</Modal>
				)}

				{isCreate3 && (
					<Modal
						modal={{
							isOpen: isCreate3,
							setIsOpen: setIsCreate3
						}}
						size='xl'
						animate='animate__fadeInUp'
					>
						<CreateForm />
					</Modal>
				)}

				{isCreate4 && (
					<Modal
						modal={{
							isOpen: isCreate4,
							setIsOpen: setIsCreate4
						}}
						size='xl'
						animate='animate__slideInUp'
					>
						<CreateForm />
					</Modal>
				)}

				{isCreate5 && (
					<Modal
						modal={{
							isOpen: isCreate5,
							setIsOpen: setIsCreate5
						}}
						size='xl'
						animate='animate__zoomInUp'
					>
						<CreateForm />
					</Modal>
				)}
			</div>
		</section>
	)
}
