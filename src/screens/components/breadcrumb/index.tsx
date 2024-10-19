import { BreadCrumbExample1 } from '@/components/ui/breadcrumb/example-1/BreadCrumbExample1'

import { DotBreadCrumb } from './DotBreadCrumb'
import { SimpleBreadCrumb } from './SimpleBreadCrumb'

export default function BreadCrumbPage() {
	return (
		<section className='container mx-auto py-5'>
			<BreadCrumbExample1
				array={[
					{
						url: '/components/breadcrumb',
						key: 'Breadcrumb'
					}
				]}
			/>

			<div className='grid grid-cols-1 gap-10 py-10 md:grid-cols-2'>
				<SimpleBreadCrumb />
				<DotBreadCrumb />
			</div>
		</section>
	)
}
