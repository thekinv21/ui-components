import { BreadCrumbExample1 } from '@/components/ui/breadcrumb/example-1/BreadCrumbExample1'

export default function SelectPage() {
	return (
		<section className='container mx-auto py-5'>
			<BreadCrumbExample1
				array={[
					{
						url: '/components/select',
						key: 'Select'
					}
				]}
			/>

			<div className='grid grid-cols-1 gap-10 py-10'>
				<h1>Select Components</h1>
			</div>
		</section>
	)
}
