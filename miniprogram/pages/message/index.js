// page/message/index.js
const app = getApp()
const friends = require('./messagelist.js')
import { MessageListModel } from '../../models/MessageListModel.js'
let messageListModel = new MessageListModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    friends: friends.list
  },
  gotoChat(event) {
    const currentUser = event.currentTarget.dataset.user;
    wx.navigateTo({
      url: '../MessageDetail/MessageDetail?send_name=' + currentUser.nickname + '&send_avatarUrl=' + currentUser.photo + '&content='
      +currentUser.content+ '&from=messagelist'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //登录判断
    messageListModel.getMessageListByOpenId(app.globalData.openid, res=>{
      friends.list=res.result.data.data
    })
  this.setData({
    friends:friends.list
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //登录判断
    messageListModel.getMessageListByOpenId(app.globalData.openid, res=>{
      friends.list=res.result.data.data
    })
  this.setData({
    friends:friends.list
  })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: async function() {
    if (!app.globalData.hasLogin) {
      wx.showToast({
        title: '您未登录~',
        image: 'cloud://sgnyyyy-0128.7367-sgnyyyy-0128-1302561482/images_paopaoyu/unselect/error.png'
      })
      setTimeout(function() {
        // 返回
        wx.switchTab({
          url: '/pages/index/index',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      }, 1000);
    }else{
          //登录判断
      messageListModel.getMessageListByOpenId(app.globalData.openid, res=>{
        friends.list=res.result.data.data
        this.setData({
          friends:friends.list
        })
      })

    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
  onPullDownRefresh: async function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
})