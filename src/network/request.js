const baseURL = 'http://157.122.54.189:9088'
export function request(config) {
  // 1.用 wx 的 api 可以实现弹框'加载中'
  // uni.showToast({
  //   title: '加载中..',
  //   icon: 'none'
  // })
  // return new Promise((resolve, reject) => {
  //   wx.request({
  //     url:'http://157.122.54.189:9088/image/v3/homepage/vertical',
  //     data: {
  //       limit: 30,
  //       skip: 0,
  //       order: 'hot'
  //     },
  //     success: resolve,
  //     fail: reject,
  //     complete() {
  //       uni.hideToast()
  //     }
  //   })
  // })


  // 2.用 uni-app 的 api 直接返回 Promise 但是，实现弹框效果要设置一些东西。
  return uni.request({
    url: baseURL + config.url,
    data: config.data || {},
    method: config.method || 'get',
    timeout: 5000

  })
}