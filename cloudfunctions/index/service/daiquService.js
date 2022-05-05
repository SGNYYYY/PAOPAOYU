const model = require('../models/BaseModel.js')
const { DAIQU  } = require('../config/tableConfig.js')
const { DAIQUFIELD } = require('../fields/daiquField.js')

/**
 * 获取商品
 * param options 条件
 * param page    
 * param size
 * @return 
 */
const getDaiqu = () => {
  // 查询条件
  // options.product_status = 1
  // 排序条件 根据需要调正优化
  // order.name = '_creatTime'
  // order.orderBy= 'asc'
  console.log(model.query(DAIQU, DAIQUFIELD))
  return model.query(DAIQU, DAIQUFIELD)
}
/**
 * 获取单个商品
 * @param _id 条件
 * @return 
 */
const getDaiquById = (_id) => {
  return model.findById(DAIQU,DAIQUFIELD, _id)
}
/**
 * 根据openid获取商品信息
 * @param openid 条件
 * @return 
 */
const getDaiquByOpenId = (openid) => {
  let options = { send_openid: openid }
  return model.query(DAIQU,DAIQUFIELD, options)
}
/**
 * 根据openid获取商品信息
 * @param openid 条件
 * @return 
 */
const getDaiquByTakerOpenId = (openid) => {
  let options = { taker_openid: openid }
  return model.query(DAIQU,DAIQUFIELD, options)
}
/**
 * 
 * @param {*} daiqu
 * @param {*} userInfo 
 */
const createDaiqu = (daiqu_product, userInfo) => {
  // 订单信息
  let params_daiqu = {
    name: daiqu_product.name,
    price: daiqu_product.price,
    from: daiqu_product.from,
    from_desc: daiqu_product.from_desc,
    to: daiqu_product.to,
    to_desc: daiqu_product.to_desc,
    time_to: daiqu_product.time_to,
    date: daiqu_product.date,
    desc: daiqu_product.desc,
    contact_tel: daiqu_product.contact_tel,
    contact_wechat: daiqu_product.contact_wechat,
    send_name: userInfo.nickName,
    send_openid: userInfo.openID,
    send_avatarUrl: userInfo.avatarUrl,
    status: daiqu_product.status,
    create_time: new Date(),
    update_time: new Date(),
  }

  // 订单生成
  let daiquOrder = model.add(DAIQU,params_daiqu);
  return daiquOrder
}

/**
 * 代取订单被接受后，更新订单信息
 * @param {*} daiquData 
 */
const takeDaiqu = (daiquData) => {
  // 订单更新
  id = daiquData._id
  let params = {
      taker_name: daiquData.taker_name,
      taker_avatarUrl: daiquData.taker_avatarUrl,
      taker_openid: daiquData.taker_openid,
      status: daiquData.status,
      update_time: new Date(),
  }
  let daiquOrder = model.update(DAIQU,id, params);
  return daiquOrder
}
/**
 * 代取订单完成后，更新订单信息
 * @param {*} daiquData 
 */
const doneDaiqu = (daiquData) => {
  // 订单更新
  id = daiquData._id
  let params = {
      status: daiquData.status,
      update_time: new Date(),
  }
  let daiquOrder = model.update(DAIQU,id, params);
  return daiquOrder
}
module.exports = {
  getDaiqu,
  getDaiquById,
  getDaiquByOpenId,
  getDaiquByTakerOpenId,
  createDaiqu,
  takeDaiqu,
  doneDaiqu
}