import { HomeIcon } from 'lucide-react'

interface IBreadCrumbExample1 {
	array: {
		url: string
		key: string
	}[]
}

export function BreadCrumbExample1({ array }: IBreadCrumbExample1) {
	return (
		<ol className='flex select-none text-gray-500'>
			<li>
				<a href='/' className='hover:text-gray-500/70'>
					<HomeIcon strokeWidth={1} size={20} color='#888ea8' />
				</a>
			</li>

			{array.map(({ url, key }, idx: number) => (
				<li
					key={idx}
					className="capitalize before:px-1.5 before:content-['/'] hover:text-blue-600"
				>
					<a href={url} type='button'>
						{key}
					</a>
				</li>
			))}
		</ol>
	)
}
