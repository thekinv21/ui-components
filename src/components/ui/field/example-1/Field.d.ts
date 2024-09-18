import { Control } from 'react-hook-form'

export interface IField {
	control: Control<any>
	name: string
	placeholder: string
	type?: string
	required?: boolean
	icon?: React.ReactNode
	className?: string
	isBorderColor?: string
	customRef?: React.RefObject<HTMLInputElement>
}
