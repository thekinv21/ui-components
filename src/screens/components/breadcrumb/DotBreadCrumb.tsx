import { BreadCrumbExample3 } from '@/components/ui/breadcrumb/example-3/BreadCrumbExample3'

export function DotBreadCrumb() {
	return (
		<div className='panel space-y-3 text-sm'>
			<h1 className='py-3 text-sm font-normal uppercase text-gray-500'>
				Dot Breadcrumb
			</h1>
			<BreadCrumbExample3
				array={[
					{
						url: '#',
						key: 'Pages'
					},
					{
						url: '#',
						key: 'Products'
					},
					{
						url: '#',
						key: 'Simple Product'
					}
				]}
			/>
		</div>
	)
}
