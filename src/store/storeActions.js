import { SET_NAVIGATION_LIST, SET_MENU_SELECTED_KEYS, SET_MENU_OPEN_KEYS, SET_ARTICLE_LIST } from "./storeTypes"

export const set_navigation_list = (value) => {
  return {
    type: SET_NAVIGATION_LIST,
    value
  }
}
export const set_menu_selected_keys = (value) => {
  return {
    type: SET_MENU_SELECTED_KEYS,
    value
  }
}
export const set_menu_open_keys = (value) => {
  return {
    type: SET_MENU_OPEN_KEYS,
    value
  }
}
export const set_article_list = (value) => {
  return {
    type: SET_ARTICLE_LIST,
    value
  }
}