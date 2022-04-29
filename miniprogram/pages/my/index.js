// page/my/index.js


Page({

  /**
   * 页面的初始数据
   */
  data: {

    loggedin_hidden: true,
    un_loggedin_hidden: false,
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
    var app = getApp()
    wx.navigateTo({
      url: '../managerLogin/index',
    })
  },

  
  
  /**
   * 授权登录按钮
   */
  bindGetUserInfo: function() {
    wx.switchTab({
      url: '../index/index',
    })
    this.setData({
      un_loggedin_hidden:true,
      loggedin_hidden:false,
      imgUrl: "../../images/loginLog.jpg"
    })
    app.globalData.hasLogin = true
    wx.showToast({
      title: '登录成功',
      icon: 'none',
      duration: 2000
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
