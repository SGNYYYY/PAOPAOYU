// pages/orderDetails/sellGoods/index.js
import {XianzhiModel} from '../../../models/XianzhiModel.js'
let xianzhiModel = new XianzhiModel()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */

  data: {
    products: [
  ]
  },   
  _init: function () {
    xianzhiModel.getXianzhiByOpenId(app.globalData.openid, res=>{
      this.setData({
        products:res.result.data.data
      })
    })
  },
  confirm: function(e){
    let that = this
    wx.showModal({
      title:'确认完成？',
      content:'请确认订单是否完成',
      cancelColor: 'grey',
      success (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          console.log(e.target.dataset.id)
          let xianzhi={}
          xianzhi.status = 2
          xianzhi._id = e.target.dataset.id

          xianzhiModel.doneXianzhi(xianzhi,res=>{
            that._init()
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
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