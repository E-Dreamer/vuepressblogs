export const themeData = JSON.parse("{\"logo\":null,\"darkMode\":true,\"repo\":\"https://github.com/E-Dreamer/vuepressblogs\",\"locales\":{\"/\":{\"navbar\":[{\"text\":\"积累\",\"link\":\"/accumulate/\"},{\"text\":\"文章\",\"children\":[\"/article/vue.md\"]}],\"sidebar\":{\"/article/\":[{\"text\":\"文章\",\"children\":[\"/article/vue.md\"]}],\"/accumulate/\":[{\"text\":\"积累\",\"children\":[\"/accumulate/README.md\"]}]},\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"选择语言\",\"editLinkText\":\"在 GitHub 上编辑此页\",\"lastUpdatedText\":\"上次更新\",\"contributorsText\":\"贡献者\",\"tip\":\"提示\",\"warning\":\"注意\",\"danger\":\"警告\",\"notFound\":[\"这里什么都没有\",\"我们怎么到这来了？\",\"这是一个 404 页面\",\"看起来我们进入了错误的链接\"],\"backToHome\":\"返回首页\",\"openInNewWindow\":\"在新窗口打开\",\"toggleDarkMode\":\"切换夜间模式\",\"toggleSidebar\":\"切换侧边栏\"},\"/en/\":{\"selectLanguageName\":\"English\",\"selectLanguageText\":\"Languages\",\"navbar\":[{\"text\":\"accumulate\",\"link\":\"/en/accumulate/\"},{\"text\":\"article\",\"children\":[\"/en/article/vue.md\"]}],\"sidebar\":{\"/article/\":[{\"text\":\"article\",\"children\":[\"/en/article/vue.md\"]}],\"/accumulate/\":[{\"text\":\"积累\",\"children\":[\"/en/accumulate/README.md\"]}]},\"editLinkText\":\"Edit this page on GitHub\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
