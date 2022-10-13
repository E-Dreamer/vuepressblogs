/*
 * @Author: E-Dreamer
 * @Date: 2021-12-30 13:41:15
 * @LastEditTime: 2022-10-13 14:31:25
 * @LastEditors: E-Dreamer
 * @Description:
 */


import docsearchPlugin from '@vuepress/plugin-docsearch'
import { defineUserConfig,defaultTheme } from 'vuepress'
import {backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'

import {navbar,sidebar} from './configs/index'

export default defineUserConfig({
  base: '/',
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
  plugins: [
    backToTopPlugin(),
    nprogressPlugin(),
    externalLinkIconPlugin({
      locales:{
        '/':{
          openInNewWindow: '在新窗口打开',
        },
        '/en/': {
          openInNewWindow:'open in new window'
        },
      }
    }),
    mediumZoomPlugin(),
    docsearchPlugin({
      appId: 'appId',
      apiKey: '10080',
      indexName: 'vuepress',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
        '/en/':{
          placeholder:'Search Documentation',
          translations:{
            button:{
              buttonText: 'Search Documentation',
              buttonAriaLabel: 'Search Documentation',
            }
          }
        }
      },
    }),
  ],
  theme: defaultTheme({
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
  }),
})
