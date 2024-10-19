import { useQuery } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/button'
import { SingleDate } from '@/components/ui/datePicker/single/SingleDate'
import { Field2 } from '@/components/ui/field/example-2/Field2'
import { MultiSelect } from '@/components/ui/select/react-select/multi/MultiSelect'
import { SingleSelect } from '@/components/ui/select/react-select/single/SingleSelect'

import { IPost, IUser } from '@/types/helper.types'

import { baseService } from '@/service/base.service'

interface IForm {
	stringOption: string | null
	numberOption: number | null
	booleanOption: boolean | null
	singleDate: Date
	rangeDate: Date
	field: string
	textarea: string
}

export function ModalFormExample() {
	const formMethod = useForm<IForm>({
		mode: 'onChange'
	})

	const userQuery = useQuery({
		queryKey: ['get-all-users'],
		queryFn: () => baseService.getUsers(),
		select: ({ data }) =>
			data?.map((item: IUser) => {
				return { label: item.username, value: item.id }
			})
	})

	const postQuery = useQuery({
		queryKey: ['get-all-posts'],
		queryFn: () => baseService.getPost(),
		select: ({ data }) =>
			data?.map((item: IPost) => {
				return { label: item.title?.slice(0, 10), value: item.id }
			})
	})

	const onSubmit: SubmitHandler<IForm> = () => {}

	return (
		<form
			onSubmit={formMethod.handleSubmit(onSubmit)}
			className='flex flex-col flex-wrap gap-4 text-sm'
		>
			<h1 className='text-2xl font-bold'>Custom Modal UI</h1>

			<div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
				<div className='flex w-full flex-col gap-2'>
					<span>Multi Select</span>
					<MultiSelect
						name='stringOption'
						control={formMethod.control}
						options={userQuery.data}
						isLoading={userQuery.isFetching || userQuery.isLoading}
						isDisabled={userQuery.isFetching || userQuery.isLoading}
					/>
				</div>

				<div className='flex w-full flex-col gap-2'>
					<span> Single Select</span>
					<SingleSelect
						name='numberOption'
						control={formMethod.control}
						options={postQuery.data}
						isLoading={postQuery.isFetching || postQuery.isLoading}
						isDisabled={postQuery.isFetching || postQuery.isLoading}
					/>
				</div>

				<div className='flex w-full flex-col gap-2'>
					<span> Single DatePicker</span>
					<SingleDate name='singleDate' control={formMethod.control} />
				</div>

				<div className='flex w-full flex-col gap-2'>
					<span>Field</span>
					<Field2
						name='field'
						placeholder='Field Giriniz'
						control={formMethod.control}
					/>
				</div>
			</div>

			<div className='flex w-full flex-col gap-2 md:flex-row'>
				<Button className='w-full' type='button' variant='warning'>
					Clear
				</Button>

				<Button className='w-full' type='submit'>
					Submit
				</Button>
			</div>
		</form>
	)
}
