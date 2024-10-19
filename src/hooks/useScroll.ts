import { useEffect, useState } from 'react'

export const useScroll = () => {
	const [scrollPosition, setScrollPosition] = useState<{
		x: number | undefined
		y: number | undefined
	}>({
		x: undefined,
		y: undefined
	})

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleScroll = () => {
				setScrollPosition({
					x: window.scrollX,
					y: window.scrollY
				})
			}

			window.addEventListener('scroll', handleScroll)
			handleScroll()

			return () => {
				window.removeEventListener('scroll', handleScroll)
			}
		}
	}, [])

	return scrollPosition
}
