import {request} from './request'

export function getComments(id) {
  return request({
    url: `/image/v2/wallpaper/wallpaper/${id}/comment`
  })
}