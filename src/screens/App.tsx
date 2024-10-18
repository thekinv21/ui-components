import { PaginationState } from '@tanstack/react-table'
import { Fragment } from 'react/jsx-runtime'

import { Footer3 } from '@/components/layout/footer/footer-3/Footer3'
import { BreadCrumbExample3 } from '@/components/ui/breadcrumb/example-3/BreadCrumbExample3'
import { DataTable, useDataTableColumns } from '@/components/ui/dataTable'

import { QueryKeyEnum } from '@/constant/queryKey.constant'
import { baseService } from '@/service/base.service'

export function App() {
	const { columns } = useDataTableColumns()

	const getNews = async (p: PaginationState) => {
		const response = await baseService.getAll({
			page: p.pageIndex,
			pageSize: p.pageSize
		})

		return response?.data
	}

	return (
		<Fragment>
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
						<DataTable
							tableHeading='Haberler Listesi'
							customQueryKey={QueryKeyEnum.GET_ALL_NEWS}
							customQueryFn={getNews}
							columns={columns}
						/>
					</div>
				</div>
			</section>

			<Footer3 />
		</Fragment>
	)
}
