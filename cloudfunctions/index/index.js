// 云函数入口文件
const cloud = require('wx-server-sdk')
const TcbRouter = require('tcb-router')
// 返回工具类
const returnUtil = require('utils/ReturnUtil.js')
// 轮播业务层
// const banner = require('service/bannerService.js')
// 订单信息业务层
const xianzhi = require('service/xianzhiService.js')
const daiqu = require('service/daiquService.js')
// 用户信息业务层
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
   // 获取商品
  app.router('getXianzhi',async (ctx,next) => {
    ctx.data = await xianzhi.getXianzhi()
    ctx.body = await returnUtil.success(ctx)
    console.log(ctx.data)
    await next()
  })
  // 获取闲置商品信息
  app.router('getXianzhiById', async (ctx,next) =>{
    let _id =  event.data._id
    ctx.data = await xianzhi.getXianzhiById(_id)
    ctx.body = await returnUtil.success(ctx)
    await next()
  })
  // 获取闲置商品信息
  app.router('getXianzhiByOpenId', async (ctx,next) =>{
    let openid =  event.data.openid
    ctx.data = await xianzhi.getXianzhiByOpenId(openid)
    ctx.body = await returnUtil.success(ctx)
    await next()
  })
  // 获取闲置商品信息
  app.router('getXianzhiByTakerOpenId', async (ctx,next) =>{
    let openid =  event.data.openid
    ctx.data = await xianzhi.getXianzhiByTakerOpenId(openid)
    ctx.body = await returnUtil.success(ctx)
    await next()
  })
     // 获取商品
     app.router('getDaiqu',async (ctx,next) => {
      ctx.data = await daiqu.getDaiqu()
      ctx.body = await returnUtil.success(ctx)
      console.log(ctx.data)
      await next()
    })
    // 获取闲置商品信息
    app.router('getDaiquById', async (ctx,next) =>{
      let _id =  event.data._id
      ctx.data = await daiqu.getDaiquById(_id)
      ctx.body = await returnUtil.success(ctx)
      await next()
    })
    // 获取闲置商品信息
    app.router('getDaiquByOpenId', async (ctx,next) =>{
      let openid =  event.data.openid
      ctx.data = await daiqu.getDaiquByOpenId(openid)
      ctx.body = await returnUtil.success(ctx)
      await next()
    })
    // 获取闲置商品信息
    app.router('getDaiquByTakerOpenId', async (ctx,next) =>{
      let openid =  event.data.openid
      ctx.data = await daiqu.getDaiquByTakerOpenId(openid)
      ctx.body = await returnUtil.success(ctx)
      await next()
    })
/***************************    发布信息   *************************************/
  // 生成订单
  app.router('createXianzhi', async (ctx, next) => {
    //event.data.orderData,event.userInfo
    console.log(event)
    ctx.data = await xianzhi.createXianzhi(event.data.product_xianzhi, event.data.userInfo)
    ctx.body = await returnUtil.success(ctx)
    await next()
  })  
  // 生成订单
  app.router('createDaiqu', async (ctx, next) => {
    //event.data.orderData,event.userInfo
    console.log(event)
    ctx.data = await daiqu.createDaiqu(event.data.product_daiqu, event.data.userInfo)
    ctx.body = await returnUtil.success(ctx)
    await next()
  })  

/***************************    主题商品   *************************************/  



/***************************    更新   *****************************************/  
  // 更新订单
  app.router('takeXianzhi', async (ctx, next) => {
    // console.log(event)
    ctx.data = await xianzhi.takeXianzhi(event.data.xianzhiData)
    ctx.body = await returnUtil.success(ctx)
    await next()
  })
  // 更新订单
  app.router('doneXianzhi', async (ctx, next) => {
    // console.log(event)
    ctx.data = await xianzhi.doneXianzhi(event.data.xianzhiData)
    ctx.body = await returnUtil.success(ctx)
    await next()
  })

  // 更新订单
  app.router('takeDaiqu', async (ctx, next) => {
    // console.log(event)
    ctx.data = await daiqu.takeDaiqu(event.data.daiquData)
    ctx.body = await returnUtil.success(ctx)
    await next()
  })
  // 更新订单
  app.router('doneDaiqu', async (ctx, next) => {
    // console.log(event)
    ctx.data = await daiqu.doneDaiqu(event.data.daiquData)
    ctx.body = await returnUtil.success(ctx)
    await next()
  })
  
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