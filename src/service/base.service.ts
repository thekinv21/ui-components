import axios from 'axios'

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
}

export const baseService = new BaseService()