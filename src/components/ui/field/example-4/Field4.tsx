import { cn } from '@/utils/shadcn'
import { Controller } from 'react-hook-form'
import { IField4 } from './Field4.d'
import styles from './Field4.module.scss'

export function Field4(props: IField4) {
	return (
		<Controller
			control={props.control}
			name={props.name}
			rules={{ required: props.required }}
			render={({
				field: { onChange, onBlur, value, ref },
				fieldState: { error },
			}) => (
				<div>
					<div className={styles.field_container}>
						<input
							name={props.name}
							className={cn(`peer ${styles.input}`, {
								[styles.required]: error,
							})}
							type={props.type ?? 'text'}
							placeholder={props.placeholder}
							value={value || ''}
							onChange={onChange}
							onBlur={onBlur}
							ref={props.customRef || ref}
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
