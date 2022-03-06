const config = require('./config')
App({
  
  onLaunch(opts, data) {
    console.log('App Launch', opts)
    if (data && data.path) {
      wx.navigateTo({
        url: data.path,
      })
    }
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: config.envId,
        traceUser: true,
      })
    }
  },
  onShow(opts) {
    console.log('App Show', opts)
    // console.log(wx.getSystemInfoSync())
  },
  onHide() {
    console.log('App Hide')
  },
  globalData: {
    theme: wx.getSystemInfoSync().theme,
    hasLogin: false,
    openid: null,
    iconTabbar: '',
  },
})
