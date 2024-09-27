import { Trash2Icon } from 'lucide-react'

import { ITableData, tableData } from '../data'

import styles from './TableExample.module.scss'

export function TableExample() {
	return (
		<div className={styles.table_responsive}>
			<table>
				<thead>
					<tr className='bg-transparent'>
						<th>#</th>
						<th>Name</th>
						<th>Email</th>
						<th>Created At</th>
						<th className='text-center'></th>
					</tr>
				</thead>
				<tbody>
					{tableData.map((data: ITableData) => {
						return (
							<tr key={data.id}>
								<td>{data.id}</td>
								<td>
									<div className='whitespace-nowrap'>{data.name}</div>
								</td>
								<td>{data.email}</td>
								<td>{data.date}</td>
								<td className='text-center'>
									<button type='button'>
										<Trash2Icon strokeWidth={1} color='red' size={20} />
									</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
