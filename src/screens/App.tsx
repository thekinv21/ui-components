import React from 'react'

import { ColumnDef, PaginationState } from '@tanstack/react-table'

import { BreadCrumbExample3 } from '@/components/ui/breadcrumb/example-3/BreadCrumbExample3'
import { INews } from '@/components/ui/datatable/datatable'
import { CustomDataTable } from '@/components/ui/datatable/Example'

import { baseService } from '@/service/base.service'

export function App() {
	const columns = React.useMemo<ColumnDef<INews>[]>(
		() => [
			{
				accessorKey: 'title',
				header: () => <span>Başlık</span>,
				cell: info => info.getValue(),
				footer: props => props.column.id
			},
			{
				accessorKey: 'description',
				header: () => <span>Açıklama</span>,
				cell: info => info.getValue(),
				footer: props => props.column.id
			},
			{
				accessorKey: 'date',
				header: () => <span>Tarih</span>,
				cell: info => info.getValue()
			},
			{
				accessorKey: 'isFeatured',
				header: () => <span>Öne Çıkan Mı?</span>,
				cell: info => (info.getValue() ? 'Evet' : 'Hayır'),
				footer: props => props.column.id
			}
		],
		[]
	)

	const getNews = async (pagination: PaginationState) => {
		const response = await baseService.getAll({
			page: pagination.pageIndex,
			pageSize: pagination.pageSize
		})

		return response
	}

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
							key: 'UI DataTable',
							url: '#'
						}
					]}
				/>

				<div className='flex flex-col gap-5'>
					<CustomDataTable
						columns={columns}
						httpGetRequest={getNews}
						tableLabel='Haberler Listesi'
					/>
				</div>
			</div>
		</section>
	)
}
