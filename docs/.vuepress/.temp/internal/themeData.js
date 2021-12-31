export const themeData = {
  "logo": null,
  "darkMode": true,
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "阅读",
      "link": "/guide/index"
    }
  ],
  "sidebarDepth": 2,
  "sidebar": {
    "collapsable": false,
    "/guige/": [
      {
        "title": "基础",
        "collapsable": false,
        "children": [
          "/guide/index"
        ]
      }
    ]
  },
  "repo": "https://github.com/E-Dreamer/vuepressblogs",
  "locales": {
    "/": {
      "selectLanguageName": "简体中文",
      "selectLanguageText": "选择语言"
    },
    "/en/": {
      "selectLanguageName": "English",
      "selectLanguageText": "Languages"
    }
  },
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

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
