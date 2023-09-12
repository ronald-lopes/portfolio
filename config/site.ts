export const siteConfig = {
  name: 'Ronald Lopes | Portfolio',
  description: 'I am Ronald Lopes, Product designer and Front-end Developer.',
  keywords:
    'UI, UX, Product, Front-end, Developer, Designer, Ronald, Lopes, Portfolio',
  navItems: [
    {
      id: 1,
      label: 'Home',
      href: '#',
    },
    {
      id: 2,
      label: 'About',
      href: '#about',
    },
    {
      id: 3,
      label: 'Work',
      href: '#work',
    },
    {
      id: 4,
      label: 'Resume',
      href: '#resume',
    },
    {
      id: 5,
      label: 'Get in touch',
      href: '#get-in-touch',
    },
  ],
}

export type SiteConfig = typeof siteConfig
