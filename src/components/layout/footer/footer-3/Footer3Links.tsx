import styles from './Footer3.module.scss'

export function Footer3Links() {
	const footerLinks = [
		{
			title: 'Resources',
			links: [
				{ name: 'NextJS', href: '#' },
				{ name: 'Tailwind CSS', href: '#' },
				{ name: 'SCSS', href: '#' }
			]
		},
		{
			title: 'Sitemap',
			links: [
				{ name: 'Contact', href: '#' },
				{ name: 'About', href: '#' },
				{ name: 'News', href: '#' }
			]
		},
		{
			title: 'Legal',
			links: [
				{ name: 'Privacy Policy', href: '#' },
				{ name: 'Terms & Conditions', href: '#' }
			]
		}
	]

	return (
		<div className={styles.links}>
			{footerLinks.map((section, idx: number) => (
				<div key={idx}>
					<h2>{section.title}</h2>
					<ul>
						{section.links.map((link, idx: number) => (
							<li key={idx}>
								<a href={link.href}>{link.name}</a>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}
