// pages/orderDetails/sellRun/index.js
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
    daiquModel.getDaiquByOpenId(app.globalData.openid, res=>{
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
          let daiqu={}
          daiqu.status = 2
          daiqu._id = e.target.dataset.id

          daiquModel.doneDaiqu(daiqu,res=>{
            that._init()
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
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