import { UseQueryResult } from '@tanstack/react-query'
import { Table } from '@tanstack/react-table'
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight
} from 'lucide-react'

import styles from './DataTable.module.scss'

interface IDataTableFooter<TData> {
	customTable: Table<TData>
	customQuery: UseQueryResult<any, Error>
}

export function DataTableFooter<TData>(props: IDataTableFooter<TData>) {
	const PAGE_SIZES: number[] = [1, 2, 5, 10, 20, 30, 40, 50]

	return (
		<div className={styles.custom_table_footer}>
			<div className={styles.show_per_item}>
				Showing {props.customTable.getRowModel().rows.length} of{' '}
				{props.customQuery?.data?.totalElements} rows
			</div>

			<div className={styles.navigation_container}>
				<select
					value={props.customTable.getState().pagination.pageSize}
					onChange={e => props.customTable.setPageSize(Number(e.target.value))}
					className={styles.show_per_page}
					style={{
						WebkitAppearance: 'none'
					}}
				>
					{PAGE_SIZES.map((i: number) => (
						<option key={i} value={i}>
							{i}
						</option>
					))}
				</select>

				<div className={styles.navigation}>
					<button
						onClick={() => props.customTable.setPageIndex(0)}
						disabled={!props.customTable.getCanPreviousPage()}
					>
						<ChevronsLeft size={18} />
					</button>
					<button
						onClick={() => props.customTable.previousPage()}
						disabled={!props.customTable.getCanPreviousPage()}
					>
						<ChevronLeft size={18} />
					</button>
					<span>
						{props.customTable.getState().pagination.pageIndex + 1} of{' '}
						{props.customQuery?.data?.totalPages}
					</span>
					<button
						onClick={() => props.customTable.nextPage()}
						disabled={!props.customTable.getCanNextPage()}
					>
						<ChevronRight size={18} />
					</button>
					<button
						onClick={() =>
							props.customTable.setPageIndex(
								props.customTable.getPageCount() - 1
							)
						}
						disabled={!props.customTable.getCanNextPage()}
					>
						<ChevronsRight size={18} />
					</button>
				</div>
			</div>
		</div>
	)
}
