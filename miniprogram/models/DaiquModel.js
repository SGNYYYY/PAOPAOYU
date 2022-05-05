import { CloudRequest } from '../utils/CloudRequest.js'
class DaiquModel extends CloudRequest {
  
  /**
   * 根据代取订单ID 获取代取订单信息
   * @param {*} _id 
   * @param {*} callBack 
   */
  getDaiquById(_id,callBack) {
    console.log(_id)
    this.request({
      url: "getDaiquById",
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
  getDaiquByOpenId(openid,callBack) {
    this.request({
      url: "getDaiquByOpenId",
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
  getDaiquByTakerOpenId(openid,callBack) {
    this.request({
      url: "getDaiquByTakerOpenId",
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
  createDaiqu(daiqu,userInfo,callBack) {
    console.log(daiqu)
    this.request({
        url: "createDaiqu",
        data: { product_daiqu: daiqu, 
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
  takeDaiqu(daiqu,callBack) {
    console.log(daiqu)
    this.request({
        url: "takeDaiqu",
        data: { daiquData: daiqu},
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
  doneDaiqu(daiqu,callBack) {
    console.log(daiqu)
    this.request({
        url: "doneDaiqu",
        data: { daiquData: daiqu},
        success: res => {
            callBack(res)
        }
    })
  }
}
export { DaiquModel }