// app.js

App({
  onLaunch: function () {
/*const backgroundAudioManager = wx.getBackgroundAudioManager();
backgroundAudioManager.title = '音乐标题';
backgroundAudioManager.src = 'http://10.60.74.48/music/A Veil Of Water - Fall.ogg';
backgroundAudioManager.autoplay = true;

// 继续背景音频播放
backgroundAudioManager.play();*/
  },
  globalData: {
	backgroundAudioManager: wx.getBackgroundAudioManager(),
    userInfo: null,
    finishflag: true,
    ds:2000,
    ts:1,
    zp:0,
    sj4:0,
    preload:false,
    a: {
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7:true,
      8:true,
      9:true,
      10:true
    },
    b: [true,false, true,false],
    jies:['你识破了假新生接待志愿者的骗局','你未识破了假新生接待志愿者的骗局','你参加了非法的刷单活动','你未参加了非法的刷单活动'],
    numa:3,
   
    allImagesLoaded: false,
    playerdata:{
      name:"唐小天",
      cheat:0,
      jifen:0
    },
    eventdata:{
      phone:{
      shuadan:{
        url:"/pages/class12/class12.wxml",
        state:false,
        imgsrc:"cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/weixin.png",
        title:"微信",
        content:"一个通知"
      },
      placeholder1:{
        url:"/pages/phone/placeholder1/placeholder1",
        state:false,
        imgsrc:"https://7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662.tcb.qcloud.la/%E5%9B%BE%E6%A0%87/qq%E5%9B%BE%E6%A0%87.webp?sign=b7365482fb3f83b4e2bb9173316657e3&t=1697337273",
        title:"QQ",
        content:"一个通知"
      },
      placeholder2:{
        url:"/pages/phone/placeholder2/placeholder2",
        state:false,
        imgsrc:"https://7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662.tcb.qcloud.la/%E5%9B%BE%E6%A0%87/%E7%9F%AD%E4%BF%A1.webp?sign=90f33c86fd1d6ef35599bf236ee92372&t=1697337966",
        title:"信息",
        content:"占位"
      },
      placeholder3:{
        url:"/pages/phone/placeholder3/placeholder3",
        state:false,
        imgsrc:"cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/weixin.png",
        title:"占位",
        content:"占位"
      },
      placeholder4:{
        url:"/pages/phone/placeholder3/placeholder3",
        state:false,
        imgsrc:"cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/weixin.png",
        title:"占位",
        content:"占位"
      },
    },
    map:{
      youyongguan: { // 游泳馆
        name:"游泳馆",
        state: false,
        next: {
          "启真楼": "/pages/map/qixianglou/qixianglou",
          "星操": "/pages/map/xingcao/xingcao"
        },
        npc:"快递员"
      },
      qizhenlou: { // 启真楼
        name:"启真楼",
        state: false,
        next: {
          "图书馆": "/pages/map/tushuguan/tushuguan",
          "大飞机": "/pages/map/dafeiji/dafeiji"
        },
        npc:"快递员"
      },
      tushuguan: { // 图书馆
        name:"图书馆",
        state: false,
        next: {
          "东门": "/pages/map/dongmen/dongmen",
          "启真湖": "/pages/map/qizhenhu/qizhenhu"
        },
        npc:"快递员"
      },
      qizhenhu: { // 启真湖
        name:"启真湖",
        state: false,
        next: {
          "大飞机": "/pages/map/dafeiji/dafeiji",
          "图书馆": "/pages/map/tushuguan/tushuguan",
          "翱翔学生中心": "/pages/map/aoxiangxueshengzhongxin/aoxiangxueshengzhongxin"
        },
        npc:"快递员"
      },
      aoxiangxueshengzhongxin: { // 翱翔学生中心
        name:"翱翔学生中心",
        state: false,
        next: {
          "云餐": "/pages/map/yuncanting/yuncanting",
          "数字化大楼": "/pages/map/shuzihuadalou/shuzihuadalou",
          "大飞机": "/pages/map/dafeiji/dafeiji"
        },
        npc:"快递员"
      },
      shuzihuadalou: { // 数字化大楼
        name:" 数字化大楼",
        state: false,
        next: {
          "星操": "/pages/map/xingcao/xingcao",
          "翱翔学生中心": "/pages/map/aoxiangxueshengzhongxin/aoxiangxueshengzhongxin"
        },
        npc:"快递员"
      },
      yuncanting: { // 云餐
        name:"云餐",
        state: false,
        next: {
          "翱翔学生中心": "/pages/map/aoxiangxueshengzhongxin/aoxiangxueshengzhongxin",
          "快递点": "/pages/map/kuaididian/kuaididian"
        },
        npc:"快递员"
      },
      kuaididian: { // 快递
        name:" 快递点",
        state: false,
        next: {
          "小东门": "/pages/map/xiaodongmen/xiaodongmen",
          "图书馆": "/pages/map/tushuguan/tushuguan",
          "云餐厅":"/pages/map/yuncanting/yuncanting"
        },
        npc:"快递员"
      },
      xiaodongmen: { // 小东门
        name:"小东门",
        state: false,
        next: {
          "校医院": "/pages/map/xiaoyiyuan/xiaoyiyuan",
          "东门": "/pages/map/dongmen/dongmen",
          "快递点":"/pages/map/kuaididian/kuaididian"
        },
        npc:"快递员"
      },
      xiaoyiyuan: { // 校医院
        name:"校医院",
        state: false,
        next: {
          "小东门": "/pages/map/xiaodongmen/xiaodongmen",
          "东门": "/pages/map/dongmen/dongmen"
        },
        npc:"快递员"
      },
      xingcao: {
        name:"星操",
        state: false,
        next: {
          "大飞机": "/pages/map/dafeiji/dafeiji",
          "游泳馆": "/pages/map/youyongguan/youyongguan"
        },
        npc:"快递员"
      },
      dafeiji: {
        name:"大飞机",
        state: false,
        next: {
          "启真湖": "/pages/map/qizhenhu/qizhenhu",
          "启真楼": "/pages/map/qixianglou/qixianglou",
          "星操": "/pages/map/xingcao/xingcao",
          "翱翔学生中心": "/pages/map/aoxiangxueshengzhongxin/aoxiangxueshengzhongxin"
        },
        npc:"快递员"
      },
      dongmen:{
        name:"东门",
        state: false,
        next: {
          "校医院": "/pages/map/xiaoyiyuan/xiaoyiyuan",
          "小东门": "/pages/map/xiaodongmen/xiaodongmen",
          "图书馆":"/pages/map/tushuguan/tushuguan"
        },
        npc:"快递员"
      }
    }
    

    },
    npc:{
      "快递员":{
        title:"去也快递点的员工",
        content:"同学有什么可以帮忙的吗？",
        url:"/pages/event/youdiyuan/youdiyuan",
        src0:"https://7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662.tcb.qcloud.la/kuaidiyuan1.png?sign=bf17fdbdf046fa2a2f27b3ec6fe31cc9&t=1697202895",
        src1:"https://7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662.tcb.qcloud.la/kuaidiyuan.png?sign=940d67df7a9e8a8af4e64d1e44912ac8&t=1697198071",
      },
    }
  },
})
