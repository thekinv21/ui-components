import { BreadCrumbExample1 } from '@/components/ui/breadcrumb/example-1/BreadCrumbExample1'

export function SimpleBreadCrumb() {
	return (
		<div className='panel space-y-3 text-sm'>
			<h1 className='py-3 text-sm font-normal uppercase text-gray-500'>
				Simple Breadcrumb
			</h1>
			<BreadCrumbExample1
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
