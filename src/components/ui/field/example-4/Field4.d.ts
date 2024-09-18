import { Control } from 'react-hook-form'

export interface IField4 {
	control: Control<any>
	name: string
	placeholder?: string
	type?: string
	required?: boolean
	className?: string
	customRef?: React.RefObject<HTMLInputElement>
	label?: string
}
