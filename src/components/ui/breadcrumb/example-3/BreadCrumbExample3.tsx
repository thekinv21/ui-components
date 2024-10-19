import { LayoutDashboardIcon } from 'lucide-react'

interface IBreadCrumbExample3 {
	array: {
		url: string
		key: string
	}[]
}

export function BreadCrumbExample3({ array }: IBreadCrumbExample3) {
	return (
		<ol className='flex text-sm text-blue-600'>
			<li>
				<a href='/' className='hover:text-blue-600/90'>
					<LayoutDashboardIcon strokeWidth={1} size={18} />
				</a>
			</li>

			{array.map(({ url, key }, idx: number) => (
				<li
					key={idx}
					className='font-extralight capitalize before:relative before:-top-0.5 before:mx-4 before:inline-block before:h-1 before:w-1 before:rounded-full before:bg-blue-600'
				>
					<a href={url} className='hover:text-blue-600/90'>
						{key}
					</a>
				</li>
			))}
		</ol>
	)
}
