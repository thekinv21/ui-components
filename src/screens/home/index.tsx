import { BreadCrumbExample3 } from '@/components/ui/breadcrumb/example-3/BreadCrumbExample3'

export default function HomePage() {
	return (
		<section className='container mx-auto w-full py-20'>
			<div className='space-y-10'>
				<BreadCrumbExample3
					array={[
						{
							key: 'components',
							url: '#'
						},
						{
							key: 'UI Home',
							url: '#'
						}
					]}
				/>

				<div className='flex flex-col gap-5'>
					<h1 className='text-center text-2xl font-light'>Coming Son</h1>
				</div>
			</div>
		</section>
	)
}
