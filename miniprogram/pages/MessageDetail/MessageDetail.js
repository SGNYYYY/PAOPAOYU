// pages/MessageDetail/MessageDetail.js
const app = getApp()
const friends = require('../message/messagelist.js')
var inputVal = '';
var msgList = [];
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;
import { MessageListModel } from '../../models/MessageListModel.js'
let messageListModel = new MessageListModel()
/**
 * 初始化数据
 */
function initData(that,options) {
  inputVal = '';
  if(options.from !="messagelist"){
      if(options.from == "xianzhi"){
        msgList = [{
          speaker: 'server',
          contentType: 'text',
          content: '您好,您已下单我的商品，我的电话是：'+options.contact_tel
        } ]
    }else{
      msgList = [{
        speaker: 'server',
        contentType: 'text',
        content: '您好,您已领取我的代取订单，我的电话是：'+options.contact_tel
      }]
    }
      if(options.contact_wechat!=""){
        msgList[0].content += '我的微信是：'+options.contact_wechat
      }
      msgList[0].content += '请尽快与我联系'
      let message = {}
      message.photo= options.send_avatarUrl,
      message.nickname= options.send_name,
      message.time= new Date().getHours()+':'+new Date().getMinutes(),
      message.content= msgList[0].content,
      message.openID = app.globalData.openid,
      message.others_openID = options.send_openid
      messageListModel.createMessage(message,res=>{
      })
    friends.list.push({
      photo: options.send_avatarUrl,
      nickname: options.send_name,
      time: new Date().getHours()+':'+new Date().getMinutes(),
      message: msgList[0].content,
    })
  }else{
    msgList = [{
      speaker: 'server',
      contentType: 'text',
      content: options.content
    }
  ]
  }
  that.setData({
    msgList,
    inputVal
  })
}

Page({

    /**
     * 页面的初始数据
     */
    data: {
      scrollHeight: '100vh',
      inputBottom: 0,
      photo:''
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
      initData(this,options)
      console.log(options)
      this.setNickName(options)
      this.setData({
        photo:options.send_avatarUrl
      })
    },

    // 设置昵称
    setNickName(options) {
      const nickname = options.send_name;
      wx.setNavigationBarTitle({
        title: nickname
      });
    },
    /**
     * 获取聚焦
     */
    focus: function(e) {
      keyHeight = e.detail.height;
      this.setData({
        scrollHeight: (windowHeight - keyHeight) + 'px'
      });
      this.setData({
        toView: 'msg-' + (msgList.length - 1),
        inputBottom: keyHeight + 'px'
      })  
    },
  
    //失去聚焦(软键盘消失)
    blur: function(e) {
      this.setData({
        scrollHeight: '100vh',
        inputBottom: 0
      })
      this.setData({
        toView: 'msg-' + (msgList.length - 1)
      })
  
    },
  
    /**
     * 发送点击监听
     */
    sendClick: function(e) {
      msgList.push({
        speaker: 'customer',
        contentType: 'text',
        content: e.detail.value
      })
      inputVal = '';
      this.setData({
        msgList,
        inputVal
      });
  
  
    },
  
    /**
     * 退回上一页
     */
    toBackClick: function() {
      wx.navigateBack({})
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