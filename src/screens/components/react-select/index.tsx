import { BreadCrumbExample1 } from '@/components/ui/breadcrumb/example-1/BreadCrumbExample1'

import { ReactSelectFormExample } from './ReactSelectFormExample'
import { ReactSelects } from './ReactSelects'

export default function ReactSelectPage() {
	return (
		<section className='container mx-auto py-5'>
			<BreadCrumbExample1
				array={[
					{
						url: '/components/react-select',
						key: 'React Select'
					}
				]}
			/>
			<div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
				<ReactSelects />
				<ReactSelectFormExample />
			</div>
		</section>
	)
}
