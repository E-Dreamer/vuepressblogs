export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/logo.png\",\"heroText\":\"前端记录\",\"tagline\":\"一点一滴都是进步\",\"actions\":[{\"text\":\"开始阅读 →\",\"link\":\"/accumulate\",\"type\":\"primary\"}],\"footer\":\"MIT Licensed | Copyright © 2022-present Evan You\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1640940059000,\"contributors\":[{\"name\":\"E-Dreamer\",\"email\":\"939902197@qq.con\",\"commits\":3}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
