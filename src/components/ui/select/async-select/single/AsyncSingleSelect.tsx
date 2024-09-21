import { Controller } from 'react-hook-form'
import makeAnimated from 'react-select/animated'
import AsyncSelect from 'react-select/async'

import { cn } from '@/utils/shadcn'

import { IAsyncSelectProps } from '../../Select'
import '../../Select.scss'

export function AsyncSingleSelect(props: IAsyncSelectProps) {
	const animatedComponent = makeAnimated()

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
								ref={ref}
								name={props.name}
								placeholder={props.placeholder ?? 'Seçiniz...'}
								value={value}
								onChange={onChange}
								onBlur={onBlur}
								components={animatedComponent}
								classNamePrefix={`custom_select`}
								className={cn(
									props.className,
									error &&
										'rounded-lg border border-red-500 hover:border-none focus:border-none'
								)}
								loadOptions={props.loadOptions}
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
