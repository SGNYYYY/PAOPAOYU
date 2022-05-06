// pages/orderManage/index.js
import {IndexModel} from '../../models/IndexModel'
import {DaiquModel} from '../../models/DaiquModel'
import {XianzhiModel} from '../../models/XianzhiModel.js'
let xianzhiModel = new XianzhiModel()
let daiquModel = new DaiquModel()
let indexModel = new IndexModel()
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  deletexianzhi: function(e){
    let that = this
    wx.showModal({
      title:'确认删除？',
      content:'请确认是否删除该订单',
      cancelColor: 'grey',
      success (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          xianzhiModel.deleteXianzhi(e.target.dataset.id,res=>{
            that._init()
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
  },
  deletedaiqu: function(e){
    let that = this
    wx.showModal({
      title:'确认删除？',
      content:'请确认是否删除该订单',
      cancelColor: 'grey',
      success (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          daiquModel.deleteDaiqu(e.target.dataset.id,res=>{
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
  _init: function(){
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

  },

  usrManage: function(param){
    var app = getApp()
    wx.navigateTo({
      url: '../usrManage/index'
    }) 
  },

  managerMy: function(param){
    var app = getApp()
    wx.navigateTo({
      url: '../managerMy/index',
    })  
  }
})