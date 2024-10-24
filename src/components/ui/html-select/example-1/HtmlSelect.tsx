import { Controller } from 'react-hook-form'

import { ISelectOption } from '@/types/base.types'

import { cn } from '@/utils/shadcn'

import { IHtmlSelect } from './HtmlSelect.d'
import styles from './HtmlSelect.module.scss'

export function HtmlSelect(props: IHtmlSelect) {
	return (
		<Controller
			control={props.control}
			name={props.name}
			rules={{ required: props.required ?? false }}
			render={({
				field: { onChange, onBlur, value, ref },
				fieldState: { error }
			}) => (
				<div className={styles.field_container}>
					<div className={styles.field_wrapper}>
						<div className={styles.wrapper}>
							{props.icon && <div className={styles.icon}>{props.icon}</div>}
							<select
								onChange={onChange}
								onBlur={onBlur}
								value={value}
								ref={ref || props.customRef}
								className={cn(
									styles.select,
									props.className,
									error
										? 'border-red-500'
										: props.isBorderColor || 'border-gray-300'
								)}
							>
								<option value='' disabled>
									{props.placeholder ?? 'Seçiniz'}
								</option>
								{props.options.map((option: ISelectOption, idx: number) => (
									<option key={idx} value={option.value?.toString()}>
										{option.label?.toString()}
									</option>
								))}
							</select>
							<p
								className={cn(
									styles.focus_border,
									error ? 'bg-red-500' : props.isBorderColor || 'bg-gray-700'
								)}
							/>
						</div>
					</div>
					<p
						className={cn(
							styles.error_message,
							error ? 'text-red-500' : 'text-transparent'
						)}
					>
						{error?.message || 'This field is required'}
					</p>
				</div>
			)}
		/>
	)
}
