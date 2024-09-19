import DatePicker from 'react-flatpickr'
import { Control } from 'react-hook-form'

export interface IDatePicker {
	name: string
	control: Control<any>
	required?: boolean
	disabled?: boolean
	className?: string
	customRef?: React.RefObject<DatePicker>
}
