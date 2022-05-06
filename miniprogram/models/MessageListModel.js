import { CloudRequest } from '../utils/CloudRequest.js'
class MessageListModel extends CloudRequest {
  
  /**
   * 根据代取订单ID 获取代取订单信息
   * @param {*} openid 
   * @param {*} callBack 
   */
  getMessageListByOpenId(openid,callBack) {
    this.request({
      url: "getMessageListByOpenId",
      data:{openid:openid},
      success: res => {
        callBack(res)
      }
    })
  }
  /**
   * 生成消息
   * @param {*} orderData 
   * @param {*} callBack 
   */
  createMessage(message,callBack) {
    this.request({
        url: "createMessage",
        data: { message: message},
        success: res => {
            callBack(res)
        }
    })
  }
}
export { MessageListModel }