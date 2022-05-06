const model = require('../models/BaseModel.js')
const { MESSAGELIST } = require('../config/tableConfig.js')
const { MESSAGELISTFIELD } = require('../fields/messagelistField.js')

/**
 * 根据openid获取商品信息
 * @param openid 条件
 * @return 
 */
const getMessageListByOpenId = (openid) => {
  let options = { openID: openid }
  return model.query(MESSAGELIST,MESSAGELISTFIELD, options)
}
/**
 * 
 * @param {*} daiqu
 * @param {*} userInfo 
 */
const createMessage = (message) => {
  // 订单信息
  let params_message = {
    photo:message.photo,
    nickname:message.nickname,
    time:message.time,
    content:message.content,
    others_openID:message.others_openID,
    openID:message.openID,
  }

  // 订单生成
  let messageList = model.add(MESSAGELIST,params_message);
  return messageList
}

module.exports = {
  createMessage,
  getMessageListByOpenId
}