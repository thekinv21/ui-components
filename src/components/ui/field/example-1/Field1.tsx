import React from 'react'
import { Controller } from 'react-hook-form'

import { cn } from '@/utils/shadcn'
import { IField } from './Field'
import styles from './Field1.module.scss'

export const Field: React.FC<IField> = ({
	control,
	name,
	placeholder,
	type = 'text',
	required = false,
	icon,
	className,
	isBorderColor,
	customRef,
}) => (
	<Controller
		control={control}
		name={name}
		rules={{ required: required }}
		render={({
			field: { onChange, onBlur, value, ref },
			fieldState: { error },
		}) => (
			<div className={styles.field_container}>
				<div className={styles.field_wrapper}>
					<div className={styles.wrapper}>
						{icon && <div className={styles.icon}>{icon}</div>}
						<input
							placeholder={placeholder}
							onChange={onChange}
							onBlur={onBlur}
							value={value || ''}
							ref={customRef || ref}
							type={type}
							className={cn(
								styles.input,
								styles.effect_1,
								icon ? 'pl-[3rem]' : 'pl-[1rem]',
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
