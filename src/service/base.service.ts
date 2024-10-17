import axios from 'axios'

import { IParams } from '@/types/helper.types'

class BaseService {
	private BASE_URL = 'https://jsonplaceholder.typicode.com'

	async getUsers() {
		const response = axios.get(this.BASE_URL + '/users')
		return response
	}

	async getPost() {
		const response = axios.get(this.BASE_URL + '/posts')
		return response
	}

	async deletePost(id: number) {
		const response = axios.delete(this.BASE_URL + `/posts/${id}`)
		return response
	}

	async getAll(params: IParams) {
		const response = axios.get(`https://k12.com.tr/vakifk12-backend/api/news`, {
			params: {
				page: params.page,
				size: params.pageSize,
				searchTerm: params.searchTerm
			}
		})
		return response
	}
}

export const baseService = new BaseService()
