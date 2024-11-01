export interface INews {
	id: number
	imageUrl: string
	date: string
	title: string
	description: string
	isFeatured: boolean
	translations: ITranslation[]
	nextId: number | null
	prevId: number | null
}

export interface ITranslation {
	createdDateTime: string
	updatedDateTime: string
	createdBy: string | null
	updatedBy: string | null
	id: number
	columnName: string
	language: string
	translatableTableName: string
	translatableValueId: number
	value: string
}

export interface IPaginatedResponse<T> {
	status: string
	code: number
	message: string
	isPageable: boolean
	time: string
	page: number
	pageSize: number
	totalElements: number
	totalPages: number
	isLast: boolean
	isFirst: boolean
	isEmpty: boolean
	content: T[]
}
