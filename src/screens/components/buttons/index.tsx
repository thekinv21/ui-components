import { BreadCrumbExample1 } from '@/components/ui/breadcrumb/example-1/BreadCrumbExample1'

import { Buttons } from './Buttons'

export default function ButtonPage() {
	return (
		<section className='container mx-auto py-5'>
			<BreadCrumbExample1
				array={[
					{
						url: '/components/button',
						key: 'Button'
					}
				]}
			/>

			<Buttons />
		</section>
	)
}
