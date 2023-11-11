const path = require('path');

module.exports = {
  title: 'Paymentic',
  tagline: 'Payment Gateway Event-Driven Documentation',
  organizationName: 'Paymentic',
  projectName: 'Payment Gateway',
  editUrl: 'https://github.com/boyney123/eventcatalog-demo/edit/master',
  trailingSlash: true,
  primaryCTA: {
    label: 'Explore Events',
    href: '/events'
  },
  secondaryCTA: {
    label: 'Getting Started',
    href:"https://www.eventcatalog.dev/"
  },
  logo: {
    alt: 'EventCatalog Logo',
    // found in the public dir
    src: 'logo.svg',
  },
  headerLinks: [
    { label: 'Events', href: '/events'},
    { label: 'Services', href: '/services' },
    { label: 'Domains', href: '/domains'},
    { label: 'Users', href: '/users'},
    { label: 'Visualiser', href: '/visualiser' },
    { label: '3D Node Graph', href: '/overview' },
  ],
  footerLinks: [
    { label: 'Events', href: '/events' },
    { label: 'Services', href: '/services' },
    { label: 'Visualiser', href: '/visualiser' },
    { label: '3D Node Graph', href: '/overview' },
    { label: 'GitHub', href: 'https://github.com/boyney123/eventcatalog-demo/edit/master' }
  ],
  users: [
    {
      id: 'claudioed',
      name: 'Claudio E. de Oliveira',
      avatarUrl: 'https://avatars.githubusercontent.com/u/4073304?v=4',
      role: 'Developer',
    },
  ],
  generators: [
    [
      '@eventcatalog/plugin-doc-generator-asyncapi',
      {
        // path to your AsyncAPI files
        pathToSpec: [path.join(__dirname, '/asyncapis/asyncapi-payment-service.yaml')],

        // version events if already in catalog (optional)
        versionEvents: true,
        domainName: 'Payments',
        domainSummary: 'Domain for everything to do with Payment Gateway at our business. Before adding any events or services to this domain make sure you contact the domain owners and verify it\'s the correct place',

      },
    ],
    [
      '@eventcatalog/plugin-doc-generator-asyncapi',
      {
        // path to your AsyncAPI files
        pathToSpec: [path.join(__dirname, '/asyncapis/asyncapi-payment-executor.yaml')],

        // version events if already in catalog (optional)
        versionEvents: true,
        domainName: 'Payments',
        domainSummary: 'Domain for everything to do with Payment Gateway at our business. Before adding any events or services to this domain make sure you contact the domain owners and verify it\'s the correct place',
      },
    ],
    [
      '@eventcatalog/plugin-doc-generator-asyncapi',
      {
        // path to your AsyncAPI files
        pathToSpec: [path.join(__dirname, '/asyncapis/asyncapi-wallet.yaml')],

        // version events if already in catalog (optional)
        versionEvents: true,
        domainName: 'Payments',
        domainSummary: 'Domain for everything to do with Payment Gateway at our business. Before adding any events or services to this domain make sure you contact the domain owners and verify it\'s the correct place',
      },
    ],
    [
      '@eventcatalog/plugin-doc-generator-asyncapi',
      {
        // path to your AsyncAPI files
        pathToSpec: [path.join(__dirname, '/asyncapis/asyncapi-ledger.yaml')],

        // version events if already in catalog (optional)
        versionEvents: true,
        domainName: 'Payments',
        domainSummary: 'Domain for everything to do with Payment Gateway at our business. Before adding any events or services to this domain make sure you contact the domain owners and verify it\'s the correct place',
      },
    ],
  ],
}
