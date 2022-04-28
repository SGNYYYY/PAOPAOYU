// page/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      {
        id:1,
        name:"快递",
        from:"浴池",
        to:"五舍B",
        time_from:"13:00",
        time_to:"19:00",
        date:{
          month:5,
          day: 1
        },
        price:1
      },
      {
        id:2,
        name:"外卖",
        from:"小西门",
        to:"一舍A",
        time_from:"12:30",
        time_to:"13:00",
        date:{
          month:5,
          day: 1
        },
        price:2
      }
    ],
    product_xianzhi: [
      {
        id:1,
        name:"几乎全新书包",
        product_img:"",
        price:99,
        send_name:"user1", //发送用户名
        send_avataUrl:""      //发送用户头像链接
      },
      {
        id:2,
        name:"牛奶",
        product_img:"",
        price:30,
        send_name:"user2",
        send_avataUrl:""
      }
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