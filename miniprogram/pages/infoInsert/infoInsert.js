// pages/chooseWay/infoInsert.js
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    lists:[{},{}],
  },
  onLoad: function () {

  },

  /**
   * 显示删除按钮
   */
  showDeleteButton: function (e) {
    let productIndex = e.currentTarget.dataset.productindex
    this.setXmove(productIndex, -65)
  },

  /**
   * 隐藏删除按钮
   */
  hideDeleteButton: function (e) {
    let productIndex = e.currentTarget.dataset.productindex

    this.setXmove(productIndex, 0)
  },

  /**
   * 设置movable-view位移
   */
  setXmove: function (productIndex, xmove) {
    let productList = this.data.productList
    productList[productIndex].xmove = xmove

    this.setData({
      productList: productList
    })
  },

  /**
   * 处理movable-view移动事件
   */
  handleMovableChange: function (e) {
    if (e.detail.source === 'friction') {
      if (e.detail.x < -30) {
        this.showDeleteButton(e)
      } else {
        this.hideDeleteButton(e)
      }
    } else if (e.detail.source === 'out-of-bounds' && e.detail.x === 0) {
      this.hideDeleteButton(e)
    }
  },
  //增加输入框
  addList: function(){
    var  lists = this.data.lists;
    var newData = {};
    lists.push(newData);//实质是添加lists数组内容，使for循环多一次
    this.setData({
      lists: lists,
    })  
  },
  //删除输入框
  delList: function () {
    var lists = this.data.lists;
    lists.pop();      //实质是删除lists数组内容，使for循环少一次
    this.setData({
      lists: lists,
    })
  },  
}) 