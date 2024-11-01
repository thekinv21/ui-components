import { ChangeEvent, useEffect, useState } from 'react'

export interface ICustomSetting {
	animation: string
	sidebar: string
}

export const useCustomSetting = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const [values, setValues] = useState<ICustomSetting>({
		animation: '',
		sidebar: ''
	})

	useEffect(() => {
		const storedStyles = JSON.parse(localStorage.getItem('CUSTOM') || '{}')
		if (storedStyles && storedStyles.animation) {
			setValues(storedStyles)
		}
	}, [])

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target

		const existingStyles = JSON.parse(localStorage.getItem('CUSTOM') || '{}')

		localStorage.setItem(
			'CUSTOM',
			JSON.stringify({
				...existingStyles,
				[name]: value
			})
		)

		setValues({
			...existingStyles,
			[name]: value
		})
	}

	return {
		isOpen,
		setIsOpen,
		values,
		handleChange
	}
}
