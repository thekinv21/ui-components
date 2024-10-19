import { BreadCrumbExample1 } from '@/components/ui/breadcrumb/example-1/BreadCrumbExample1'

import { HoveredLightTable } from './HoveredLightTable'
import { SimpleTable } from './SimpleTable'
import { StripedTable } from './StripedTable'

export default function TablePage() {
	return (
		<section className='container mx-auto py-5'>
			<BreadCrumbExample1
				array={[
					{
						url: '/components/table',
						key: 'Table'
					}
				]}
			/>

			<div className='grid grid-cols-1 gap-10 py-10 md:grid-cols-2'>
				<SimpleTable />
				<HoveredLightTable />
				<StripedTable />
			</div>
		</section>
	)
}
