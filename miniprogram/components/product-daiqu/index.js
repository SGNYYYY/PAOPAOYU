// components/product-daiqu-column/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentTab: {       // 当前标签 ：代取/闲置交易
      type: String,  // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '0'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    product_daiqu: {       // 当前标签 ：代取/闲置交易
      type: Object,  // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: ''     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
   // 商品详情
   showDaiquDetail: function () {
    // 返回 
    this.triggerEvent("showDaiquDetail", {
       product_daiqu_id: this.data.product_daiqu._id
    }, {})
  },
  }
})
