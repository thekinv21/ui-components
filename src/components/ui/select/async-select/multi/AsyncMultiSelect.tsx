import { Controller } from 'react-hook-form'
import makeAnimated from 'react-select/animated'
import AsyncSelect from 'react-select/async'

import { cn } from '@/utils/shadcn'

import { IAsyncSelectProps } from '../../Select'
import '../../Select.scss'

export function AsyncMultiSelect(props: IAsyncSelectProps) {
	const animatedComponent = makeAnimated()

	//NOTE: this variant takes only values from multiSelect array

	/* 
	
	value={props.options?.filter(option =>
		Array.isArray(value) ? value.includes(option.value) : null
	)}
	onChange={(newValue: MultiValue<any>) => {
		onChange(newValue?.map((item: ISelectOption) => item?.value))
	}}

	*/

	return (
		<Controller
			control={props.control}
			name={props.name}
			rules={{ required: props.required }}
			render={({
				field: { onChange, onBlur, value, ref },
				fieldState: { error }
			}) => {
				return (
					<div>
						<div>
							<AsyncSelect
								cacheOptions
								closeMenuOnSelect={false}
								ref={ref}
								name={props.name}
								placeholder={props.placeholder ?? 'Seçiniz'}
								value={value}
								onChange={onChange}
								onBlur={onBlur}
								components={animatedComponent}
								classNamePrefix={'custom_select'}
								className={cn(
									props.className,
									error &&
										'rounded-lg border border-red-500 hover:border-none focus:border-none'
								)}
								loadOptions={props.loadOptions}
								isMulti
								isDisabled={props.isDisabled}
								isLoading={props.isLoading}
								isClearable
								defaultOptions
							/>
						</div>

						<p
							className={cn(
								'mt-3 text-xs',
								error ? 'text-red-500' : 'text-transparent'
							)}
						>
							{error?.message ? error.message : 'This field is required'}
						</p>
					</div>
				)
			}}
		/>
	)
}
