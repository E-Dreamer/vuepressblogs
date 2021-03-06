import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-0f73b5f6","/article/vue.html",{"title":"vue3"},["/article/vue","/article/vue.md"]],
  ["v-2d0a870d","/en/",{"title":""},["/en/index.html","/en/README.md"]],
  ["v-4fc31119","/en/article/vue.html",{"title":"vue3"},["/en/article/vue","/en/article/vue.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
