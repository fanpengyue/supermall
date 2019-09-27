import {request} from './request'

export function getHomeMultidata(){
  return request({
    url: './home/multidata'
  })
}

//请求首页的数据
// 参数：标签类型和页数
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
