import { useEffect, useState } from 'react'

import { useConfigStore } from '@/store/config.store'

export const useMainLayout = () => {
	const [isLoader, setIsLoader] = useState<boolean>(true)
	const [isTopButton, setIsTopButton] = useState<boolean>(false)

	const configStore = useConfigStore()

	const content = document.getElementById('screen_content')

	const navigateToTop = () => {
		if (content && content.scrollTop > 50) {
			content.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			if (content && content.scrollTop > 0) {
				setIsTopButton(true)
			} else {
				setIsTopButton(false)
			}
		}

		content?.addEventListener('scroll', handleScroll)

		return () => {
			content?.removeEventListener('scroll', handleScroll)
		}
	}, [content?.scrollTop])

	useEffect(() => {
		const loader = document.getElementById('screen_loader')
		if (loader) {
			loader.classList.add('animate__fadeOut')
			setTimeout(() => {
				setIsLoader(false)
			}, 1000)
		}
	}, [])

	return {
		isLoader,
		isTopButton,
		setIsLoader,
		navigateToTop,
		configStore
	}
}
