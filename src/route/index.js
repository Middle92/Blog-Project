import HomePage from "../pages/HomePage"
import HomeIndexPage from "../pages/HomeIndexPage"
import HomePlusPage from "../pages/HomePlusPage"
import HomeListPage from "../pages/HomeListPage"

// App pages
export const AppRoute = [
  {
    key: "home",
    path: "/home",
    label: "首页",
    component: HomePage
  }
]
export const AppRedirect = {
  to: '/home'
}
// Home page
export const HomeRoute = [
  {
    key: "home-index",
    path: "/home",
    label: "首页主界面",
    exact: true,
    component: HomeIndexPage
  },
  {
    key: "home-plus",
    path: "/home/plus",
    label: "首页添加界面",
    component: HomePlusPage,
  },
  {
    key: "home-list",
    path: "/home/list/:index",
    label: "首页文章列",
    component: HomeListPage,
  }
]
export const HomeMenu = [
  {
    key: "other",
    to: "/other",
    label: "其他"
  },
  {
    key: "mobile",
    to: "/mobile",
    label: "手机端"
  }
]
export const HomeIcon = [
  {
    key: "home-plus",
    to: "/home/plus",
    icon: "plus"
  }
]