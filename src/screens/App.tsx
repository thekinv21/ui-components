import { useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/button'
import { AsyncMultiSelect } from '@/components/ui/select/async-select/multi/AsyncMultiSelect'
import { AsyncSingleSelect } from '@/components/ui/select/async-select/single/AsyncSingleSelect'

interface IForm {
	stringOption: string | null
	numberOption: number | null
	booleanOption: boolean | null
}

export function App() {
	const [isLoadingPosts, setIsLoadingPosts] = useState<boolean>(false)
	const [isLoadingUsers, setIsLoadingUsers] = useState<boolean>(false)

	const formMethod = useForm<IForm>({
		mode: 'onChange'
	})

	async function fetchUsers() {
		try {
			setIsLoadingUsers(true)

			const response = await fetch(
				`https://jsonplaceholder.typicode.com/users`,
				{
					method: 'GET'
				}
			)

			if (response.ok) {
				setIsLoadingUsers(false)

				const data = await response.json()

				const options = data.map((item: any) => ({
					label: item.name,
					value: item.id
				}))

				return options
			}
		} catch (error) {
			setIsLoadingUsers(false)

			console.error('Error fetching options', error)
			return []
		}
	}

	async function fetchPosts() {
		try {
			setIsLoadingPosts(true)

			const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)

			if (response.ok) {
				setIsLoadingPosts(false)

				const data = await response.json()

				const options = data.map((item: any) => ({
					label: item.title,
					value: item.id
				}))

				return options
			}
		} catch (error) {
			setIsLoadingPosts(false)

			console.error('Error fetching options', error)
			return []
		}
	}

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
					Custom UI Select and AsyncSelect with React Hook Form
				</h1>

				<div className='flex w-full flex-col gap-5'>
					<span>Multi Select</span>
					<AsyncMultiSelect
						name='stringOption'
						control={formMethod.control}
						required
						loadOptions={fetchUsers}
						isLoading={isLoadingUsers}
						isDisabled={isLoadingUsers}
					/>
				</div>

				<div className='flex w-full flex-col gap-5'>
					<span> Single Select</span>
					<AsyncSingleSelect
						name='numberOption'
						control={formMethod.control}
						required
						loadOptions={fetchPosts}
						isLoading={isLoadingPosts}
						isDisabled={isLoadingPosts}
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
