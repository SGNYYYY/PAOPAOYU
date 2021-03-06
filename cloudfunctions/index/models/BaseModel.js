// 公共BaseModel
const cloud = require('wx-server-sdk');
cloud.init({
  // 自身环境
  env: 'sgnyyyy-0128',
  traceUser: true,
});
const db = cloud.database();


/**
 * 查询处理 
 * @param  {object} model       集合名称
 * @param  {String} id          查询id
 * @return  {object|null}       查找结果
 */
const findById = (model, fields = {} , id ) => {
  try {
    return db.collection(model)
      .doc(id)
      .field(fields) 
      .get()
  } catch (e) {
    console.error(e)
  }
}

/**
 * 查询处理 
 * @param  {object} model       集合名称
 * @param  {String} openid          查询id
 * @return  {object|null}       查找结果
 */
const findByOpenId = (model, fields = {} , openid ) => {
  try {
    return db.collection(model)
      .where({})
      .field(fields) 
      .get()
  } catch (e) {
    console.error(e)
  }
}

/**
 * 查询处理 带多条件的
 * @param  {object} model         集合名称
 * @param  {Object} [options={}]    查询条件
 * @param  {Number} [page]        开始记录数
 * @param  {Number} [size]        每页显示的记录数
 * @return  {object|null}         查找结果
 */
const query = (model, fields = {}, options = {}, page = 0, size = 10, order = { name: '_id', orderBy:'asc'} ) => {
  try {
    return db.collection(model)
    .where(options)
    .field(fields) 
    .skip(page)
    .orderBy(order.name, order.orderBy)
    .get()

  } catch (e) {
    console.error(e)
  }
}

/**
 * 新增处理
 * @param  {object} model  集合名称
 * @param  {object} params 参数
 * @return {object| null}  操作结果
 */
const add = (model, params) => {
  try {
    return db.collection(model).add({
      data: params
    });
  } catch (e) {
    console.error(e);
  }
}

/**
 * 编辑处理
 * @param  {object} model      集合名称
 * @param  {object} params     参数
 * @return {object|null}       操作结果
 */
const update = (model,id, params) => {
  try {
    return db.collection(model).doc(id)
    .update({
      data: params
    })

  } catch (e) {
    console.error(e);
  }
}

/**
 * 删除结果
 * @param  {object} model      集合名称
 * @param  {String} id         参数
 * @return {object|null}       操作结果
 */
const remove = (model, id) => {
  try {
    return  db.collection(model).doc(id).remove()
  } catch (e) {
    console.error(e)
  }
}



module.exports = {
  query,
  findById,
  findByOpenId,
  add,
  update,
  remove

}