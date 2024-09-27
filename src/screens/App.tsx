import { BreadCrumbExample1 } from '@/components/ui/breadcrumb/example-1/BreadCrumbExample1'
import { BreadCrumbExample3 } from '@/components/ui/breadcrumb/example-3/BreadCrumbExample3'

export function App() {
	return (
		<section className='container mx-auto w-full py-20'>
			<div className='space-y-10'>
				<h1 className='text-3xl font-semibold'>
					Custom UI BreadCrumbs Examples
				</h1>

				<div className='panel flex flex-col gap-5'>
					<h1 className='text-xl'>Simple Default</h1>
					<BreadCrumbExample1
						array={[
							{
								key: 'components',
								url: '#'
							},
							{
								key: 'UI Kit',
								url: '#'
							}
						]}
					/>
				</div>

				<div className='panel flex flex-col gap-5'>
					<h1 className='text-xl'>Dotted Seperators</h1>
					<BreadCrumbExample3
						array={[
							{
								key: 'components',
								url: '#'
							},
							{
								key: 'UI Kit',
								url: '#'
							}
						]}
					/>
				</div>
			</div>
		</section>
	)
}
