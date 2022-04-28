// pages/detail/detail-xianzhi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product_xianzhi_id:0,
    product_xianzhi:{
      id:1,
      name:"几乎全新书包",
      product_img:"/image/adv1.JPG",
      price:99,
      desc:"这边填写用户对商品的描述",
      send_name:"user1", //发送用户名
      send_avataUrl:""      //发送用户头像链接
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      product_xianzhi_id:options.product_id
    })
    console.log(this.data.product_xianzhi_id)
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