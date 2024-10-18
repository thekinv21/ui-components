import React from 'react'

import { ColumnDef } from '@tanstack/react-table'
import { FilePenLineIcon, PlayCircleIcon, Trash2Icon } from 'lucide-react'

import { INews } from './dataTable.d'

export function useDataTableColumns() {
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
			},

			{
				accessorKey: 'id',
				header: () => <span>İşlemler</span>,
				cell: info => {
					const id = info.getValue() as string
					return (
						<div className='flex items-start gap-2'>
							<button onClick={() => alert(`Toggle Id = ${id}`)}>
								<PlayCircleIcon color='green' size={20} />
							</button>
							<button onClick={() => alert(`Edit Id = ${id}`)}>
								<FilePenLineIcon color='blue' size={20} />
							</button>
							<button onClick={() => alert(`Delete Id = ${id}`)}>
								<Trash2Icon color='red' size={20} />
							</button>
						</div>
					)
				},
				footer: props => props.column.id
			}
		],
		[]
	)

	return {
		columns
	}
}
