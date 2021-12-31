/*
 * @Author: E-Dreamer
 * @Date: 2021-12-30 13:41:15
 * @LastEditTime: 2021-12-31 13:19:42
 * @LastEditors: E-Dreamer
 * @Description:
 */
const slider = {
  guide: [
    {
      title: '基础',
      collapsable: false,
      children: ['/guide/index'],
    },
  ],
}
module.exports = {
  // open:true,
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '前端积累',
      description: '记录一些知识点',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Accumulate',
      description: 'Write down some knowledge',
    },
  },
  // 搜索框在不同 locales 下的文字。
  plugins: [
    [
      '@vuepress/docsearch',
      {
        apiKey: '<API_KEY>',
        indexName: '<INDEX_NAME>',
        locales: {
          '/': {
            placeholder: '搜索文档',
          },
          '/en/': {
            placeholder: 'Search Documentation',
          },
        },
      },
    ],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索',
          },
          '/en/': {
            placeholder: 'Search',
          },
        },
      },
    ],
  ],
  // 配置默认主题
  themeConfig: {
    logo: null,
    darkMode: true, //是否启用切换夜间模式的功能。
    navbar: [
      { text: '首页', link: '/' },
      { text: '阅读', link: '/guide/index.md' },
    ],
    sidebarDepth: 2,
    sidebar: {
      collapsable: false,
      '/guige/': slider.guide,
    },
    repo: 'https://github.com/E-Dreamer/vuepressblogs',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
      },
    },
    // 所有页面会使用相同的侧边栏
  },
}
