import { CloudRequest } from '../utils/CloudRequest.js'
class XianzhiModel extends CloudRequest {
  
  /**
   * 根据代取订单ID 获取代取订单信息
   * @param {*} _id 
   * @param {*} callBack 
   */
  getXianzhiById(_id,callBack) {
    console.log(_id)
    this.request({
      url: "getXianzhiById",
      data:{_id:_id},
      success: res => {
        callBack(res)
      }
    })
  }
  /**
   * 根据代取订单ID 获取代取订单信息
   * @param {*} openid 
   * @param {*} callBack 
   */
  getXianzhiByOpenId(openid,callBack) {
    this.request({
      url: "getXianzhiByOpenId",
      data:{openid:openid},
      success: res => {
        callBack(res)
      }
    })
  }
    /**
   * 根据代取订单ID 获取代取订单信息
   * @param {*} openid 
   * @param {*} callBack 
   */
  getXianzhiByTakerOpenId(openid,callBack) {
    this.request({
      url: "getXianzhiByTakerOpenId",
      data:{openid:openid},
      success: res => {
        callBack(res)
      }
    })
  }
  /**
   * 生成订单
   * @param {*} orderData 
   * @param {*} callBack 
   */
  creatXianzhi(xianzhi,userInfo,callBack) {
    console.log(xianzhi)
    this.request({
        url: "createXianzhi",
        data: { product_xianzhi: xianzhi, 
                userInfo : userInfo},
        success: res => {
            callBack(res)
        }
    })
  }
      /**
   * 更新订单
   * @param {*} 
   * @param {*} callBack 
   */
  takeXianzhi(xianzhi,callBack) {
    this.request({
        url: "takeXianzhi",
        data: { xianzhiData: xianzhi},
        success: res => {
            callBack(res)
        }
    })
  }
      /**
   * 更新订单
   * @param {*} 
   * @param {*} callBack 
   */
  doneXianzhi(xianzhi,callBack) {
    this.request({
        url: "doneXianzhi",
        data: { xianzhiData: xianzhi},
        success: res => {
            callBack(res)
        }
    })
  }
  deleteXianzhi(xianzhi_id,callBack) {
    this.request({
      url:"deleteXianzhi",
      data: {xianzhi_id: xianzhi_id},
      success: res => {
        callBack(res)
      }
    })
  }
}
export { XianzhiModel }