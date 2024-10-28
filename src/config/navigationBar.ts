// Navigation Bar
// Copyright (c) 2024 Oxygenna - MIT License
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'The tailwind astro theme',
		text: 'ECOAT'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'Servicios', link: '/services' },
		{
			name: 'Recursos',
			link: '#',
			submenu: [
        { name: 'FAQ', link: '/faq' },
				{ name: 'Blog', link: '/blog' },
				{ name: 'Novedades', link: '/changelog' },
			]
		},
	],
	navActions: [{ name: 'Contacto', link: 'https://goo.gl/maps/NqRwCXWdAYuHEcUb9', style: 'primary', size: 'lg' }]
}
