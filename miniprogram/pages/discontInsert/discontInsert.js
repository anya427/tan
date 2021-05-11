// pages/chooseWay/discontInsert.js
Page({
  data: {
    lists:[{},{}],
  },
  addList: function(){
    var  lists = this.data.lists;
    var newData = {};
    lists.push(newData);//实质是添加lists数组内容，使for循环多一次
    this.setData({
      lists: lists,
    })  
  },
  delList: function () {
    var lists = this.data.lists;
    lists.pop();      //实质是删除lists数组内容，使for循环少一次
    this.setData({
      lists: lists,
    })
  },  
}) 