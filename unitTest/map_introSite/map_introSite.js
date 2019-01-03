const app=({
    globalData: {
        introduceSite: [12,2,3,4,5,6,9,16,25,34,23,76,43],
    }
  })


// all markers set 
var markers = [
    {id: 0, longitude: 116.324109, latitude: 40.001637, title: "第一教室楼", scale: 3, }
,
{id: 1, longitude: 116.328669, latitude: 40.001992, title: "蒙民伟音乐厅", scale: 3, },
{id: 2, longitude: 116.331633, latitude: 40.006932, title: "游泳馆", scale: 3, },
{id: 3, longitude: 116.31962, latitude: 40.000968, title: "零零阁", scale: 4, },
{id: 4, longitude: 116.325053, latitude: 40.002233, title: "清华学堂", scale: "2", },
{id: 5, longitude: 116.32817, latitude: 40.004312, title: "人文社科图书馆", scale: 3, },
{id: 6, longitude: 116.324562, latitude: 40.002045, title: "日晷", scale: 2, },
{id: 7, longitude: 116.324428, latitude: 40.003554, title: "大礼堂", scale: 2, },
{id: 8, longitude: 116.326779, latitude: 40.00263, title: "第五教室楼", scale: 3, },
{id: 9, longitude: 116.319572, latitude: 40.001772, title: "晗亭", scale: 4, },
{id: 10, longitude: 116.332495, latitude: 40.001732, title: "主楼", scale: 1, },
{id: 11, longitude: 116.323983, latitude: 40.002313, title: "第二教室楼", scale: 3, },
{id: 12, longitude: 116.331304, latitude: 40.012432, title: "气膜馆", scale: 3, },
{id: 13, longitude: 116.327702, latitude: 40.002492, title: "第四教室楼", scale: 3, },
{id: 14, longitude: 116.321517, latitude: 40.005075, title: "西体育馆", scale: 3, },
{id: 15, longitude: 116.319, latitude: 40.004218, title: "天文台", scale: 4, },
{id: 16, longitude: 116.319, latitude: 40.000236, title: "西湖游泳池", scale: 3, },
{id: 17, longitude: 116.322933, latitude: 40.002969, title: "水木清华", scale: 2, },
{id: 18, longitude: 116.329146, latitude: 40.00181, title: "校史馆", scale: 3, },
{id: 19, longitude: 116.324014, latitude: 40.005845, title: "图书馆北馆（李文正馆）", scale: 3, },
{id: 20, longitude: 116.327099, latitude: 40.005138, title: "西南联大碑", scale: 4, },
{id: 21, longitude: 116.321937, latitude: 40.002559, title: "古月堂", scale: 4, },
{id: 22, longitude: 116.323116, latitude: 40.003745, title: "清华英烈碑", scale: 4, },
{id: 23, longitude: 116.323652, latitude: 40.003641, title: "闻亭", scale: 4, },
{id: 24, longitude: 116.335809, latitude: 40.002033, title: "艺术博物馆", scale: 3, },
{id: 25, longitude: 116.328128, latitude: 40.002773, title: "第三教室楼", scale: 3, },
{id: 26, longitude: 116.3235, latitude: 40.003493, title: "自清亭", scale: 4, },
{id: 27, longitude: 116.324009, latitude: 40.002836, title: "科学馆", scale: 3, },
{id: 28, longitude: 116.319768, latitude: 40.002031, title: "近春园", scale: 4, },
{id: 29, longitude: 116.32439, latitude: 40.000968, title: "二校门", scale: 1, },
{id: 30, longitude: 116.329163, latitude: 40.001546, title: "新清华学堂", scale: 2, },
{id: 31, longitude: 116.323858, latitude: 40.005056, title: "图书馆逸夫馆", scale: 3, },
{id: 32, longitude: 116.333159, latitude: 40.005821, title: "新射击馆", scale: 3, },
{id: 33, longitude: 116.325053, latitude: 40.002233, title: "工字厅", scale: 2, },
{id: 34, longitude: 116.330418, latitude: 40.002564, title: "第六教室楼", scale: 3, },
{id: 35, longitude: 116.332887, latitude: 40.004416, title: "综合体育馆", scale: 3, },
{id: 36, longitude: 116.327906, latitude: 40.007721, title: "图书馆老馆", scale: 3, },
{id: 37, longitude: 116.327906, latitude: 40.007721, title: "16号楼", scale: 5, },
{id: 38, longitude: 116.324312, latitude: 40.006157, title: "3号楼", scale: 5, },
{id: 39, longitude: 116.33001, latitude: 40.004836, title: "9号楼", scale: 5, },
{id: 40, longitude: 116.329265, latitude: 40.00859, title: "33号楼", scale: 5, },
{id: 41, longitude: 116.330824, latitude: 40.011132, title: "紫荆11号楼", scale: 5, },
{id: 42, longitude: 116.328564, latitude: 40.012323, title: "紫荆15号楼", scale: 5, },
{id: 43, longitude: 116.328503, latitude: 40.008144, title: "37号楼", scale: 5, },
{id: 44, longitude: 116.328737, latitude: 40.007214, title: "18号楼", scale: 5, },
{id: 45, longitude: 116.329933, latitude: 40.006382, title: "12号楼", scale: 5, },
{id: 46, longitude: 116.329014, latitude: 40.005295, title: "7号楼", scale: 5, },
{id: 47, longitude: 116.326406, latitude: 40.009583, title: "紫荆1号楼", scale: 5, },
{id: 48, longitude: 116.325084, latitude: 40.009031, title: "27号楼", scale: 5, },
{id: 49, longitude: 116.332734, latitude: 40.011036, title: "紫荆20号楼", scale: 5, },
{id: 50, longitude: 116.326003, latitude: 40.008086, title: "23号楼", scale: 5, },
{id: 51, longitude: 116.327575, latitude: 40.011124, title: "紫荆5号楼", scale: 5, },
{id: 52, longitude: 116.324215, latitude: 40.008906, title: "29号楼", scale: 5, },
{id: 53, longitude: 116.331672, latitude: 40.012003, title: "紫荆18号楼", scale: 5, },
{id: 54, longitude: 116.330127, latitude: 40.006779, title: "30号楼", scale: 5, },
{id: 55, longitude: 116.330647, latitude: 40.011576, title: "紫荆12号楼", scale: 5, },
{id: 56, longitude: 116.327992, latitude: 40.006624, title: "15号楼", scale: 5, },
{id: 57, longitude: 116.329945, latitude: 40.006025, title: "11号楼", scale: 5, },
{id: 58, longitude: 116.325193, latitude: 40.006211, title: "4号楼", scale: 5, },
{id: 59, longitude: 116.329575, latitude: 40.012384, title: "紫荆16号楼", scale: 5, },
{id: 60, longitude: 116.329952, latitude: 40.008582, title: "34号楼", scale: 5, },
{id: 61, longitude: 116.334439, latitude: 40.009525, title: "紫荆23号楼", scale: 5, },
{id: 62, longitude: 116.326133, latitude: 40.009993, title: "紫荆2号楼", scale: 5, },
{id: 63, longitude: 116.32943, latitude: 40.011086, title: "紫荆8号楼", scale: 5, },
{id: 64, longitude: 116.326296, latitude: 40.008459, title: "24号楼", scale: 5, },
{id: 65, longitude: 116.324271, latitude: 40.007882, title: "20号楼", scale: 5, },
{id: 66, longitude: 116.327284, latitude: 40.011599, title: "紫荆6号楼", scale: 5, },
{id: 67, longitude: 116.330406, latitude: 40.011966, title: "紫荆13号楼", scale: 5, },
{id: 68, longitude: 116.32783, latitude: 40.008786, title: "31号楼", scale: 5, },
{id: 69, longitude: 116.332174, latitude: 40.011501, title: "紫荆19号楼", scale: 5, },
{id: 70, longitude: 116.324656, latitude: 40.007501, title: "1号楼", scale: 5, },
{id: 71, longitude: 116.326748, latitude: 40.007187, title: "14号楼", scale: 5, },
{id: 72, longitude: 116.328934, latitude: 40.006356, title: "5号楼", scale: 5, },
{id: 73, longitude: 116.32998, latitude: 40.005339, title: "10号楼", scale: 5, },
{id: 74, longitude: 116.32995, latitude: 40.008178, title: "35号楼", scale: 5, },
{id: 75, longitude: 116.330541, latitude: 40.012416, title: "紫荆17号楼", scale: 5, },
{id: 76, longitude: 116.333833, latitude: 40.010055, title: "紫荆22号楼", scale: 5, },
{id: 77, longitude: 116.326251, latitude: 40.008762, title: "25号楼", scale: 5, },
{id: 78, longitude: 116.329564, latitude: 40.011522, title: "紫荆9号楼", scale: 5, },
{id: 79, longitude: 116.3258, latitude: 40.010363, title: "紫荆3号楼", scale: 5, },
{id: 80, longitude: 116.326667, latitude: 40.011624, title: "紫荆7号楼", scale: 5, },
{id: 81, longitude: 116.324244, latitude: 40.008256, title: "21号楼", scale: 5, },
{id: 82, longitude: 116.329025, latitude: 40.004794, title: "8号楼", scale: 5, },
{id: 83, longitude: 116.324645, latitude: 40.006858, title: "2号楼", scale: 5, },
{id: 84, longitude: 116.328279, latitude: 40.007469, title: "17号楼", scale: 5, },
{id: 85, longitude: 116.329687, latitude: 40.011941, title: "紫荆10号楼", scale: 5, },
{id: 86, longitude: 116.32843, latitude: 40.008683, title: "32号楼", scale: 5, },
{id: 87, longitude: 116.329264, latitude: 40.008165, title: "36号楼", scale: 5, },
{id: 88, longitude: 116.327589, latitude: 40.012283, title: "紫荆14号楼", scale: 5, },
{id: 89, longitude: 116.32896, latitude: 40.005985, title: "6号楼", scale: 5, },
{id: 90, longitude: 116.326582, latitude: 40.007709, title: "13号楼", scale: 5, },
{id: 91, longitude: 116.324683, latitude: 40.007903, title: "19号楼", scale: 5, },
{id: 92, longitude: 116.325918, latitude: 40.00905, title: "26号楼", scale: 5, },
{id: 93, longitude: 116.333311, latitude: 40.010537, title: "紫荆21号楼", scale: 5, },
{id: 94, longitude: 116.325347, latitude: 40.008583, title: "28号楼", scale: 5, },
{id: 95, longitude: 116.32785, latitude: 40.010763, title: "紫荆4号楼", scale: 5, },
{id: 96, longitude: 116.324198, latitude: 40.008615, title: "22号楼", scale: 5, },
];

Page=({
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
    destinationID: -1,
    introductionID: -1,
    markersToShow: [],
  },
  
  introSite: function () {
    var that = this;
    this.data.introductionID = 1;
    if (app.globalData.introduceSite.length == 0){
      
    }
    var tmp = markers.filter(function (item, index, array) {
      if ((app.globalData.introduceSite.indexOf(item.id) > -1) && (Math.random() > 1 - 7.0 / app.globalData.introduceSite.length)) {
        return item.id;
      }
    });
    
    this.data.markersToShow = tmp
    //console.log(that.data.markersToShow);

  },
  
})

module.exports = Page;