import { TableExample1 } from '@/components/ui/table/example-1/TableExample1'

export function HoveredLightTable() {
	return (
		<div className='panel space-y-3 text-sm'>
			<h1 className='py-3 text-sm font-normal uppercase text-gray-500'>
				Hovered Table
			</h1>
			<TableExample1 />
		</div>
	)
}
