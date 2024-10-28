// Footer Navigation
// Copyright (c) 2024 Oxygenna - MIT License
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
  src: string
  alt: string
  text: string
}

export interface FooterAbout {
  title: string
  aboutText: string
  logo: Logo
}

export interface SubCategory {
  subCategory: string
  subCategoryLink: string
}

export interface FooterColumn {
  category: string
  subCategories: SubCategory[]
}

export interface SubFooter {
  copywriteText: string
}

export interface FooterData {
  footerAbout: FooterAbout
  footerColumns: FooterColumn[]
  subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
  footerAbout: {
    title: 'ECOAT',
    aboutText:
      'En ECOAT, te ayudamos a simplificar la contabilidad, fiscalidad, gestión laboral y mercantil de tu negocio. Estamos aquí para apoyarte en cada paso, ofreciendo soluciones eficientes y un soporte experto.',
    logo: {
      src: '/logo.svg',
      alt: 'The tailwind astro theme',
      text: 'ECOAT'
    }
  },
  footerColumns: [
    {
      category: 'Soluciones',
      subCategories: [
        {
          subCategory: 'Servicios',
          subCategoryLink: '/services'
        },
        {
          subCategory: 'FAQ',
          subCategoryLink: '/faq'
        },
        {
          subCategory: 'Novedades',
          subCategoryLink: '/changelog'
        },
        {
          subCategory: 'Política de Privacidad',
          subCategoryLink: '/privacy-policy'
        },
        {
          subCategory: 'Política de Cookies',
          subCategoryLink: '/cookies-policy'
        },
        {
          subCategory: 'Aviso legal',
          subCategoryLink: '/terms'
        }
      ]
    },
    {
      category: 'Contacto',
      subCategories: [
        {
          subCategory: '966 420 717',
          subCategoryLink: 'tel:+34966420717'
        },
        {
          subCategory: 'Carrer de Xàbia, 16, Bajo, 03700 Dénia, Alicante',
          subCategoryLink: 'https://goo.gl/maps/NqRwCXWdAYuHEcUb9'
        },
      ]
    },
    {
      category: 'Sobre nosotros',
      subCategories: [
        {
          subCategory: 'Inicio',
          subCategoryLink: ''
        },
        {
          subCategory: 'Blog',
          subCategoryLink: '/blog'
        },
      ]
    },

  ],
  subFooter: {
    copywriteText: '© ECOAT 2024.'
  }
}
