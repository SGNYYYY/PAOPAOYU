// pages/detail/detail-xianzhi.js
import {XianzhiModel} from '../../models/XianzhiModel'
import { UserInfoModel } from '../../models/UserInfoModel.js'
let userInfoModel = new UserInfoModel()
let xianzhiModel = new XianzhiModel()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login:false,
    product_xianzhi_id:0,
    product_xianzhi:{
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  _init:function(_id){ 
    xianzhiModel.getXianzhiById(_id,res=>{
      this.setData({
        product_xianzhi: res.result.data.data
      })
    })
  },
  immediately:function(){
    if(!this.data.login){
      wx.showModal({
        title: '请登陆后操作~',
        showCancel:false
      })
    }else{
      let xianzhi =  {}
      xianzhi._id = this.data.product_xianzhi._id
      xianzhi.taker_name = this.data.userInfo.nickName
      xianzhi.taker_avatarUrl = this.data.userInfo.taker_avatarUrl
      xianzhi.taker_openid = this.data.userInfo.openID
      xianzhi.status = 1
      xianzhiModel.takeXianzhi(xianzhi, res=>{
        if (res.result.code == 0) {
          this._showToast('none', '下单成功!')
        }
      })
      wx.navigateTo({
        url: '../MessageDetail/MessageDetail?product_id='+this.data.product_xianzhi._id
        +'&send_avatarUrl=' +this.data.product_xianzhi.send_avatarUrl+'&send_name='+this.data.product_xianzhi.send_name
        +'&contact_tel='+this.data.product_xianzhi.contact_tel+'&contact_wechat='+this.data.product_xianzhi.contact_wechat
        +'&from=xianzhi'+'&send_openid='+this.data.product_xianzhi.send_openid
      })
    }
  },
  _showToast: function (type, msg) {
    wx.showToast({
      icon: type,
      title: msg
    })
  },
  onLoad(options) {
    this._init(options.product_id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      login:app.globalData.hasLogin
    })
    if (this.data.login&&this.data.userInfo==null) {
      userInfoModel.getUserInfoByOpenId(app.globalData.openid,res => {
        this.setData({
          userInfo:  res.result.data.data[0],
          login: true
        })
      })    
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})