// pages/main/main.wxml.js
const app = getApp();
const imageUrls = [
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/0.gif",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/1.gif",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/1.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/1j.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/1t.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/2.gif",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/2.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/3.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/4.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/b1.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/bbj.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/bg.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/bg2.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/bgt.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/bgt30.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/bgt50.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/bg中间.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/cd1.jpg",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/ct.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/ct1.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/ct2.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/ct3.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/g.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/ground.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/j1.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/jiesuan.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/js2.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/ltbj.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/ltbj56.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/me.jpg",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/r1.jpg",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/r2.jpg",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/r3.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/r4.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/r5.jpg",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/r6.jpg",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/r7.jpg",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/xy.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/xy1.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/xy2.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/xy3.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/you.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/you2.png",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/主界面效果图.jpg",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/微信图片_20230625131648.jpg",
  "cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/重启.png"
];

Page({
  data: {
	  animation:"",
    value1: 10,
    weiwan:false,
    value2: 100,
    value3: 1000,
    showModal: false,
    rollflag:false,
    isShowPhone:false,

    // showModal: true,
    buttonArray: [

      // {name: '志愿者招募', url: '../class2/class2.wxml',disabled: false,num:1},
      // {name: '快递', url: '../class4/class4.wxml',disabled: false,num:2},
      // {name: '客服电话', url: '../class5/class5.wxml',disabled: false,num:3},
      // {name: '校园传单', url: '../class7/class7.wxml',disabled: false,num:4},
      // {name: '传单发送', url: '../class8/class8.wxml',disabled: false,num:5},
      // {name: '休息日', url: '../bird/bird',disabled: false,num:6},
      // {name: '刷单', url: '../class12/class12.wxml',disabled: false,num:7},
      {name: '刷单', url: '../class13/class12.wxml',disabled: false,num:8},

    ],

    displayButtons: [],
    displayimage:[],
    showend:false,
    ts:1,
    ds:3000,
    preload:false,
  },
  onLoad: function() {
    // 页面加载时，从全局变量中获取 ts 的值并保存到 data 中
    // if(app.globalData.allImagesLoaded==false) this.preloadImages(),
    // this.myconsole(),
    this.setData({
      ts: app.globalData.ts,
      ds: app.globalData.ds,
      // preload:app.globalData.allImagesLoaded
    });
    // 下载音乐文件
wx.downloadFile({
  url: 'https://7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662.tcb.qcloud.la/%E5%AD%A6%E6%A0%A1/A%20Veil%20Of%20Water%20-%20Fall.ogg?sign=7d846aff595960bbd9bd2ace38302963&t=1697260180',
  success: function (res) {
    if (res.statusCode === 200) {
      // 下载成功，将音乐文件保存到本地存储
      wx.saveFile({
        tempFilePath: res.tempFilePath,
        success: function (savedRes) {
          // 获取音乐文件的本地路径
          var savedFilePath = savedRes.savedFilePath;
          // 将文件路径保存在缓存中，以便以后使用
          wx.setStorage({
            key: 'musicFilePath',
            data: savedFilePath
          });
        }
      });
    }
  }
});

    

  },

//   preloadImages: function() {
//     imageUrls.forEach(url => {
//         wx.getImageInfo({
//             src: url,
//             success: function(res) {
//                 console.log('预加载图片成功', res.path);
//             },
//             fail: function(err) {
//                 console.error('预加载图片失败', err);
//             }
//         });
//     });
//     this.setData({
//       preload:true
//     });
// },
myconsole:function(){
  console.log(app.globalData.allImagesLoaded)
},
preloadImage: function(url) {
  return new Promise((resolve, reject) => {
      wx.getImageInfo({
          src: url,
          success: (res) => {
              console.log('预加载图片成功', res.path);
              resolve(res);
          },
          fail: (err) => {
              console.error('预加载图片失败', err);
              reject(err);
          }
      });
  });
},

preloadImages: function() {
  const preloadPromises = imageUrls.map(this.preloadImage);
  Promise.all(preloadPromises).then(() => {
    app.globalData.allImagesLoaded=true
    console(app.globalData.allImagesLoaded)
      this.setData({ preload: true });
  }).catch((err) => {
      console.error('有图片加载失败', err);
      this.setData({ preload: true });
      app.globalData.allImagesLoaded=true
      console(app.globalData.allImagesLoaded)
  });
},

incrementValues: function() {
    this.setData({
      value1: this.data.value1 + 1,
      value2: this.data.value2 + 100,
      value3: this.data.value3 + 100
    });
  },

  // toggleModal: function() {
  //   this.setData({
  //     showModal: !this.data.showModal
  //   });
  toggleModal: function() {
    var array = [...this.data.buttonArray];
    // var array2= [...this.data.imagearray];
    var display = [];
    var display2 = [];
    var ifrollflag = this.data.rollflag;
    var finflag=app.globalData.finishflag;
    var numbutton=3;
    var gnum=app.globalData.numa

    if(finflag==true){
      var newButtonArray = this.data.buttonArray.map(button => {
        button.disabled = false;
        return button;
      });
      app.globalData.finishflag = false;
    }
    if(gnum==0)
    {
      this.setData({
        showend:true
      });
    }
    if(ifrollflag==false)
    {
      ifrollflag=true;
      if(gnum<3)
      {
        numbutton=gnum
      }
      console.log('numbutton:',numbutton)
      for (var i = 0; i < numbutton; i++) 
      {
        var index = Math.floor(Math.random() * array.length);
        while (app.globalData.a[array[index].num] == false || index==2&&app.globalData.a[2] == true) {
          index = Math.floor(Math.random() * array.length);//重新随机一个 index
        }
        display.push(array[index]);
        array.splice(index, 1);
      }
      for (var i = 1; i <= 6; i++) 
      {
        console.log("a[" + i + "] = " + app.globalData.a[i]);
      }
    }
    else
    {
      display = this.data.displayButtons;
      display2 = this.data.displayimage;
    }

    this.setData({
      showModal: !this.data.showModal,
      displayButtons: display,
      displayimage: display2,
      rollflag:ifrollflag
    });
  },
  shuoming:function(e){
	var that = this;
	  this.setData({
		  animation:"shuoming"
	  })
	  setTimeout(function() {
		that.setData({
		  animation: ''
		})
		wx.redirectTo({
			url: '/pages/shuom/shuom'
		  });
	  }, 500)
  },
  kaishi:function(event){
	var that = this;
	that.setData({
		animation:"kaishi"
	})
	setTimeout(function() {
		that.setData({
		  animation: ''
		})
		wx.redirectTo({
			url: '/pages/map/dafeiji/dafeiji'
		  });
	  }, 300)
  },
  navigateTo: function(event) {
    const url = event.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    });
      // 获取被点击的按钮的索引
    const index = event.currentTarget.dataset.index;
    
    // 将除了被点击的按钮之外的所有按钮的 disabled 属性设置为 true
    var newButtonArray = this.data.buttonArray.map((button, i) => {
      if (i+1 != index) {
        button.disabled = true;
      }
      return button;
    });
    //从池中删除事件
    app.globalData.a[index] = false;
    app.globalData.numa=app.globalData.numa-1;
    console.log('app.globalData.numa:',app.globalData.numa)
    console.log('index',index)
    for (var i = 1; i <= 6; i++) {
      console.log("赋值后：a[" + i + "] = " + app.globalData.a[i]);
    }

    this.setData({
      buttonArray: newButtonArray
    });
  },
  toggleModal2:function() {
    this.setData({
        weiwan:true,
    });
  },
  toggleModal3:function() {
    this.setData({
        weiwan:false,
    });
    //this.nextDialogue();
  },
  navigateTo2: function(event) {
    const url = event.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    });
      // 获取被点击的按钮的索引
    const index = event.currentTarget.dataset.index;
    
    // 将除了被点击的按钮之外的所有按钮的 disabled 属性设置为 true
    var newimagearray = this.data.imagearray.map((image, i) => {
      if (i+1 != index) {
        image.disabled = true;
      }
      return image;
    });
    this.setData({
      imagearray: newimagearray
    });
  },

  // goToMain: function(e) {
  //   wx.navigateTo({
  //     url: '../main/main.wxml' // 这里的路径需要你根据实际情况来填写
  //   })
  // },

  // goToMain: function(e) {
  //   wx.navigateBack({
  //     delta: 1 // 这里的数值表示要返回的页面数量，需要你根据实际情况来填写
  //   })
  // },

  /**
   * 用户点击右上角分享
   */
  
})