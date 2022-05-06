// 导入数据库操作公共方法
const cloud = require('wx-server-sdk');
const model = require('../models/BaseModel.js')
// 全局集合名称
const { USERINFO } = require('../config/tableConfig.js')
// 返回字段处理
const { USERINFOFIELD } = require('../fields/userInfoField.js')
/**
 * 获取首页轮播
 * @return 
 */
const getOpenId = ()=>{
  let{OPENID}=cloud.getWXContext()
  console.log(OPENID)
  return {
    OPENID
  }
}
/**
 * 获取用户信息
 * @param openid 条件
 * @return 
 */
const getUserInfoByOpenId = (openid) => {
  console.log(openid)
  return model.query(USERINFO, USERINFOFIELD,{openID : openid})
}
/**
 * 新增用户信息
 * @param userInfo 条件
 * @return 
 */
const addUserInfo = (userInfo) => {
  return model.add(USERINFO, userInfo)
}
const getUserInfo = () => {
  return model.query(USERINFO, USERINFOFIELD)
}
// 导出
module.exports = {
  getOpenId,
  getUserInfoByOpenId,
  addUserInfo,
  getUserInfo
}