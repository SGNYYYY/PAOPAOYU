// 云函数入口文件
const cloud = require('wx-server-sdk')
const TcbRouter = require('tcb-router')
// 返回工具类
const returnUtil = require('utils/ReturnUtil.js')
// 轮播业务层
// const banner = require('service/bannerService.js')
// // 主题业务层
// const theme  = require('service/themeService.js')
// 商品信息业务层
// const product = require('service/productService.js')
// 获取用户openID
const userInfo = require('service/userInfoService.js')
// 订单
// const order = require('service/orderService.js')



cloud.init()


// 云函数入口函数
exports.main = async (event, context) => {
  const app = new TcbRouter({ event });
  // app.use 表示该中间件会适用于所有的路由
  app.use(async (ctx, next) => {
    ctx.data = {};
    await next(); // 执行下一中间件
  });
 
/***************************    首页   *****************************************/



/***************************    分类   *****************************************/


/***************************    商品信息   *************************************/  



/***************************    主题商品   *************************************/  



/***************************    订单   *****************************************/  

/***************************   用户信息   *****************************************/ 

app.router('getUserInfoByOpenId', async (ctx,next) =>{
  let openid =  event.data.openid
  console.log(openid)
  ctx.data = await userInfo.getUserInfoByOpenId(openid)
  ctx.body = await returnUtil.success(ctx)
  await next()
})

app.router('addUserInfo', async (ctx,next) =>{
  console.log(event.data)
  let userInfoData =  event.data
  ctx.data = await userInfo.addUserInfo(userInfoData)
  ctx.body = await returnUtil.success(ctx)
  await next()
})
// 获取开放ID
app.router('getOpenId', async (ctx,next) =>{
  ctx.data = await userInfo.getOpenId()
  ctx.body = await returnUtil.success(ctx)
  console.log(ctx.data)
  await next()
})

/***************************    测试   *****************************************/    


  return app.serve();
}