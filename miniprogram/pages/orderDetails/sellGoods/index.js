// pages/orderDetails/sellGoods/index.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    products: [
    {
      id: 1,
      name: "几乎全新书包",
      product_img: "../../../images/loginLog.jpg",
      price: 99,
      send_name: "user1",
      send_avataUrl: "../../../images/order.png",
    },
    {
      id: 2,
      name: "牛奶",
      product_img: "../../../images/loginLog.jpg",
      price: 30,
      send_name: "user2",
      send_avataUrl: "../../../images/order.png",
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