// pages/orderDetails/buyRun/index.js
const app = getApp()
import {DaiquModel} from '../../../models/DaiquModel'
let daiquModel = new DaiquModel()
Page({

  /**
   * 页面的初始数据
   */

  data: {

    products: [
  ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  _init: function () {
    daiquModel.getDaiquByTakerOpenId(app.globalData.openid, res=>{
      this.setData({
        products:res.result.data.data
      })
    })
  },
  onLoad: function (options) {
    this.setData({
      orderStatus:app.globalData.orderStatus
    })
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
    this._init()
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