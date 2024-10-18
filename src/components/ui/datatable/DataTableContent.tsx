import { UseQueryResult } from '@tanstack/react-query'
import { flexRender, Table } from '@tanstack/react-table'

import styles from './DataTable.module.scss'

interface IDataTableContent<TData> {
	customTable: Table<TData>
	customQuery: UseQueryResult<any, Error>
}

export function DataTableContent<TData>(props: IDataTableContent<TData>) {
	return (
		<div className={styles.custom_table_content}>
			<table className={styles.custom_table}>
				<thead>
					{props.customTable.getHeaderGroups().map(item => (
						<tr key={item.id}>
							{item.headers.map(header => (
								<th key={header.id} colSpan={header.colSpan}>
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

				{props.customQuery.isFetching && !props.customQuery.isFetched ? (
					<tbody className='background-blur-sm'>
						<tr>
							<td colSpan={props.customTable.getAllColumns().length}>
								<div className={styles.loader_container}>
									<div className={styles.loader} />
									<p>Loading data, please wait...</p>
								</div>
							</td>
						</tr>
					</tbody>
				) : (
					<tbody>
						{props.customTable.getRowModel().rows.map(row => (
							<tr key={row.id} className=''>
								{row.getVisibleCells().map(cell => (
									<td
										key={cell.id}
										title={`${flexRender(cell.column.columnDef.cell, cell.getContext())}`}
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))}
					</tbody>
				)}
			</table>
		</div>
	)
}
