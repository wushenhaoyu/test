// pages/class1/class1.wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogueText: "骗子：我是商城客服",
    dialogues: [
     "",
     "骗子：你前几天是否获得了一个包裹?",
     "骗子：我们这边显示是你窃取了别人的快递,由于被这个包裹的原主人投诉，你这边的账户被冻结了，你将不能够再使用你的账户了",
     "骗子：这边是处理相关案件的李警官的联系方式：guangfangfanzhap，希望你可以和他解释清楚。",
     "玩家：你是李警官吗？我是那个接受包裹的人",
     "骗子：您好，我是网络警察。我们在监控系统中注意到您的账号存在违法行为且需要停止操作并冻结资金流向。",
     "骗子：别担心，只要你配合，向我们先缴纳200的保证金，然后通过了实名认证后，就可以解除冻结的状况。",
    "骗子：我们在查明情况，将那个失踪的包裹归还我们的报案人后，会将这笔保证金返回给你的。",
     ""
     ],
    dialogueIndex: 0,
    playerChoice: null,
    showOverlay1: false,
    showOverlay2: false,
    showOverlay3: false,
    showOverlay4: false,
    showOverlay5: false,
    showimage:false,
    showGameOverModal1:false,
    showGameOverModal2:false,
    image1:'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/1.png',
    image2:'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/1j.png'
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
        else if (this.data.dialogueIndex == 5) 
        {
            this.setData({showOverlay2: true});
        } 
        else if (this.data.dialogueIndex === 6) {
            this.setData({showOverlay4: true});
        }
        else if (this.data.dialogueIndex === 7) {
          this.setData({showOverlay5: true});
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
    console.log('2');
    this.setData({
        showOverlay1: false,
        playerChoice: 2,
        // dialogueIndex: 1
    });
    this.nextDialogue();
},

button3Tap: function() {
    console.log("玩家选择了按钮3");
    this.setData({
        showOverlay2: false,
        // showimage:true,
        // showGameOverModal1:true
        // dialogueIndex: 1
    });
    this.nextDialogue();
},

button4Tap: function() {
    console.log("玩家选择了按钮4,last");
    this.setData({
        showOverlay2: false,
        // showimage:true,
        // showGameOverModal2:true
    });
    console.log(this.data.showGameOverModal)
    this.nextDialogue();
},
button5Tap: function() {
  console.log("玩家选择了按钮5");
  this.setData({
      showOverlay3: false,
      showimage:true,
      showGameOverModal1:true
  });
  //this.nextDialogue();
},
button6Tap: function() {
  console.log("玩家选择了按钮6,last");
  this.setData({
      showOverlay3: false,
      showimage:true,
      showGameOverModal2:true
  });
  console.log(this.data.showGameOverModal)
  //this.nextDialogue();
},
button7Tap: function() {
  console.log("玩家选择了按钮7,last");
  this.setData({
      showOverlay4: false,
      // showimage:true,
      // showGameOverModal2:true
  });
  // console.log(this.data.showGameOverModal)
  this.nextDialogue();
},
button9Tap: function() {
  console.log("玩家选择了按钮7,last");
  const app = getApp();

  // 增加 ds 的值
  app.globalData.ds -= 200;

  this.setData({
      showOverlay5: false,
      // showimage:true,
      showGameOverModal1:true
  });
  // console.log(this.data.showGameOverModal)
  // this.nextDialogue();
},
button10Tap: function() {
  console.log("玩家选择了按钮7,last");
  this.setData({
      showOverlay5: false,
      // showimage:true,
      showGameOverModal2:true
  });
  // console.log(this.data.showGameOverModal)
  // this.nextDialogue();
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