// product 指定返回结果中记录需返回的字段
module.exports = {
  XIANZHIFIELD: {
    _id : true,
    name: true,
    imgFileIDs: true, //只有当所有的图片都上传完毕后，这个值才能被设置
    price: true,
    desc: true,
    contact_tel: true,
    contact_wechat: true,
    type: true,
    type_special: true,
    send_name:true,
    send_openid:true,
    send_avatarUrl: true,
    status: true,
    taker_name: true,
    taker_avatarUrl: true,
    taker_openid:true
  }
}