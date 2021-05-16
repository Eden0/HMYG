export const sendRequest = (params) => {
  return new Promise((reslove,reject) => {
    wx.request({
      ...params,
      success: res=> {
        reslove(res)
      },
      fail: err => {
        reject(err);
      }
    })
  })
}