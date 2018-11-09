// pages/map/map.js
var app = getApp()
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js')
var qqmapsdk
var markers = []
//user position
var user = []
// markers to show
var markersToShow = []
// all markers set 
var markers =  []
//state of navigate
var navigating = 0
//initial destinationId
var destinationId = -1
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //set mapHeight
    mapHeight: 70,
    //set scrollHeight
    scrollHeight: 27,
    //set toView
    toView: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    markers.push({ //40.003348,116.326192
      iconPath: "/picture/icon_teaching.png",
      id: 9999999,
      latitude: 40.003348,
      longitude: 116.326192,
      title: '清华大学',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //39.999915,116.315222
      iconPath: "/picture/icon_gateway.png",
      id: 1,
      latitude: 39.999915,
      longitude: 116.315222,
      title: '清华西门',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //40.000958,116.324433
      iconPath: "/picture/icon_scene.png",
      id: 2,
      latitude: 40.000958,
      longitude: 116.324433,
      title: '清华二校门',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //40.001402,116.329143
      iconPath: "/picture/icon_museum.png",
      id: 201,
      latitude: 40.001402,
      longitude: 116.329143,
      title: '新清华学堂',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //40.001682,116.332592
      iconPath: "/picture/icon_teaching.png",
      id: 3,
      latitude: 40.001682,
      longitude: 116.332592,
      title: '中央主楼',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //40.006629,116.331782
      iconPath: "/picture/icon_gateway.png",
      id: 601,
      latitude: 40.006629,
      longitude: 116.331782,
      title: '东操入口',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //40.005840,116.332287
      iconPath: "/picture/icon_sports.png",
      id: 401,
      latitude: 40.005840,
      longitude: 116.332287,
      title: '东大操场',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //40.009990,116.329540
      iconPath: "/picture/icon_sports.png",
      id: 402,
      latitude: 40.009990,
      longitude: 116.329540,
      title: '紫荆操场',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //40.009789,116.326638
      iconPath: "/picture/icon_dormitory.png",
      id: 301,
      latitude: 40.009789,
      longitude: 116.326638,
      title: '紫荆公寓一号楼',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //40.009591,116.325651
      iconPath: "/picture/icon_dormitory.png",
      id: 602,
      latitude: 40.009591,
      longitude: 116.325651,
      title: '紫荆公寓一号楼一单元',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //40.009604,116.325962
      iconPath: "/picture/icon_dormitory.png",
      id: 603,
      latitude: 40.009604,
      longitude: 116.325962,
      title: '紫荆公寓一号楼二单元',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //40.009620,116.326391
      iconPath: "/picture/icon_dormitory.png",
      id: 604,
      latitude: 40.009620,
      longitude: 116.326391,
      title: '紫荆公寓一号楼三单元',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //40.009657,116.326654
      iconPath: "/picture/icon_dormitory.png",
      id: 605,
      latitude: 40.009657,
      longitude: 116.326654,
      title: '紫荆一号楼四单元',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //40.009809,116.326810
      iconPath: "/picture/icon_dormitory.png",
      id: 606,
      latitude: 40.009809,
      longitude: 116.326810,
      title: '紫荆公寓一号楼五单元',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //40.010019,116.327040
      iconPath: "/picture/icon_dormitory.png",
      id: 607,
      latitude: 40.010019,
      longitude: 116.327040,
      title: '紫荆公寓一号楼六单元',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //40.003021,116.322856
      iconPath: "/picture/icon_scene.png",
      id: 501,
      latitude: 40.003021,
      longitude: 116.322856,
      title: '水木清华',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //40.002294,116.325055
      iconPath: "/picture/icon_teaching.png",
      id: 502,
      latitude: 40.002294,
      longitude: 116.325055,
      title: '清华学堂',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"

    }, { //39.996643,116.332769
      iconPath: "/picture/icon_gateway.png",
      id: 4,
      latitude: 39.996643,
      longitude: 116.332769,
      title: '清华东南门',
      width: 40,
      height: 50,
      imageUrl: "http://s8.sinaimg.cn/middle/59710852t7a495303d677&690"
    }),



    //实例化API
    qqmapsdk = new QQMapWX({
      key: 'AT7BZ-UHBW2-7TYUQ-C2JGU-YDKVE-IWBA5'
    });
    var that = this;

    // 获取定位，并把设为map中心位置
    app.getLocationInfo(function(locationInfo) {
      that.setData({
        longitude: locationInfo.longitude,
        latitude: locationInfo.latitude,
      })
    })

    //set the width and height
    // 动态设置map的宽和高
    wx.getSystemInfo({
        success: function(res) {
          // console.log('getSystemInfo');
          // console.log(res.windowWidth);
          that.setData({
            map_width: res.windowWidth,
            map_height: res.windowHeight,

          })
        }
      }),
      //定时器函数
      that.timing();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //使用wx.createMapContext 获取map上下文
    this.mapCtx = wx.createMapContext('myMap')
    var that = this;
    var thatScale = 0;
    //初始化markerToShow
    that.mapCtx.getScale({
      success: function(res) {
        console.log(res.scale);
        //在这里计算显示哪些markers（或者再查询一下scale，再决定显示哪些markers）
        thatScale = res.scale;
        //define： scale < 12   choose school  
        //define: scale = n >= 12  markers_id < (n-11)*10
        if (thatScale < 12) {
          var tmp = markers.filter(function(item, index, array) {
            return item.id > 1000; // 取得满足id条件的
          });
          markersToShow = tmp;
        } else {
          var tmp = markers.filter(function(item, index, array) {
            return item.id < (thatScale - 11) * 100; // 取得满足id条件的
          });
          console.log(tmp);
          markersToShow = tmp;
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //navigate to Page search
  search: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  //navigate to details
  goToDetails: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../details/details'
    })
  },
  //find Self-location
  selfLocation: function () {
    this.mapCtx.moveToLocation();
  },
  //button tab change to item clicked
  click: function (e) {
    console.log(e)
    this.setData({
      toView: 'm' + e.markerId,
    })
  },
  //change the size of button tab
  ctrlScroll: function (e) {
    if (this.data.mapHeight == 70) {
      this.setData({
        mapHeight: 97,
        scrollHeight: 0,
      })
    } else {
      this.setData({
        mapHeight: 70,
        scrollHeight: 27,
      })
    }
  },


  navigateToHere: function(e) {
    var that = this
    destinationId = e.currentTarget.id
    console.log(e.currentTarget.id)
    console.log("markers", markers)
    //获得这个地点的Array值
    var des = markers.find(function(elem) {
      return elem.id == e.currentTarget.id;
    });
    var self = user.find(function(elem) {
      return elem.id == 0;
    });
    console.log("des", des);
    wx.showActionSheet({
      itemList: ["导航"],
      success: function(res) {
        //console.log(res.tapIndex)
        var opt = {
          //WebService请求地址，from为起点坐标，to为终点坐标，开发key为必填
          url: 'https://apis.map.qq.com/ws/direction/v1/walking/?from=' + self.latitude + ',' + self.longitude + '&to=' + des.latitude + ',' + des.longitude + '&key=AT7BZ-UHBW2-7TYUQ-C2JGU-YDKVE-IWBA5',
          method: 'GET',
          dataType: 'json',
          //请求成功回调
          success: function(res) {
            //设置导航状态为1
            navigating = 1;
            //===============
            console.log("success", navigating)
            var ret = res.data
            if (ret.status != 0) return; //服务异常处理
            var coors = ret.result.routes[0].polyline,
              pl = [];
            //坐标解压（返回的点串坐标，通过前向差分进行压缩）
            var kr = 1000000;
            for (var i = 2; i < coors.length; i++) {
              coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
            }
            //将解压后的坐标放入点串数组pl中
            for (var i = 0; i < coors.length; i += 2) {
              pl.push({
                latitude: coors[i],
                longitude: coors[i + 1]
              })
            }
            //设置polyline属性，将路线显示出来
            that.setData({
              polyline: [{
                points: pl,
                color: '#FF0000DD',
                width: 2
              }]
            })
          }
        };
        wx.request(opt);
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  },
  quitNavigate: function() {
    var that = this
    var thatScale = 0
    that.setData({
      polyline: []
    })
    navigating = 0
    console.log("navigating", navigating)
    that.mapCtx.getScale({
      success: function(res) {
        console.log(res.scale);
        //在这里计算显示哪些markers（或者再查询一下scale，再决定显示哪些markers）
        thatScale = res.scale;
        //define： scale < 12   choose school  
        //define: scale = n >= 12  markers_id < (n-11)*10
        if (thatScale < 12) {
          var tmp = markers.filter(function(item, index, array) {
            return item.id > 1000; // 取得满足id条件的
          });
          markersToShow = tmp;
        } else {
          var tmp = markers.filter(function(item, index, array) {
            return item.id < (thatScale - 11) * 100; // 取得满足id条件的
          });
          console.log(tmp);
          markersToShow = tmp;
        }

      }
    })
  },
  timing: function() {
    var that = this
    var time = setInterval(
      function() {
        //如果是导航状态那么只显示身边周围的景点
        if (navigating == 1) {
          //自身位置
          var self = user.find(function(elem) {
            return elem.id == 0;
          });
          //身边东西的位置
          var tmp = markers.filter(function(item, index, array) {
            return (Math.abs(item.latitude - self.latitude + item.longitude - self.longitude) < 0.0002); // 取得满足id条件的
          });
          var des = markers.find(function(elem) {
            return elem.id == destinationId;
          });
          tmp.push(des);
          console.log("user", user)
          console.log("des", des)
          console.log("tmp", tmp);
          markersToShow = tmp;
        }
        //刷新用户位置并显示markers
        app.getLocationInfo(function(locationInfo) {
          //console.log('map', locationInfo);
          user = [];
          user.push({
            id: 0,
            iconPath: "/picture/icon_location.png",
            longitude: locationInfo.longitude,
            latitude: locationInfo.latitude,
            width: 50,
            height: 50
          });
          console.log("user", user)
          //markersToShow = markersToShow.concat(user)
          that.setData({
            markersToShow: markersToShow
          })
        })
      }, 2000
    )
  },
  regionChange(e) { // either movement or zoom-in/out
    var that = this;
    var thatScale = 0;
    //console.log(e);
    if (e.type == "end" && navigating == 0) {
      markersToShow = [];
      that.mapCtx.getScale({
        success: function(res) {
          console.log(res.scale);
          //在这里计算显示哪些markers（或者再查询一下scale，再决定显示哪些markers）
          thatScale = res.scale;
          //define： scale < 12   choose school  
          //define: scale = n >= 12  markers_id < (n-11)*10
          if (thatScale < 12) {
            var tmp = markers.filter(function(item, index, array) {
              return item.id > 1000; // 取得满足id条件的
            });
            markersToShow = tmp;
          } else {
            var tmp = markers.filter(function(item, index, array) {
              return item.id < (thatScale - 11) * 100; // 取得满足id条件的
            });
            console.log(tmp);
            markersToShow = tmp;
          }

        }
      })
    }
  }

})