import { Fragment } from 'react/jsx-runtime'

interface IBlankLayout {
	children: React.ReactNode
}

export function BlankLayout({ children }: IBlankLayout) {
	return <Fragment>{children}</Fragment>
}
