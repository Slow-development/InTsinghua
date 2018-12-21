// miniprogram/pages/question/question.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  
  data: {
    building: [
      [3, 4, 6, 7, 9, 15, 17, 20, 26, 21, 29, 33],
      [2],
      [24, 7, 1],
      [12, 14, 35],
      [0, 8, 11, 13, 25, 34, 5, 19, 31]
    ],
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
    let tmpIndex = [];
    for (let i = 0; i < 5; i++) {
      if (answer[i].length == 0) {
        isFull = false;
        break;
      }
    };

    if (isFull) {
      app.globalData.answer = answer;
      console.log(answer);
      for (let i = 0; i < 5; i++) {
        if (answer[i] == "yes") {
          tmpIndex = tmpIndex.concat(this.data.building[i]);
        }
      }
      console.log(tmpIndex);
      //除去重复的景点index
      tmpIndex.sort();
      app.globalData.introduceSite = [tmpIndex[0]];
      for (var i = 1; i < tmpIndex.length; i++) {
        if (tmpIndex[i] != app.globalData.introduceSite[app.globalData.introduceSite.length - 1]) {
          app.globalData.introduceSite.push(tmpIndex[i]);
        }
      }
      wx.navigateTo({
        url: '../map/map?intro=' + 1,
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