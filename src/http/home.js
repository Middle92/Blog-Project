import http from './index'
// 获取 导航列表
export const get_navigation_list = () => {
  return new Promise((resolve) => {
    http({
      url: '/get_navigation_list',
      method: 'get'
    }).then(res => {
      resolve(res.data.data)
    })
  })
}
// 获取文章列表
export const get_blog_article = (selectKey = 0) => {
  return new Promise((resolve) => {
    http({
      url: '/get_blog_article',
      method: 'get', 
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        navigation_id: selectKey
      }
    }).then(res => {
      resolve(res.data.data)
    })
  })
}
