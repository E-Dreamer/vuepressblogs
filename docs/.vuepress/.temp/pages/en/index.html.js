export const data = JSON.parse("{\"key\":\"v-2d0a870d\",\"path\":\"/en/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/logo.png\",\"heroText\":\"The front-end record\",\"tagline\":\"Every little bit is progress\",\"actions\":[{\"text\":\"Start reading →\",\"link\":\"/en/accumulate\",\"type\":\"primary\"}],\"footer\":\"MIT Licensed | Copyright © 2022-present Evan You\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1640851969000,\"contributors\":[{\"name\":\"E-Dreamer\",\"email\":\"939902197@qq.con\",\"commits\":1}]},\"filePathRelative\":\"en/README.md\"}")

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
