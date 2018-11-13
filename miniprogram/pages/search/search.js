// pages/search/search.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bindKeyInput: null,
    result: []
  },
  bindKeyInput: function (e) {
    console.log(e);
    this.search(e.detail.value)
    this.data.bindKeyInput = e.detail.value;
    console.log(this.data.bindKeyInput);
  },
  search: function (key) {
    var site = app.globalData.site;
    var arr = [];
    for (let i in site) {
      if (site[i].name.indexOf(key) >= 0) {
        arr.push(site[i])
      }
    }
    this.setData({
      result: arr
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var result = [];
    this.setData({
      result:result
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

  },
  jumpDetails: function (e) {
    console.log(e.currentTarget.id);
    wx.navigateTo({
      url: '../details/details?index=' + e.currentTarget.id,
    })
  },
  jumpMap: function (e) {
    wx.navigateTo({
      url: '../map/map?id=' + e.currentTarget.id,
    })
  }
})