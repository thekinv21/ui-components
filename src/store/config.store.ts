import { create } from 'zustand'

type TypeConfigStore = {
	animation: string
	changeAnimation: (v: string) => void

	sidebar: string
	changeSidebar: (v: string) => void
}

type TypeCustomize = {
	animation: string
	sidebar: string
}

const initialValues = (): TypeCustomize => {
	const stored = localStorage.getItem('CUSTOM')
	return JSON.parse(stored as unknown as string)
}

export const useConfigStore = create<TypeConfigStore>(set => ({
	animation: initialValues()?.animation,
	changeAnimation: v => set({ animation: v }),

	sidebar: initialValues()?.sidebar,
	changeSidebar: v => set({ sidebar: v })
}))
