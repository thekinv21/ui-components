import { ISelectOption } from '@/types/base.types'

export interface ISelectProps {
	control: Control<any>
	name: string
	placeholder?: string
	required?: boolean
	className?: string
	options: ISelectOption[]
	isLoading?: boolean
	isDisabled?: boolean
}
