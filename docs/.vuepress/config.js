/*
 * @Author: E-Dreamer
 * @Date: 2021-12-30 13:41:15
 * @LastEditTime: 2021-12-31 16:30:59
 * @LastEditors: E-Dreamer
 * @Description:
 */
// import {navbar,sidebar} from './configs'
const navbar = {
  zh: [
    { text: '首页', link: '/' },
    {
      text: '文章',
      children: [
        {
          text: 'vue3',
          // children: ['/article/vue3.md'],
          link:'/article/vue.html'
        },
      ],
    },
  ],
  en: [
    { text: 'home', link: '/' },
    {
      text: 'article',
      children: [
        {
          text: 'vue3',
          // children: ['/article/vue3.md'],
          link:'/en/article/vue.html'
        },
      ],
    },
  ]
}

const sidebar = {
  en:{
    '/article/': [
      {
        text: 'vue2 difference',
        // children: ['/article/vue3.md'],
        link:'/en/article/vue.html#区别'
      },
    ],
  },
  zh:{
    '/article/': [
      {
        text: '与vue2的区别',
        // children: ['/article/vue3.md'],
        link:'/article/vue.html#区别'
      },
    ],
  }
}
module.exports = {
  // open:true,
  //base:'/',
  //dest:'dist',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
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
    repo: 'https://github.com/E-Dreamer/vuepressblogs',
    locales: {
      '/': {
        navbar: navbar.zh,
        sidebar: sidebar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        navbar: navbar.en,
        sidebar: sidebar.en,
        editLinkText: 'Edit this page on GitHub',
      },
    },
    // 所有页面会使用相同的侧边栏
  }
}
