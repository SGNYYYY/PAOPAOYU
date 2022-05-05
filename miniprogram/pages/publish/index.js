// page/publish/index.js
const app = getApp()
import {XianzhiModel} from '../../models/XianzhiModel'
import {DaiquModel} from '../../models/DaiquModel'
import { UserInfoModel } from '../../models/UserInfoModel.js'
let userInfoModel = new UserInfoModel()
let xianzhiModel = new XianzhiModel()
let daiquModel = new DaiquModel()
const date = new Date();
const years = [];
const months = [];
const days = [];
const hours = [];
const minutes = [];
//获取年
for (let i = date.getFullYear(); i <= date.getFullYear() + 5; i++) {
  years.push("" + i);
}
//获取月份
for (let i = 1; i <= 12; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  months.push("" + i);
}
//获取日期
for (let i = 1; i <= 31; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  days.push("" + i);
}
//获取小时
for (let i = 0; i < 24; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  hours.push("" + i);
}
//获取分钟
for (let i = 0; i < 60; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  minutes.push("" + i);
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year:'',
    month:'',
    day:'',
    time_to:'',
    time: '',
    multiArray: [years, months, days, hours, minutes],
    multiIndex: [0, 9, 16, 10, 17],
    choose_year: '',
    login: false,
    check1:true,
    fileIDs: [],
    fileIDs1:[],
    TabCur: 0,
    openid:'',
    selected: true,
    selected1: false,
    imgList: [], //二手
    length1:0,
    length2:0,
    shiwu:null,
    index_from:0,
    index_to:0,
    imgList1: [], //失物
    index: null,
    picker: ['一号楼', '生科楼', '建筑楼', '信息楼', '风雨操场', '文管楼', '食堂', '澡堂', '其他地点'],
    index1: 0,
    picker1: ['手机数码', '书籍资料', '运动健身','服装配饰','鞋靴','美妆个护','文具','户外用品','其他'],
    index2: 0,
    picker2: ['正常', '易碎品', '易变质','低温保存','贵重物品'],
    tablist: [
      {
        id: 0,
        mess: '发布闲置物品'
      },
      {
        id: 1,
        mess: '发布跑腿需求'
      },
    ]
  },

  but: function(){  // 通过but点击事件触发后面的函数
    console.log("你好")
  },
 
 // but: redirectTo({url: 'pages/message'}),
 jumpToOverMissionList:function(){ 
  wx.switchTab({
      url:"../my/index" 
  }); 
},
formSubmit1: function (e) {
 // if (app.globalData.loged&&(!app.globalData.back)){
  if (1){
  if (e.detail.value.mingcheng.length == 0) {
    wx.showModal({
      title: '请填写商品名称~',
      showCancel:false
    })
  }
 else{ if (e.detail.value.jiage.length == 0) {
    wx.showModal({
      title: '请填写出售价格~',
      showCancel:false
    })
  }
  else {if (e.detail.value.phone.length != 11) {
    wx.showModal({
      title: '请填写正确的联系方式~',
      showCancel:false
    })
  }
 else{ 
   //提交数据
       wx.showLoading({
          title: '发布中',
        })
        const promiseArr = []
        //遍历临时的图片数组
        for (let i = 0; i < this.data.length1; i++) {
          let filePath = this.data.imgList[i]
          let suffix = /\.[^\.]+$/.exec(filePath)[0]; // 正则表达式，获取文件扩展名
          //在每次上传的时候，就往promiseArr里存一个promise，只有当所有的都返回结果时，才继续往下执行
          promiseArr.push(new Promise((reslove, reject) => {
            wx.cloud.uploadFile({
              cloudPath: new Date().getTime() + suffix,
              filePath: filePath, // 文件路径
            }).then(res => {
              // get resource ID
              console.log(res.fileID)
              this.setData({
                fileIDs: this.data.fileIDs.concat(res.fileID)
              })
              reslove()
            }).catch(error => {
              console.log(error)
            })
          }))
        }
        Promise.all(promiseArr).then(res => {
          let xianzhi = {}
          xianzhi.name = e.detail.value.mingcheng
          xianzhi.imgFileIDs = this.data.fileIDs
          xianzhi.price = e.detail.value.jiage
          xianzhi.desc = e.detail.miaoshu
          xianzhi.contact_tel = e.detail.value.phone
          xianzhi.contact_wechat = e.detail.value.weixin
          xianzhi.status = 0
          xianzhi.type = this.data.picker1[e.detail.value.type1]
          xianzhi.type_special = this.data.picker2[e.detail.value.type2]
          xianzhiModel.creatXianzhi(xianzhi,this.data.userInfo,res => {
            if (res.result.code == 0) {
              this._showToast('none', '订单创建成功!')
            }
          })
        })    
  }
 }
  }
  }
  else{
    wx.showModal({
      title: '请先登录',
      showCancel:false,
    })
  }
},
//表单重置1
formreset1:function(e){
 this.data.imgList.splice(0, this.data.length1);
  this.setData({
    imgList: [],
    length1: 0,
    index1:0
  })
},
//表单重置2
formreset2: function (e) {
  this.data.imgList1.splice(0, this.data.length2);
  this.setData({
    imgList1: [],
    length2: 0,
    di:0,
  })
},
//提交表单失物
formSubmit2: function (e) {
  /////////////////////////////////////////////
  //if (app.globalData.loged&&(!app.globalData.back)) {
    if (1) {
    if (e.detail.value.mingcheng2.length == 0) {
      wx.showModal({
        title: '请输入跑腿需求~',
        showCancel:false
      })
    }
    else {
      if (e.detail.value.phone2.length != 11) {
        wx.showModal({
          title: '请填写正确的联系方式~',
          showCancel:false
        })
      }
      else {
        if(e.detail.value.type2=='0'){
             bianliang=0;
        }
        if(e.detail.value.type2=='1'){
           bianliang=1;
        }
        //提交数据
        wx.showLoading({
          title: '发布中',
        })
        const promiseArr1= []
        let daiqu = {}
        daiqu.name = e.detail.value.mingcheng2
        daiqu.price = e.detail.value.jiage2
        daiqu.from = this.data.picker[e.detail.value.location_from]
        daiqu.from_desc = e.detail.value.from_desc
        daiqu.to = this.data.picker[e.detail.value.location_to]
        daiqu.to_desc = e.detail.value.to_desc
        let temp_date = {}
        temp_date.year = this.data.time.year
        temp_date.month = this.data.time.month
        temp_date.day = this.data.time.day
        daiqu.date = temp_date
        daiqu.time_to = this.data.time.time_to
        daiqu.desc = e.detail.value.tips
        daiqu.contact_tel = e.detail.value.phone2
        daiqu.contact_wechat = e.detail.value.weixin1
        daiqu.status = 0
        console.log(daiqu)
        daiquModel.createDaiqu(daiqu,this.data.userInfo,res => {
          if (res.result.code == 0) {
            this._showToast('none', '订单创建成功!')
          }
        })
      }
    }
  }
  else {
    wx.showModal({
      title: '请先登录',
      showCancel: 'false'
    })
  }
},
selected: function (e) {
  this.setData({
    selected1: false,
    selected: true
  })
},
selected1: function (e) {
  this.setData({
    selected: false,
    selected1: true
  })
},
textareaAInput(e) {
  this.setData({
    textareaAValue: e.detail.value
  })
},
PickerChange_from(e) {
  console.log(e);
  this.setData({
    index_from: e.detail.value
  })
},
PickerChange_to(e) {
  console.log(e);
  this.setData({
    index_to: e.detail.value
  })
},
PickerChange1(e) {
  console.log(e);
  this.setData({
    index1: e.detail.value
  })
},
PickerChange1_s(e) {
  console.log(e);
  this.setData({
    index2: e.detail.value
  })
},
tabSelect(e) {
  this.setData({
    TabCur: e.currentTarget.dataset.id,
    scrollLeft: (e.currentTarget.dataset.id - 1) * 60
  })
},

