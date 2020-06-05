import {request} from './request'

export function getVedioData(options) {
  return request({
    url: options.url,
    data: {
      limit: 30,
      order: options.order,
      skip: options.skip
    }
  })
}