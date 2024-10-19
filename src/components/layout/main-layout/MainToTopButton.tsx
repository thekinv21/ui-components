import { MoveUpIcon } from 'lucide-react'

import { Button } from '@/components/ui/button/button'

interface IMainToTopButton {
	navigateToTop: () => void
}

export function MainToTopButton(props: IMainToTopButton) {
	return (
		<div className='fixed bottom-6 right-6 z-50'>
			<Button
				type='button'
				variant='outline'
				size='icon'
				className='rounded-full p-2'
				onClick={props.navigateToTop}
			>
				<MoveUpIcon size={18} strokeWidth={1} />
			</Button>
		</div>
	)
}
