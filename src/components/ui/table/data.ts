export interface ITableData {
	id: number
	name: string
	email: string
	date: string
	sale: number
	status: string
	register: string
	progress: string
	position: string
	office: string
}

export const tableData: ITableData[] = [
	{
		id: 1,
		name: 'John Doe',
		email: 'johndoe@yahoo.com',
		date: '10/08/2020',
		sale: 120,
		status: 'Complete',
		register: '5 min ago',
		progress: '40%',
		position: 'Developer',
		office: 'London'
	},
	{
		id: 2,
		name: 'Shaun Park',
		email: 'shaunpark@gmail.com',
		date: '11/08/2020',
		sale: 400,
		status: 'Pending',
		register: '11 min ago',
		progress: '23%',
		position: 'Designer',
		office: 'New York'
	},
	{
		id: 3,
		name: 'Alma Clarke',
		email: 'alma@gmail.com',
		date: '12/02/2020',
		sale: 310,
		status: 'In Progress',
		register: '1 hour ago',
		progress: '80%',
		position: 'Accountant',
		office: 'Amazon'
	},
	{
		id: 4,
		name: 'Vincent Carpenter',
		email: 'vincent@gmail.com',
		date: '13/08/2020',
		sale: 100,
		status: 'Canceled',
		register: '1 day ago',
		progress: '60%',
		position: 'Data Scientist',
		office: 'Canada'
	}
]
