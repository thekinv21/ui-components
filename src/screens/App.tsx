import { TableExample } from '@/components/ui/table/example-0/TableExample'
import { TableExample1 } from '@/components/ui/table/example-1/TableExample1'
import { TableExample2 } from '@/components/ui/table/example-2/TableExample2'

export function App() {
	return (
		<section className='container mx-auto w-full py-20'>
			<div className='space-y-10'>
				<h1 className='text-3xl font-semibold'>Custom UI Table Examples</h1>

				<div className='panel flex flex-col gap-5'>
					<h1 className='text-xl'>Simple Table</h1>
					<TableExample />
				</div>

				<div className='panel flex flex-col gap-5'>
					<h1 className='text-xl'>Table Hovered Light</h1>
					<TableExample1 />
				</div>

				<div className='panel flex flex-col gap-5'>
					<h1 className='text-xl'>Table Stripped</h1>
					<TableExample2 />
				</div>
			</div>
		</section>
	)
}