//上传图片
ChooseImage() {
  var that=this
  wx.chooseImage({
    count: 5-(that.data.length1),
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success (res) {
      if (that.data.length1 != 0) {
        that.setData({
          imgList: that.data.imgList.concat(res.tempFilePaths),
          length1: that.data.imgList.concat(res.tempFilePaths).length
        })
      } else {
        that.setData({
          imgList: res.tempFilePaths,
          length1: res.tempFilePaths.length
        })

      } 
    }
  });
},
ChooseImage1() {
  var that = this
  wx.chooseImage({
    count: 5 - (that.data.length2),
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success(res) {
      if (that.data.length2 != 0) {
        that.setData({
          imgList1: that.data.imgList1.concat(res.tempFilePaths),
          length2: that.data.imgList1.concat(res.tempFilePaths).length
        })
      } else {
        that.setData({
          imgList1: res.tempFilePaths,
          length2: res.tempFilePaths.length
        })

      }
    }
  });
},
//查看图片
ViewImage(e) {
  wx.previewImage({
    urls: this.data.imgList,
    current: e.currentTarget.dataset.url
  });
},
ViewImage1(e) {
  wx.previewImage({
    urls: this.data.imgList1,
    current: e.currentTarget.dataset.url
  });
},
//删除图片
DelImg(e) {
  wx.showModal({
    title: '提示',
    content: '确定要删除这张照片吗？',
    cancelText: '取消',
    confirmText: '确定',
    success: res => {
      if (res.confirm) {
        this.data.imgList.splice(e.currentTarget.dataset.index, 1);
        this.setData({
          imgList: this.data.imgList,
          length1:this.data.imgList.length
        })
      }
    }
  })
},
DelImg1(e) {
  wx.showModal({
    title: '提示',
    content: '确定要删除这张照片吗？',
    cancelText: '取消',
    confirmText: '确定',
    success: res => {
      if (res.confirm) {
        this.data.imgList1.splice(e.currentTarget.dataset.shiwu, 1);
        this.setData({
          imgList1: this.data.imgList1,
          length2: this.data.imgList1.length
        })
      }
    }
  })
},
_showToast: function (type, msg) {
  wx.showToast({
    icon: type,
    title: msg
  })
},
  //获取时间日期
  bindMultiPickerChange: function(e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
    const index = this.data.multiIndex;
    const year = this.data.multiArray[0][index[0]];
    const month = this.data.multiArray[1][index[1]];
    const day = this.data.multiArray[2][index[2]];
    const hour = this.data.multiArray[3][index[3]];
    const minute = this.data.multiArray[4][index[4]];
    // console.log(`${year}-${month}-${day}-${hour}-${minute}`);
    this.setData({
      time:{
        all: year + '-' + month + '-' + day + ' ' + hour + ':' + minute,
        year: year,
        month: month,
        day: day,
        time_to: hour + ':' + minute,
      }
    })
    // console.log(this.data.time);
  },
  //监听picker的滚动事件
  bindMultiPickerColumnChange: function(e) {
    //获取年份
    if (e.detail.column == 0) {
      let choose_year = this.data.multiArray[e.detail.column][e.detail.value];
      console.log(choose_year);
      this.setData({
        choose_year
      })
    }
    //console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    if (e.detail.column == 1) {
      let num = parseInt(this.data.multiArray[e.detail.column][e.detail.value]);
      let temp = [];
      if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) { //判断31天的月份
        for (let i = 1; i <= 31; i++) {
          if (i < 10) {
            i = "0" + i;
          }
          temp.push("" + i);
        }
        this.setData({
          ['multiArray[2]']: temp
        });
      } else if (num == 4 || num == 6 || num == 9 || num == 11) { //判断30天的月份
        for (let i = 1; i <= 30; i++) {
          if (i < 10) {
            i = "0" + i;
          }
          temp.push("" + i);
        }
        this.setData({
          ['multiArray[2]']: temp
        });
      } else if (num == 2) { //判断2月份天数
        let year = parseInt(this.data.choose_year);
        console.log(year);
        if (((year % 400 == 0) || (year % 100 != 0)) && (year % 4 == 0)) {
          for (let i = 1; i <= 29; i++) {
            if (i < 10) {
              i = "0" + i;
            }
            temp.push("" + i);
          }
          this.setData({
            ['multiArray[2]']: temp
          });
        } else {
          for (let i = 1; i <= 28; i++) {
            if (i < 10) {
              i = "0" + i;
            }
            temp.push("" + i);
          }
          this.setData({
            ['multiArray[2]']: temp
          });
        }
      }
      console.log(this.data.multiArray[2]);
    }
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    this.setData(data);
  },















/**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
     //设置默认的年份
     this.setData({
      choose_year: this.data.multiArray[0][0]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      login:app.globalData.hasLogin
    })
    if (this.data.login&&this.data.userInfo==null) {
      userInfoModel.getUserInfoByOpenId(app.globalData.openid,res => {
        this.setData({
          userInfo:  res.result.data.data[0]
        })
      })    
    }
    let tempIndex = []
    tempIndex.push(""+0)
    tempIndex.push(""+date.getMonth())
    tempIndex.push(""+date.getDay())
    tempIndex.push(""+date.getHours())
    tempIndex.push(""+date.getMinutes())
    this.setData({
      multiIndex:tempIndex
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})