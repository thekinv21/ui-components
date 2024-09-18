import countries from '@/assets/json/countries.json'
import { useState } from 'react'

import { cn } from '@/utils/shadcn'
import { Controller } from 'react-hook-form'
import { IPhoneField } from './PhoneField.d'
import styles from './PhoneField.module.scss'

export function PhoneField(props: IPhoneField) {
	const [country, setCountry] = useState<string>(countries[0].iso2)

	const countryPhoneCode = countries.find(
		countryItem => countryItem.iso2 === country
	)?.phone_code

	const handlePhoneChange = (phone: string) => {
		const detectedCountry = countries.find(countryItem =>
			phone.startsWith(`${countryItem.phone_code}`)
		)
		if (detectedCountry) {
			setCountry(detectedCountry.iso2)
		}
	}

	return (
		<Controller
			control={props.control}
			name={props.name}
			rules={{ required: props.required }}
			render={({
				field: { onChange, onBlur, value, ref },
				fieldState: { error },
			}) => (
				<fieldset>
					<div className={styles.container}>
						<div className={styles.content}>
							<div className={styles.select_container}>
								<select
									className={styles.select}
									value={country}
									onChange={e => setCountry(e.target.value)}
								>
									{countries.map((countryItem, idx: number) => (
										<option key={idx} value={countryItem.iso2}>
											{countryItem.emoji} {countryItem.iso2}
										</option>
									))}
								</select>
							</div>
							<input
								name={props.name}
								type='number'
								className={cn(styles.input, { [styles.required]: error })}
								placeholder={`+ ${countryPhoneCode}`}
								value={value || ''}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									onChange(e.target.value)
									handlePhoneChange(e.target.value)
								}}
								onBlur={onBlur}
								ref={ref}
								autoComplete='off'
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
				</fieldset>
			)}
		/>
	)
}
