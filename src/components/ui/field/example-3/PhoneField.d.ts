import { Control } from 'react-hook-form'

export interface IPhoneField {
	control: Control<any>
	name: string
	required?: boolean
	className?: string
}
