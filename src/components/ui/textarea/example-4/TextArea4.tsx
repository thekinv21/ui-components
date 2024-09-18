import { cn } from '@/utils/shadcn'
import { Controller } from 'react-hook-form'

import { ITextArea4 } from './TextArea4.d'
import styles from './TextArea4.module.scss'

export function TextArea4(props: ITextArea4) {
	return (
		<Controller
			control={props.control}
			name={props.name}
			rules={{ required: props.required }}
			render={({
				field: { onChange, onBlur, value },
				fieldState: { error },
			}) => (
				<div>
					<div className={styles.field_container}>
						<textarea
							name={props.name}
							className={cn(`peer ${styles.input}`, {
								[styles.required]: error,
							})}
							placeholder={props.placeholder}
							value={value || ''}
							onChange={onChange}
							onBlur={onBlur}
							autoComplete='off'
						/>

						<label
							className={cn(
								styles.label,
								`peer-focus:top-0 peer-focus:left-3 peer-focus:text-xs ${
									!error && `peer-focus:text-[#4070f4]`
								}`,
								{
									[styles.focused]: value || error,
								},
								error ? styles.label_error : styles.label_default
							)}
							htmlFor={props.name}
						>
							{props.label}
						</label>
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
