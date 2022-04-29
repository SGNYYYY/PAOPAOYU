// page/my/index.js
import { UserInfoModel } from '../../models/UserInfoModel.js'
let userInfoModel = new UserInfoModel()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    login: false,
    imgUrl: "../../images/un_log.png"
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
  onShow:function(){
    this.setData({
      login:app.globalData.hasLogin
    })
    this._initUserInfo()
  },
  // onShow: function () {

  // },

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
  


  /**
   * 管理员登录按钮
   */
  loginManager: function(param){
    wx.navigateTo({
      url: '../managerLogin/index',
    })
  },

  
  
  /**
   * 授权登录按钮
   */
  getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) =>{
        app.globalData.hasLogin = true
        let user = res.userInfo
        var that=this
          // console.log(this.data.userInfo)
        console.log(app.globalData.openid)
        this.setData({
          userInfo:{avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName,
          openID : app.globalData.openid},
          login:app.globalData.hasLogin
        })
        userInfoModel.addUserInfo(that.data.userInfo,res =>{})
        // console.log(res.userInfo)
        // console.log(this.data.userInfo)
        wx.showToast({
          title: '登录成功',
        })
      }
    })
  },
  // 初始化
  _initUserInfo: function () {
    userInfoModel.getUserInfoByOpenId(app.globalData.openid,res => {
      console.log(res.result.data.data[0])
      if (res.result.data.data[0]==null){
        this.setData({
          login:false
        })
      } else {
        this.setData({
          userInfo:res.result.data.data[0],
          login: true
        })
      }
    })    
  },

  /**
   * 我的订单跳转
   */
  myOrder: function() {
    wx.navigateTo({
      url: '../myOrder/index',
    })
  }

  
})
