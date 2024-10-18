import { Search } from 'lucide-react'

import styles from './DataTable.module.scss'

interface IDataTableHeading {
	searchTerm: string
	setSearchTerm: (v: string) => void
	heading: string
}

export function DataTableHeading(props: IDataTableHeading) {
	return (
		<div className={styles.custom_table_heading}>
			<h1 className={styles.heading}>{props.heading}</h1>
			<div className={styles.input_container}>
				<input
					type='text'
					placeholder='Search...'
					value={props.searchTerm}
					onChange={e => props.setSearchTerm(e.target.value)}
					className={styles.input}
				/>
				<Search size={20} className={styles.search_icon} />
			</div>
		</div>
	)
}
