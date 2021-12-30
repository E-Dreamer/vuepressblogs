/*
 * @Author: E-Dreamer
 * @Date: 2021-12-30 13:41:15
 * @LastEditTime: 2021-12-30 15:50:53
 * @LastEditors: E-Dreamer
 * @Description:
 */
module.exports = {
  // 主题和它的配置
  theme: '@vuepress/theme-default',
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
  themeConfig: {
    logo: null,
    darkMode: true, //是否启用切换夜间模式的功能。
    // nav: [
    //   { text: '首页', link: '/' },
    //   {
    //     text: 'E-Dreamer的博客',
    //     items: [
    //       { text: 'Github', link: 'https://github.com/E-Dreamer/blogs.git' },
    //     ],
    //   },
    // ],
    repo: 'https://github.com/E-Dreamer/blogs.git',
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
