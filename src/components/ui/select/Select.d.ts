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

export interface IAsyncSelectProps {
	control: Control<any>
	name: string
	placeholder?: string
	required?: boolean
	className?: string
	isLoading?: boolean
	isDisabled?: boolean
	loadOptions: (
		inputValue: string,
		callback: (options: ISelectOption[]) => void
	) => void
}
