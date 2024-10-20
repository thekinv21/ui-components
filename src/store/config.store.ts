import { create } from 'zustand'

type TypeConfigStore = {
	animation: string
	changeAnimation: (v: string) => void
}

const getInitialAnimation = (): string => {
	const stored = localStorage.getItem('CUSTOM')
	return stored
		? JSON.parse(stored).animation || 'animate__slideInUp'
		: 'animate__slideInUp'
}

export const useConfigStore = create<TypeConfigStore>(set => ({
	animation: getInitialAnimation(),
	changeAnimation: v => set({ animation: v })
}))
