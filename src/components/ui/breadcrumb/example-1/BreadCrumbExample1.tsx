import { LayoutDashboardIcon } from 'lucide-react'

interface IBreadCrumbExample1 {
	array: {
		url: string
		key: string
	}[]
}

export function BreadCrumbExample1({ array }: IBreadCrumbExample1) {
	return (
		<ol className='flex select-none items-center text-sm font-light text-blue-600'>
			<li>
				<a href='/' className='text-blue-600'>
					<LayoutDashboardIcon strokeWidth={1} size={18} />
				</a>
			</li>

			{array.map(({ url, key }, idx: number) => (
				<li
					key={idx}
					className="font-extralight before:px-2.5 before:content-['/'] hover:text-blue-500"
				>
					<a href={url} type='button'>
						{key}
					</a>
				</li>
			))}
		</ol>
	)
}
