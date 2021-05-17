import {
  sendRequest
} from '../../request/index.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    navList: [],
    floorList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发送异步请求
    this.getSwiperList();
    this.getNavList();
    this.getfloorData();
  },
  // 获取轮播图
  async getSwiperList() {
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success:result => {
    //     if(result.data.meta.status === 200) {
    //       console.log(result.data.message)
    //       this.setData({
    //         swiperList: result.data.message
    //       })
    //     }
    //   },
    //   fail: err => {
    //     console.error(err)
    //   }
    // })

    // sendRequest({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'
    // }).then(result => {
    //   if (result.data.meta.status === 200) {
    //     console.log(result.data.message)
    //     this.setData({
    //       swiperList: result.data.message
    //     })
    //   }
    // })
    // 早期版本不支持 async ,需打开增强编译功能才能执行
    const result = await sendRequest({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'
    })
    if (result.data.meta.status === 200) {
      this.setData({
        swiperList: result.data.message
      })
    } else {
      console.error(result)
    }
  },
  async getNavList() {
    const res = await sendRequest({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'
    })
    if (res.data.meta.status === 200) {
      this.setData({
        navList: res.data.message
      })
    }
  },
  async getfloorData() {
    const res = await sendRequest({
      url :'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'
    })
    if(res.data.meta.status === 200) {
      this.setData({
        floorList: res.data.message
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})