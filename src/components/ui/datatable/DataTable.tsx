import React from 'react'

import { useQuery } from '@tanstack/react-query'
import {
	ColumnDef,
	getCoreRowModel,
	PaginationState,
	useReactTable
} from '@tanstack/react-table'

import styles from './DataTable.module.scss'
import { DataTableContent } from './DataTableContent'
import { DataTableFooter } from './DataTableFooter'
import { DataTableHeading } from './DataTableHeading'

interface IDataTable<TData> {
	columns: ColumnDef<TData>[]
	customQueryFn: (p: PaginationState) => Promise<any>
	customQueryKey: string
	tableHeading: string
}

export function DataTable<TData>({
	columns,
	customQueryFn,
	...props
}: IDataTable<TData>) {
	const [searchTerm, setSearchTerm] = React.useState<string>('')

	const [pagination, setPagination] = React.useState<PaginationState>({
		pageIndex: 0,
		pageSize: 1
	})

	const customQuery = useQuery({
		queryKey: [`${props.customQueryKey}`, pagination, searchTerm],
		queryFn: async () => await customQueryFn(pagination)
	})

	const defaultData = React.useMemo(() => [], [])

	const customTable = useReactTable({
		data: customQuery?.data?.content ?? defaultData,
		columns,
		state: { pagination },
		pageCount: customQuery?.data?.totalPages,
		onPaginationChange: setPagination,
		getCoreRowModel: getCoreRowModel(),
		manualPagination: true
	})

	return (
		<aside className={styles.panel}>
			<DataTableHeading
				heading={props.tableHeading}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>

			<DataTableContent customTable={customTable} customQuery={customQuery} />

			<DataTableFooter customQuery={customQuery} customTable={customTable} />
		</aside>
	)
}
