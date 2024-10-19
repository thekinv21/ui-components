import { ReactNode } from 'react'

export interface IModal {
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
