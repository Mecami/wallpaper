import {request} from './request'

export function getVedioData(url, skip, order) {
  return request({
    url,
    data: {
      limit: 30,
      order,
      skip
    }
  })
}