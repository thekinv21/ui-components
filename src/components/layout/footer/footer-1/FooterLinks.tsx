import styles from './Footer.module.scss'

export function FooterLinks() {
	const footerLinks = [
		{
			section: 'Company',
			links: [
				{ name: 'About', href: '#' },
				{ name: 'Meet the Team', href: '#' },
				{ name: 'History', href: '#' },
				{ name: 'Careers', href: '#' },
			],
		},
		{
			section: 'Services',
			links: [
				{ name: '1on1 Coaching', href: '#' },
				{ name: 'Company Review', href: '#' },
				{ name: 'Accounts Review', href: '#' },
				{ name: 'HR Consulting', href: '#' },
				{ name: 'SEO Optimisation', href: '#' },
			],
		},
		{
			section: 'Helpful Links',
			links: [
				{ name: 'Contact', href: '#' },
				{ name: 'FAQs', href: '#' },
				{ name: 'Live Chat', href: '#' },
			],
		},
		{
			section: 'Legal',
			links: [
				{ name: 'Privacy Policy', href: '#' },
				{ name: 'Terms & Conditions', href: '#' },
				{ name: 'Returns Policy', href: '#' },
				{ name: 'Accessibility', href: '#' },
			],
		},
	]

	return (
		<div className={styles.footer_links_grid}>
			{footerLinks.map((section, id: number) => (
				<div key={id}>
					<p>{section.section}</p>
					<nav>
						{section.links.map((link, id: number) => (
							<a key={id} href={link.href}>
								{link.name}
							</a>
						))}
					</nav>
				</div>
			))}
		</div>
	)
}
