import {request} from './request'

export function getRecommend(skip) {
  return request({
    url: '/image/v3/homepage/vertical',
    data: {
      limit: 30,
      order: 'hot',
      skip
    }
  })
}

export function getCategoryItems() {
  return request({
    url: '/image/v1/vertical/category' 
  })
}

export function getAlbumInfo(skip) {
  return request({
    url: '/image/v1/wallpaper/album',
    data: {
      limit: 30,
      order: 'new',
      skip
    }
  })
}