// pages/usrManage/index.js
import { UserInfoModel } from '../../models/UserInfoModel.js'
let userInfoModel = new UserInfoModel()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    userInfoModel.getUserInfo(res=>{
      console.log(res.result.data)
      this.setData({
        UserInfo: res.result.data.data
      })
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

  // 底部选项卡
  orderManage: function(param){
    var app = getApp()
    wx.navigateTo({
      url: '../orderManage/index',
    })  
  },

  usrManage: function(param){

  },

  managerMy: function(param){
    var app = getApp()
    wx.navigateTo({
      url: '../managerMy/index',
    })  
  }
})