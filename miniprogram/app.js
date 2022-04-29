import { UserInfoModel } from 'models/UserInfoModel.js'
let userInfoModel = new UserInfoModel()
App({
  globalData: {
    theme: wx.getSystemInfoSync().theme,
    hasLogin: false,
    openid: null,
    iconTabbar: '',
  },
  onLaunch(opts, data) {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'sgnyyyy-0128',
        traceUser: true,
      })
    }
    this._init()
  },
  // 初始化
  _init: function () {
    userInfoModel.getOpenId(res => {
      // console.log(res.result.data.OPENID)
      let that = this
      that.globalData.openid=res.result.data.OPENID
      let openID = res.result.data.OPENID
      console.log(openID)
      userInfoModel.getUserInfoByOpenId(openID,res => {
        console.log(res.result.data.data[0])
        if (res.result.data.data[0]==null){
        } else {
          that.globalData.hasLogin=true
        }
      })    
    })
  },
})
