// pages/orderDetails/buyRun/index.js
// pages/orderDetails/index.js
Page({

  /**
   * 页面的初始数据
   */

  data: {

    products: [
    {
      id: 1,
      name: "快递",
      from: "浴池",
      to: "五舍B",
      time_from: "13:00",
      time_to: "19:00",
      date:{
        month:5,
        day:1
      },
      price: 1
    },
    {
      id: 2,
      name: "外卖",
      from: "小西门",
      to: "一舍A",
      time_from: "12:30",
      time_to: "13:00",
      date:{
        month:5,
        day:1
      },
      price: 2
    }
  ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  back: function(param) {
    wx.navigateBack({ changed: true })
  }

})