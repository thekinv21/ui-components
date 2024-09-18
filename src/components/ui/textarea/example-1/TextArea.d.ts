import { Control } from 'react-hook-form'

export interface ITextArea {
	control: Control<any>
	name: string
	placeholder: string
	type?: string
	required?: boolean
	className?: string
	isBorderColor?: string
	customRef?: React.RefObject<HTMLInputElement>
}
