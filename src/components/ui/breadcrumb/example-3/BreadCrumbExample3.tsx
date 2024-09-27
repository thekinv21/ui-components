import { HomeIcon } from 'lucide-react'

interface IBreadCrumbExample3 {
	array: {
		url: string
		key: string
	}[]
}

export function BreadCrumbExample3({ array }: IBreadCrumbExample3) {
	return (
		<ol className='flex text-gray-500'>
			<li>
				<a href='/' className='hover:text-gray-500/70'>
					<HomeIcon strokeWidth={1} size={20} color='#888ea8' />
				</a>
			</li>

			{array.map(({ url, key }, idx: number) => (
				<li
					key={idx}
					className='capitalize before:relative before:-top-0.5 before:mx-4 before:inline-block before:h-1 before:w-1 before:rounded-full before:bg-primary'
				>
					<a href={url} className='hover:text-blue-500'>
						{key}
					</a>
				</li>
			))}
		</ol>
	)
}
