module.exports = {
  title: 'VuePress Template',
  description: 'Stuff and things and other stuff',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/styles/overrides.css'}],
  ],
  ga: 'UA-xxxxxxx',
  themeConfig: {
    repo: 'thinktandem/template-vuepress',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit Link Text',
    nav: [
      { text: 'Home', link: '/home/' },
      { text: 'Test Directory', link: '/test-dir/' },
      { text: 'Tandem Website', link: 'https://thinktandem.io' },
    ],
    sidebar: {
      '/home/': [
        '',
      ],
      '/test-dir/': [
        {
          title: 'Stuff',
          collapsable: false,
          children: [
            'things',
          ],
        }
      ],
    }
  }
}
