import { Control } from 'react-hook-form'

import { ISelectOption } from '@/types/base.types'

export interface IHtmlSelect {
	control: Control<any>
	name: string
	placeholder?: string
	required?: boolean
	icon?: React.ReactNode
	className?: string
	isBorderColor?: string
	options: ISelectOption[]
	customRef?: React.Ref<any>
}
