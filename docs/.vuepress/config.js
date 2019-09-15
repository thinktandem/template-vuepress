module.exports = {
  title: 'VuePress Template',
  description: 'Stuff and things and other stuff',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ['link', {rel: 'stylesheet', href: '/styles/overrides.css'}],
  ],
  plugins: {
    '@vuepress/google-analytics': {
      ga: 'UA-xxxxxxx',
    },
    'autometa': {
      site: {
        name: 'VuePress Template',
        twitter: 'changeme',
      },
      canonical_base: 'https://template-vuepress.lndo.site',
    },
    'canonical': {
      baseURL: 'https://template-vuepress.lndo.site',
    },
    'robots': {
      host: 'https://template-vuepress.lndo.site',
    },
    'sitemap': {
      hostname: 'https://template-vuepress.lndo.site',
      exclude: ['/404.html'],
    },
  },
  themeConfig: {
    repo: 'thinktandem/template-vuepress',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit Link Text',
    nav: [
      {text: 'Test Directory', link: '/test-dir/'},
      {text: 'Tandem Website', link: 'https://thinktandem.io'},
    ],
    sidebar: {
      '/test-dir/': [
        {
          title: 'Stuff',
          collapsable: false,
          children: [
            'things',
          ],
        },
      ],
    },
  },
};
