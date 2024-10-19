import * as React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import { Loader } from 'lucide-react'

import { cn } from '@/utils/shadcn'

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground shadow hover:bg-primary/90 transition-colors ease-in-out duration-200',

				outline:
					'border border-input bg-background shadow-sm hover:bg-accent transition-colors ease-in-out duration-200 hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 transition-colors ease-in-out duration-200',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary transition-colors ease-in-out duration-200 underline-offset-4 hover:underline',

				success:
					'bg-green-600 text-primary-foreground shadow hover:bg-green-600/90 transition-colors ease-in-out duration-200',

				danger:
					'bg-red-600 transition-colors ease-in-out duration-200 text-white shadow-sm hover:bg-red-500/90',
				info: 'bg-blue-400 text-white transition-colors ease-in-out duration-200 shadow-sm hover:bg-blue-500',
				warning:
					'bg-orange-400 text-white shadow-sm hover:bg-orange-500 transition-colors ease-in-out duration-200'
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 rounded-md px-3 text-xs',
				lg: 'h-10 rounded-md px-8',
				icon: 'h-9 w-9'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
	loading?: boolean
	leftSection?: JSX.Element
	rightSection?: JSX.Element
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,

			children,
			disabled,
			loading = false,
			leftSection,
			rightSection,
			...props
		},
		ref
	) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				disabled={loading || disabled}
				ref={ref}
				{...props}
			>
				{((leftSection && loading) ||
					(!leftSection && !rightSection && loading)) && (
					<Loader className='mr-2 h-4 w-4 animate-spin' />
				)}
				{!loading && leftSection && <div className='mr-2'>{leftSection}</div>}
				{children}
				{!loading && rightSection && <div className='ml-2'>{rightSection}</div>}
				{rightSection && loading && (
					<Loader className='ml-2 h-4 w-4 animate-spin' />
				)}
			</button>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
