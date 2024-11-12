// Config
// Copyright (c) 2024 Oxygenna - MIT License
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'ECOAT: Asesoramiento a empresas y autonomos',
	siteDescription:
		'ECOAT es una asesoría situada en Denia especializada en áreas: contable, fiscal, laboral y mercantil.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.ico',
		alt: 'ECOAT. logo',
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
