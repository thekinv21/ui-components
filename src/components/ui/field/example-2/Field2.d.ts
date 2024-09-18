import { ReactNode } from 'react'
import { Control } from 'react-hook-form'

export interface IField2 {
	control: Control<any>
	name: string
	placeholder: string
	type?: string
	required?: boolean
	icon?: ReactNode
	className?: string
	customRef?: React.RefObject<HTMLInputElement>
}
