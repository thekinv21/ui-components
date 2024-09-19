import DatePicker from 'react-datepicker'
import { Controller } from 'react-hook-form'

import { cn } from '@/utils/shadcn'

import { IDatePicker } from '../Date'
import styles from '../Date.module.scss'

// TODO: // don't forget import this styles from dist
import 'react-datepicker/dist/react-datepicker.css'

// TODO: // import my custom react-datepicker styles from assets/css file for your global css file

export function RangeDate(props: IDatePicker) {
	return (
		<Controller
			control={props.control}
			name={props.name}
			rules={{ required: props.required }}
			render={({
				field: { onChange, onBlur, value },
				fieldState: { error }
			}) => (
				<div>
					<div className={styles.group}>
						<DatePicker
							showIcon
							locale='tr'
							showMonthDropdown
							showYearDropdown
							selectsRange
							startDate={
								value !== null && value !== undefined ? value[0] : undefined
							}
							endDate={
								value !== null && value !== undefined ? value[1] : undefined
							}
							onChange={(dates: [Date | null, Date | null]) => {
								onChange(dates)
							}}
							onBlur={onBlur}
							className={cn(
								styles.input,

								{ [styles.required]: error },
								props.className
							)}
							disabled={props.disabled ? props.disabled : false}
							dateFormat='dd-MM-yyyy'
							placeholderText='Tarih Seçiniz'
						/>
					</div>

					<p
						className={cn(
							styles.error_message,
							error ? 'text-red-500' : 'text-transparent'
						)}
					>
						{error?.message ? error.message : 'This field is required'}
					</p>
				</div>
			)}
		/>
	)
}
