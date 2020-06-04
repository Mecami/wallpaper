import {request} from './request'

export function getAlbumDetail(id, skip, first) {
  return request({
    url: `/image/v1/wallpaper/album/${id}/wallpaper`,
    data: {
      limit: 30,
      order: 'new',
      skip,
      first
    }
  })
}