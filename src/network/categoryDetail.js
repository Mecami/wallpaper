import {request} from './request'

export function getCategoryList(id, skip, order) {
  return request({
    url: `/image/v1/vertical/category/${id}/vertical`,
    data: {
      limit: 30,
      skip,
      order
    }
  })
}