import { cn } from '@/utils/shadcn'
import { Controller } from 'react-hook-form'
import { IField2 } from './Field2.d'
import styles from './Field2.module.scss'

export function Field2(props: IField2) {
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
					<div className={styles.group}>
						{props.icon ? (
							<div className={styles.icon}>{props.icon}</div>
						) : null}
						<input
							name={props.name}
							className={cn(
								styles.input,
								props.icon ? 'pl-[3rem]' : 'pl-[1rem]',
								{ [styles.required]: error }
							)}
							type={props.type ?? 'text'}
							placeholder={props.placeholder}
							value={value || ''}
							onChange={onChange}
							onBlur={onBlur}
							ref={props.customRef || ref}
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
