const model = require('../models/BaseModel.js')
const { XIANZHI  } = require('../config/tableConfig.js')
const { XIANZHIFIELD } = require('../fields/xianzhiField.js')

/**
 * 获取商品
 * param options 条件
 * param page    
 * param size
 * @return 
 */
const getXianzhi = () => {
  // 查询条件
  // options.product_status = 1
  // 排序条件 根据需要调正优化
  // order.name = '_creatTime'
  // order.orderBy= 'asc'
  console.log(model.query(XIANZHI, XIANZHIFIELD))
  return model.query(XIANZHI, XIANZHIFIELD)
}
/**
 * 获取单个商品
 * @param _id 条件
 * @return 
 */
const getXianzhiById = (_id) => {
  return model.findById(XIANZHI,XIANZHIFIELD, _id)
}
/**
 * 根据openid获取商品信息
 * @param openid 条件
 * @return 
 */
const getXianzhiByOpenId = (openid) => {
  let options = { send_openid: openid }
  return model.query(XIANZHI, XIANZHIFIELD, options)
}
/**
 * 根据openid获取商品信息
 * @param openid 条件
 * @return 
 */
const getXianzhiByTakerOpenId = (openid) => {
  let options = { taker_openid: openid }
  return model.query(XIANZHI, XIANZHIFIELD, options)
}
/**
 * 
 * @param {*} xianzhi 
 * @param {*} userInfo 
 */
const createXianzhi = (xianzhi_product, userInfo) => {
  // 订单信息
  let params_xianzhi = {
    name: xianzhi_product.name,
    imgFileIDs: xianzhi_product.imgFileIDs,
    price: xianzhi_product.price,
    desc: xianzhi_product.desc,
    contact_tel: xianzhi_product.contact_tel,
    contact_wechat: xianzhi_product.contact_wechat,
    type: xianzhi_product.type,
    type_special: xianzhi_product.type_special,
    send_name: userInfo.nickName,
    send_openid: userInfo.openID,
    send_avatarUrl: userInfo.avatarUrl,
    status: xianzhi_product.status,
    create_time: new Date(),
    update_time: new Date(),
  }

  // 订单生成
  let xianzhiOrder = model.add(XIANZHI,params_xianzhi);
  return xianzhiOrder
}
/**
 * 代取订单被接受后，更新订单信息
 * @param {*} xianzhiData 
 */
const takeXianzhi = (xianzhiData) => {
  // 订单更新
  id = xianzhiData._id
  let params = {
      taker_name: xianzhiData.taker_name,
      taker_avatarUrl: xianzhiData.taker_avatarUrl,
      taker_openid: xianzhiData.taker_openid,
      status: xianzhiData.status,
      update_time: new Date(),
  }
  let xianzhiOrder = model.update(XIANZHI,id, params);
  return xianzhiOrder
}
/**
 * 代取订单完成后，更新订单信息
 * @param {*} xianzhiData 
 */
const doneXianzhi = (xianzhiData) => {
  // 订单更新
  id = xianzhiData._id
  let params = {
      status: xianzhiData.status,
      update_time: new Date(),
  }
  let xianzhiOrder = model.update(XIANZHI,id, params);
  return xianzhiOrder
}
const deleteXianzhi = (xianzhi_id) => {
  return model.remove(XIANZHI,xianzhi_id);
}
module.exports = {
  getXianzhi,
  getXianzhiById,
  createXianzhi,
  getXianzhiByOpenId,
  getXianzhiByTakerOpenId,
  takeXianzhi,
  doneXianzhi,
  deleteXianzhi
}