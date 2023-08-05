// pages/class1/class1.wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogueText: "sima航空公司：我们正在招募志愿者，需要招募一些航空摄影爱好者来搜集航班信息。",
    dialogues: [
     "",
     "sima航空公司：你如果成为我们的会员后也可以加入我们的数据库，实时查看全球各地的飞机信息。",
     "玩家：你好。我是一名大学生，正在学习航空专业，并且热爱摄影和无线电。",
     "玩家:我有自己的一些小设备，平时会搜集一些民航客机的基本信息。",
     "sima航空公司：很不错呀！那么关于活动时间安排和设备支持相关的事项，留下您的联系方式吧。",
     "sima航空公司：公司审批后，会给予你一套我们公司最新研制的设备，来帮助你搜集相关的数据。",
     ""
     ],
    dialogueIndex: 0,
    playerChoice: null,
    showOverlay1: false,
    showOverlay2: false,
    showimage:false,
    showGameOverModal1:false,
    showGameOverModal2:false,
    image1:'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/学校/飞机p.jpg',
},

// onLoad: function() {
//     this.setData({
//         dialogueText: this.data.dialogues[this.data.dialogueIndex]
//     });
// },

nextDialogue: function() {
    let nextIndex = this.data.dialogueIndex + 1;
    // console.log(this.data.dialogueIndex)
    // console.log(this.data.dialogueText)
    if (nextIndex < this.data.dialogues.length) {
        this.setData({
            dialogueText: this.data.dialogues[nextIndex],
            dialogueIndex: nextIndex
        });

        if (this.data.dialogueIndex === 1)
        {
            this.setData({showOverlay1: true});
        } 
        else if (this.data.dialogueIndex === 5) 
        {
            this.setData({showOverlay2: true});
        } 
    }
},
// && this.data.playerChoice === 2
button1Tap: function() {
    console.log("玩家选择了按钮1");
    this.setData({
        showOverlay1: false,
        showOverlay3: false,
        playerChoice: 1
    });
    this.nextDialogue();
},

button2Tap: function() {
    console.log("玩家选择了按钮2");
    this.setData({
        showOverlay2: false,
        showimage:true,
        showGameOverModal1:true
    });
    // this.nextDialogue();
},

button3Tap: function() {
    console.log("玩家选择了按钮3");
    this.setData({
        showOverlay3: false,
        showimage:true,
        showGameOverModal2:true
    });
    console.log(this.data.showGameOverModal)
    //this.nextDialogue();
},
button4Tap: function() {
  console.log("玩家选择了按钮4");
  this.setData({
      showOverlay2: false,
      showimage:true,
      showGameOverModal1:true
  });
  //this.nextDialogue();
},

  handleGameOver: function(event) {
    const app = getApp();

    // 增加 ds 的值
    app.globalData.ds += 1;
    //增加天数ts
    app.globalData.ts=app.globalData.ts+1;
    // 跳转到主页面
    wx.redirectTo({
      url: '../main/main.wxml'  // 这里的路径应根据实际的文件结构来填写
    });
  }
})