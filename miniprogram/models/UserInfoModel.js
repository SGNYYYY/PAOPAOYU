import { CloudRequest } from '../utils/CloudRequest.js'
class UserInfoModel extends CloudRequest {
  
  /**
   * 获取用户ID
   * @param {*} callBack 
   */
  getOpenId(callBack) {
    this.request({
      url: "getOpenId",
      success: res => {
        callBack(res)
      }
    })
  }
    /**
   * 根据用户openID 获取用户信息
   * @param {*} openid
   * @param {*} callBack 
   */
  getUserInfoByOpenId(openid,callBack) {
    console.log(openid)
    this.request({
      url: "getUserInfoByOpenId",
      data:{openid:openid},
      success: res => {
        callBack(res)
      }
    })
  }
  addUserInfo(userInfo,callBack) {
    // console.log(userInfo)
    this.request({
      url: "addUserInfo",
      data: userInfo,
      success: res => {
        callBack(res)
      }
    })
  }
    /**
   * 获取用户信息
   * @param {*} callBack 
   */
  getUserInfo(callBack) {
    this.request({
      url: "getUserInfo",
      success: res => {
        callBack(res)
      }
    })
  }
}

export { UserInfoModel }