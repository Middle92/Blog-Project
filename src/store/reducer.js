import { SET_NAVIGATION_LIST, SET_MENU_SELECTED_KEYS, SET_MENU_OPEN_KEYS, SET_ARTICLE_LIST } from "./storeTypes"
const defaultData = {
  version: "1.0.0",
  home: {
    defaultSelectedKeys: ['2'], // 首页导航左侧导航 选中的值
    defaultOpenKeys: ['1'], // 首页导航左侧导航 展开的值
    navigation_list: [], // 首页导航左侧导航 数据
    article_list: [], // 文章列表
  }
}

export default (state = defaultData, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  // 设置 首页导航左侧导航 数据
  if(action.type === SET_NAVIGATION_LIST) {
    newState.home.navigation_list = action.value
    return newState
  }
  // 设置 首页导航左侧导航 选中的值
  if(action.type === SET_MENU_SELECTED_KEYS) {
    newState.home.defaultSelectedKeys = action.value
    return newState
  }
  // 设置 首页导航左侧导航 展开的值
  if(action.type === SET_MENU_OPEN_KEYS) {
    newState.home.defaultOpenKeys = action.value
    return newState
  }
  // 设置 文章列表
  if(action.type === SET_ARTICLE_LIST) {
    newState.home.article_list = action.value
    return newState
  }
  return state
}