// miniprogram/pages/question/question.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    questions: ['您是第一次来清华吗？',
    '您打算在清华里面吃饭吗？',
    '您打算在清华参观文艺场所吗？',
    '您打算在清华进行体育活动吗？',
    '您是否希望参观教学场所？']
  },

  /**
   * 表单数据提交的处理
   */
  formSubmit(e) {
    let answer = e.detail.value;
    let isFull = true;
    for (let i = 0; i < 5; i++) {
      if (answer[i].length == 0) {
        isFull = false;
        break;
      }
    }

    if (isFull) {
      app.globalData.answer = answer;
      wx.navigateTo({
        url: '../map/map',
      })
    } else {
      wx.showToast({
        title: '请完整填写表单！',
        duration: 1000,
        icon: 'none'
      })
    }
  }
})