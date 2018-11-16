// pages/map/map.js
const app = getApp()
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js')
var qqmapsdk
var markers = []
//user position
var user = []
// markers to show
var markersToShow = []
// all markers set 
var markers = []
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
    toView: '',
    //cloud imgUrl
    imgSmallUrl: "",
    scale: 16,
    //state of navigate
    navigating: 0,
    // the timer that is running, a function
    timer: "",
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e) {
    if (e.id) {
      destinationId = parseInt(e.id)
    } else {
      destinationId = -1
    }
    //console.log("DEST ", destinationId, e)
    var that = this;
    //利用云函数初始化markers
    that.markersInit()
    that.setData({
      scale: 16,
      navigating: 0,
    })
    console.log(markersToShow);
    console.log("scale",this.data.scale)
    //实例化API
    qqmapsdk = new QQMapWX({
      key: 'AT7BZ-UHBW2-7TYUQ-C2JGU-YDKVE-IWBA5'
    });

    // 获取定位，并把设为map中心位置
    app.getLocationInfo(function(locationInfo) {
      that.setData({
        longitude: locationInfo.longitude,
        latitude: locationInfo.latitude,
      })
    });
    if (that.data.navigating == 0 && destinationId != -1) {
      //设置导航状态为1
      this.setData({
        navigating: 1,
      })
      that.navigateBase(destinationId)
    }
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
    });

    //定时器函数
    that.startTiming();
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
        //console.log(res.scale);
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
          //console.log(tmp);
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
    var that = this;
    // that.quitNavigate();
    clearInterval(that.data.timer);
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
  search: function() {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  //navigate to details
  goToDetails: function(e) {
    console.log(e)
    wx.navigateTo({
      url: '../details/details?index='+e.currentTarget.id
    })
  },
  //find Self-location
  selfLocation: function() {
    this.mapCtx.moveToLocation();
  },
  //button tab change to item clicked
  click: function(e) {
    //console.log(e)
    this.setData({
      toView: 'm' + e.markerId,
    })
  },

  //change the size of button tab
  ctrlScroll: function(e) {
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

  markersInit: function() {
    app.globalData.site.forEach(function(item, index) {
      wx.cloud.downloadFile({
        fileID: item.img_small_id,
        success: res => {
          // get temp file path
          //console.log(res.tempFilePath)
          markers[index].imageUrl = res.tempFilePath
        },
        fail: err => {
          // handle error
        }
      });
      markers[index] = {
        id: item.index,
        longitude: item.location.longitude,
        latitude: item.location.latitude,
        title: item.name,
        iconPath: "/picture/icon_scene.png",
        height: 50,
        width: 40
      }
    })
  },

  calculateScale: function(deltaX, deltaY) {
    // find the suitable scale value for a given region
    var delta = 0;
    if (deltaX > deltaY)
      delta = deltaX;
    else
      delta = deltaY;
    var scale = 16;
    if (delta > 0.2)
      scale = 12;
    else if (delta > 0.1)
      scale = 13;
    else if (delta > 0.04)
      scale = 14;
    else if (delta > 0.02)
      scale = 15;
    else if (delta > 0.01)
      scale = 16;
    else if (delta > 0.005)
      scale = 17;
    else
      scale = 18;
    return scale;
  },

  navigateBase: function(id) {
    var that = this
    var des = markers.find(function(elem) {
      return elem.id == id;
    });
    var longitude = 0;
    var latitude = 0
    app.getLocationInfo(function (locationInfo) {
      //console.log('map', locationInfo);
      longitude = locationInfo.longitude;
      latitude = locationInfo.latitude;
    })
    console.log(latitude, longitude)
    //console.log("des", des);
    wx.showActionSheet({
      itemList: ["导航"],
      success: function(res) {
        //设置导航状态为1
        that.setData({
          navigating: 1,
        });
        //console.log(res.tapIndex)
        var opt = {
          //WebService请求地址，from为起点坐标，to为终点坐标，开发key为必填
          url: 'https://apis.map.qq.com/ws/direction/v1/walking/?from=' + latitude + ',' + longitude + '&to=' + des.latitude + ',' + des.longitude + '&key=AT7BZ-UHBW2-7TYUQ-C2JGU-YDKVE-IWBA5',
          method: 'GET',
          dataType: 'json',
          //请求成功回调
          success: function(res) {
            //===============
            console.log("success", that.data.navigating);
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
            var minX = 180.0,
              minY = 90.0,
              maxX = -180.0,
              maxY = -90.0;
            for (var i = 0; i < coors.length; i += 2) {
              pl.push({
                latitude: coors[i],
                longitude: coors[i + 1]
              })
              var latitude = Number(coors[i]);
              var longitude = Number(coors[i + 1]);
              // find four corners of navigationg route
              if (latitude < minY)
                minY = latitude;
              if (latitude > maxY)
                maxY = latitude;
              if (longitude < minX)
                minX = longitude;
              if (longitude > maxX)
                maxX = longitude;
            }
            var recenterX = (minX + maxX) / 2.0;
            var recenterY = (minY + maxY) / 2.0;
            var recenterScale = that.calculateScale(maxX - minX, maxY - minY);

            //设置polyline属性，将路线显示出来
            that.setData({
              polyline: [{
                points: pl,
                color: "#0091ff",
                width: 6
              }],
              longitude: recenterX,
              latitude: recenterY,
              scale: recenterScale, //recenterScale,
            })
          }
        };
        wx.request(opt);
      },
      fail: function(res) {
        //console.log(res.errMsg)
      }
    })
    console.log("navigating at Base:fun last",that.data.navigating)
  },
  navigateToHere: function(e) {
    var that = this;
    destinationId = e.currentTarget.id
    //console.log(e.currentTarget.id)
    //console.log("markers", markers)
    that.navigateBase(destinationId)
  },

  quitNavigate: function() {
    var that = this;
    var thatScale = 0;
    destinationId = -1;
    that.setData({
      polyline: [],
      navigating: 0,
    })
    //console.log("navigating", navigating)
    that.mapCtx.getScale({
      success: function(res) {
        //console.log(res.scale);
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
          //console.log(tmp);
          markersToShow = tmp;
        }

      }
    })
  },

  startTiming: function() {
    var that = this;
    // clear pre-existent timer!
    clearInterval(that.data.timer);
    var timer = setInterval(that.updateUserLocation, 2000);
    that.setData({
      timer: timer,
    });
  },

  updateUserLocation: function() {
    var that = this;
    console.log("FUCK!");
    // refresh user location, show nearby markers
    app.getLocationInfo(function (locationInfo) {
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
      //console.log("user", user)
      //markersToShow = markersToShow.concat(user)
      that.setData({
        markersToShow: markersToShow
      })
    })
    //如果是导航状态那么只显示身边周围的景点
    if (that.data.navigating == 1) {
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
      //console.log("user", user)
      //console.log("des", des)
      //console.log("tmp", tmp);
      markersToShow = tmp;
    }
  },

  regionChange(e) { // either movement or zoom-in/out
    var that = this;
    var thatScale = 0;
    //console.log(e);
    if (e.type == "end" && that.data.navigating == 0) {
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
            //console.log(tmp);
            markersToShow = tmp;
          }

        }
      })
    }
  }

})