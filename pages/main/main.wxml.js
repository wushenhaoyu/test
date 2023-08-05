// pages/main/main.wxml.js
const app = getApp();
Page({
  data: {
    value1: 10,
    weiwan:false,
    value2: 100,
    value3: 1000,
    showModal: false,
    rollflag:false,
    // showModal: true,
    buttonArray: [

      {name: '志愿者招募', url: '../class2/class2.wxml',disabled: false,num:1},

      {name: '快递', url: '../class4/class4.wxml',disabled: false,num:2},
      {name: '客服电话', url: '../class5/class5.wxml',disabled: false,num:3},
      // {name: '传单发送', url: '../class6/class6.wxml',disabled: false,num:6},
      {name: '传单发送', url: '../class7/class7.wxml',disabled: false,num:4},
      {name: '传单发送', url: '../class8/class8.wxml',disabled: false,num:5},
      // {name: '传单发送', url: '../class9/class9.wxml',disabled: false,num:9}, 
      {name: '休息日', url: '../bird/bird',disabled: false,num:6},
      {name: '刷单', url: '../class12/class12.wxml',disabled: false,num:7},


    ],

    displayButtons: [],
    displayimage:[],
    showend:false,
    ts:1,
    ds:2000
  },
  onLoad: function() {
    // 页面加载时，从全局变量中获取 ts 的值并保存到 data 中
    this.setData({
      ts: app.globalData.ts,
      ds: app.globalData.ds
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
        while (app.globalData.a[array[index].num] == false) {
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
  
  onShareAppMessage() {

  }
})