import styles from './Footer2.module.scss'
import { Footer2Social } from './Footer2Social'

export function FooterLinks2() {
	const footerLinks = [
		{
			title: 'company',
			links: [
				{ name: 'about us', href: '#' },
				{ name: 'our services', href: '#' },
				{ name: 'privacy policy', href: '#' },
				{ name: 'affiliate program', href: '#' }
			]
		},
		{
			title: 'get help',
			links: [
				{ name: 'FAQ', href: '#' },
				{ name: 'shipping', href: '#' },
				{ name: 'returns', href: '#' },
				{ name: 'order status', href: '#' },
				{ name: 'payment options', href: '#' }
			]
		},
		{
			title: 'online shop',
			links: [
				{ name: 'watch', href: '#' },
				{ name: 'bag', href: '#' },
				{ name: 'shoes', href: '#' },
				{ name: 'dress', href: '#' }
			]
		}
	]

	return (
		<div className={styles.footer_row}>
			{footerLinks.map(section => (
				<div key={section.title} className={styles.footerCol}>
					<h4>{section.title}</h4>
					<ul>
						{section.links.map(link => (
							<li key={link.name}>
								<a href={link.href}>{link.name}</a>
							</li>
						))}
					</ul>
				</div>
			))}

			<Footer2Social />
		</div>
	)
}
