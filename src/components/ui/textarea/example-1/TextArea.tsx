import React from 'react'
import { Controller } from 'react-hook-form'

import { cn } from '@/utils/shadcn'

import { ITextArea } from './TextArea.d'
import styles from './TextArea.module.scss'

export const TextArea: React.FC<ITextArea> = ({
	control,
	name,
	placeholder,
	required = false,
	className,
	isBorderColor,
}) => (
	<Controller
		control={control}
		name={name}
		rules={{ required: required }}
		render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
			<div className={styles.field_container}>
				<div className={styles.field_wrapper}>
					<div className={styles.wrapper}>
						<textarea
							placeholder={placeholder}
							onChange={onChange}
							onBlur={onBlur}
							value={value || ''}
							className={cn(
								styles.input,
								styles.effect_1,
								{ [styles.required]: error },
								className
							)}
							autoComplete='off'
						/>
						<p
							className={cn(
								styles.focus_border,
								error ? 'bg-red-500' : isBorderColor || 'bg-gray-700'
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
					{error?.message ? error.message : 'This field is required'}
				</p>
			</div>
		)}
	/>
)
