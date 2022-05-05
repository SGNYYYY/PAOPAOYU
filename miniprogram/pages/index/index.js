// page/index/index.js
import {IndexModel} from '../../models/IndexModel.js'
import {DaiquModel} from '../../models/DaiquModel.js'
import {XianzhiModel} from '../../models/XianzhiModel.js'
import { UserInfoModel } from '../../models/UserInfoModel.js'
let userInfoModel = new UserInfoModel()
let xianzhiModel = new XianzhiModel()
let daiquModel = new DaiquModel()
let indexModel = new IndexModel()
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login: false,
    counts:1,
    mask: true,//遮罩层显示状态  
    cartBox: true,//购物车弹窗显示隐藏
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //自动轮播
    interval: 3000, // 自动切换时间间隔
    duration: 1000, // 滑动动画时长
    circular: true,//是否采用衔接滑动 
    banners:[
      {image:"/image/adv1.jpg"},
      {image:"/image/adv2.jpg"},
      {image:"/image/adv3.jpg"},
      {image:"/image/adv4.jpg"},
      {image:"/image/adv5.jpg"},
    ],
    currentTab:0,
    product_daiqu: [
    ],
    product_xianzhi: [
    ],
    tab:[
      {current_tab:0,tab_name:"代取"},
      {current_tab:1,tab_name:"闲置交易"}
    ]
  },
  clickTab:function(event){
    var currentTab = event.currentTarget.dataset.current;
    wx.showToast({
      icon: 'loading',
      title: '请求中',
      duration : 300
    })
    this.setData({
      currentTab
    })
  },
  // 跳转商品详情
  xianzhiDetails: function (e) {
    this._navxianzhiDetail(e.detail.product_xianzhi_id)
  },
  // 跳转详情
  _navxianzhiDetail: function (product_id) {
    wx.navigateTo({
      url: '/pages/detail/detail-xianzhi?product_id='+product_id,
    })
  },
  showDaiquDetail: function(event) {
    let product_id = event.detail.product_daiqu_id
    daiquModel.getDaiquById(product_id,res=>{
      this.setData({
        product:res.result.data.data
      })
    })
    this.setData({
      cartBox: !this.data.cartBox, //显示隐藏购物车弹窗
      mask: !this.data.mask, //显示隐藏遮罩层
    });
  },
  closeBox: function() {
    this.setData({
      cartBox: !this.data.cartBox, //显示隐藏购物车弹窗
      mask: !this.data.mask, //显示隐藏遮罩层
    });
  },
  //点击遮罩层隐藏弹窗
  hideAllBox() {
    this.setData({
      //遮罩层隐藏
      mask: true,
      //购物车弹窗隐藏
      cartBox: true,
    })
  },
  immediately:function(){
    console.log("jhaha")
    if(!this.data.login){
      wx.showModal({
        title: '请登陆后操作~',
        showCancel:false
      })
    }else{
      let daiqu =  {}
      daiqu._id = this.data.product._id
      daiqu.taker_name = this.data.userInfo.nickName
      daiqu.taker_avatarUrl = this.data.userInfo.taker_avatarUrl
      daiqu.taker_openid = this.data.userInfo.openID
      daiqu.status = 1
      daiquModel.takeDaiqu(daiqu, res=>{
        if (res.result.code == 0) {
          this._showToast('none', '下单成功!')
        }
      })
      wx.switchTab({
        url: '../message/index',
      })
    }
    this.setData({
      cartBox: !this.data.cartBox, //显示隐藏购物车弹窗
      mask: !this.data.mask, //显示隐藏遮罩层
    });
  },
  _showToast: function (type, msg) {
    wx.showToast({
      icon: type,
      title: msg
    })
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
    indexModel.getXianzhi(res => {
      this.setData({
        product_xianzhi :  res.result.data.data
      })
    })     
    indexModel.getDaiqu(res => {
      this.setData({
        product_daiqu :  res.result.data.data
      })
    }) 
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