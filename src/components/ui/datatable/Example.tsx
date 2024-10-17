import React, { useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	PaginationState,
	useReactTable
} from '@tanstack/react-table'
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
	Search
} from 'lucide-react'

interface ICustomDataTable<TData> {
	columns: ColumnDef<TData>[]
	httpGetRequest: (pagination: PaginationState) => Promise<any>
	tableLabel?: string
}

export function CustomDataTable<TData>({
	columns,
	httpGetRequest,
	...props
}: ICustomDataTable<TData>) {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 1
	})

	const query = useQuery({
		queryKey: ['data-pagination', pagination, searchTerm],
		queryFn: async () => await httpGetRequest(pagination)
	})

	const defaultData = React.useMemo(() => [], [])

	const table = useReactTable({
		data: query?.data?.data?.content ?? defaultData,
		columns,
		state: { pagination },
		pageCount: query?.data?.totalPages ?? -1,
		onPaginationChange: setPagination,
		getCoreRowModel: getCoreRowModel(),
		manualPagination: true,
		debugTable: true
	})

	return (
		<div className='panel'>
			<div className='mb-4 flex items-center justify-between px-1'>
				<h1 className='text-lg font-semibold uppercase text-gray-600'>
					{props.tableLabel}
				</h1>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search...'
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
						className='w-full max-w-xs rounded-md border border-gray-200 py-2 pl-10 pr-3 text-sm outline-none transition-all duration-200 ease-in-out hover:border-indigo-500 focus:border-indigo-500'
					/>
					<Search
						size={20}
						className='absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400'
					/>
				</div>
			</div>
			<div className='overflow-hidden rounded border border-gray-100'>
				<table className='min-w-full divide-y divide-gray-100'>
					<thead className='select-none bg-gray-50'>
						{table.getHeaderGroups().map(headerGroup => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map(header => (
									<th
										key={header.id}
										colSpan={header.colSpan}
										className='max-w-[300px] truncate p-4 text-left text-[14px] font-semibold text-gray-700'
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody className='divide-y divide-gray-100 bg-white'>
						{table.getRowModel().rows.map(row => (
							<tr key={row.id} className='hover:bg-gray-50'>
								{row.getVisibleCells().map(cell => (
									<td
										key={cell.id}
										className='max-w-[300px] truncate px-4 py-4 text-sm text-gray-700'
										title={`${flexRender(cell.column.columnDef.cell, cell.getContext())}`}
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className='mb-2 mt-8 flex items-center justify-between'>
				<div className='text-sm font-semibold uppercase text-gray-600 lg:pl-1'>
					Showing {table.getRowModel().rows.length} of{' '}
					{query.data?.data?.totalElements} rows
				</div>

				<div className='flex items-center gap-2 px-1'>
					<button
						className='rounded bg-gray-50 p-2 hover:bg-gray-100 disabled:opacity-50'
						onClick={() => table.setPageIndex(0)}
						disabled={!table.getCanPreviousPage()}
					>
						<ChevronsLeft size={16} />
					</button>
					<button
						className='rounded bg-gray-50 p-2 hover:bg-gray-100 disabled:opacity-50'
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						<ChevronLeft size={16} />
					</button>
					<span className='mx-2 text-sm font-semibold uppercase text-gray-600'>
						{table.getState().pagination.pageIndex + 1} of{' '}
						{query.data?.data?.totalPages}
					</span>
					<button
						className='rounded bg-gray-50 p-2 hover:bg-gray-100 disabled:opacity-50'
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						<ChevronRight size={16} />
					</button>
					<button
						className='rounded bg-gray-50 p-2 hover:bg-gray-100 disabled:opacity-50'
						onClick={() => table.setPageIndex(table.getPageCount() - 1)}
						disabled={!table.getCanNextPage()}
					>
						<ChevronsRight size={16} />
					</button>
					<select
						value={table.getState().pagination.pageSize}
						onChange={e => table.setPageSize(Number(e.target.value))}
						className='ml-2 rounded border border-gray-300 px-3 py-1.5 text-sm font-semibold uppercase text-gray-600 outline-none'
						style={{
							WebkitAppearance: 'none'
						}}
					>
						{[1, 2, 5, 10, 20, 30, 40, 50].map(pageSize => (
							<option key={pageSize} value={pageSize}>
								Show {pageSize}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	)
}
