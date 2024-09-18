import { cn } from '@/utils/shadcn'
import { Controller } from 'react-hook-form'
import { ITextArea2 } from './TextArea2.d'
import styles from './TextArea2.module.scss'

export function TextArea2(props: ITextArea2) {
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
					<div className={styles.group}>
						<textarea
							name={props.name}
							className={cn(styles.input, { [styles.required]: error })}
							placeholder={props.placeholder}
							value={value || ''}
							onChange={onChange}
							onBlur={onBlur}
							autoComplete='off'
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
