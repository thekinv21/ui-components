import { Control } from 'react-hook-form'

export interface ITextArea2 {
	control: Control<any>
	name: string
	placeholder: string
	required?: boolean
	className?: string
}
