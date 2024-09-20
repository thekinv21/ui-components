import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/button'
import { MultiSelect } from '@/components/ui/select/react-select/multi/MultiSelect'
import { SingleSelect } from '@/components/ui/select/react-select/single/SingleSelect'

interface IForm {
	stringOption: string | null
	numberOption: number | null
	booleanOption: boolean | null
}

export function App() {
	const formMethod = useForm<IForm>({
		mode: 'onChange'
	})

	const stringOptions = [
		{ value: 'string1', label: 'String1' },
		{ value: 'string2', label: 'String2' }
	]

	const numberOptions = [
		{ value: 1, label: 'Number1' },
		{ value: 2, label: 'Number2' }
	]

	const booleanOptions = [
		{ value: 'true', label: 'True' },
		{ value: 'false', label: 'False' }
	]

	const onSubmit: SubmitHandler<IForm> = data => {
		console.log(data)
	}

	const handleClear = () => {
		formMethod.reset({
			stringOption: null,
			numberOption: null,
			booleanOption: null
		})
	}

	return (
		<section className='flex h-screen items-center justify-center'>
			<form
				onSubmit={formMethod.handleSubmit(onSubmit)}
				className='flex flex-col flex-wrap gap-5'
			>
				<h1 className='mb-10 text-2xl font-bold'>
					Custom UI Select with React Hook Form
				</h1>

				<div className='flex w-full flex-col gap-5'>
					<span>Single Select</span>
					<MultiSelect
						name='stringOption'
						control={formMethod.control}
						required
						options={stringOptions}
					/>
				</div>

				<div className='flex w-full flex-col gap-5'>
					<span>Number Single Select</span>
					<SingleSelect
						name='numberOption'
						control={formMethod.control}
						required
						options={numberOptions}
					/>
				</div>

				<div className='flex w-full flex-col gap-5'>
					<span>Boolean Single Select</span>
					<SingleSelect
						name='booleanOption'
						control={formMethod.control}
						required
						options={booleanOptions}
					/>
				</div>

				<div className='mt-5 flex items-center gap-5'>
					<Button onClick={handleClear} type='button' variant='warning'>
						Clear
					</Button>

					<Button type='submit'>Submit</Button>
				</div>
			</form>
		</section>
	)
}
