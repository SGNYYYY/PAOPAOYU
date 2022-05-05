import { CloudRequest } from '../utils/CloudRequest.js'
class IndexModel extends CloudRequest {
  
  /**
   * 获取首页轮播
   * @param {*} callBack 
   */
  getBanner(callBack) {
    this.request({
      url: "getBanner",
      success: res => {
        callBack(res)
      }
    })
  }
  /**
   * 获取最新商品
   * @param {*} callBack 
   */
  getDaiqu(callBack){
    this.request({
      url: "getDaiqu",
      success: res => {
        console.log(res.result.data)
        callBack(res)
      }
    })
  }
    /**
   * 获取最新商品
   * @param {*} callBack 
   */
  getXianzhi(callBack){
    this.request({
      url: "getXianzhi",
      success: res => {
        console.log(res.result.data)
        callBack(res)
      }
    })
  }

}

export { IndexModel }