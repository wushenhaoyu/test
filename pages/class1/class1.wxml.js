// pages/class1/class1.wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogueText: "骗子：你是在寻找兼职工作的大学生吗?",
    dialogues: [
     "",
     "我：是的", 
     "骗子：我这边有一个日赚千元的项目，你想要参加吗", 
     "我：好的", 
     "骗子：你知道goip吗", 
     "骗子：GoIP是一种计算机设备，也叫做模拟话机网关或者VoLTE转换器。它可以将模拟电话信号转换成数字化的IP网络数据，实现模拟电话和IP电话之间的互通。GoIP经常被用于跨国贸易、公共服务行业以及远程办公场景中进行语音通讯和信息传输等操作。", 
     "我：那我该做些什么呢？", 
     "骗子：我们是学校通讯实验室的一个小组，现在想要进行相关的通讯研究，我们将会提供给你一些设备，希望你能够将它搭建在你的宿舍中，我们将会进行一些参数的调制，希望你可以配合我们的工作。",
     "我：这不是违法的吗？",
     "骗子：我们最近升级了我们的相关系统，我们的设备经过重新编码汇编，并且配合仿真验证系统，完美避开了防御机制的检测范围，所以无需担忧任何影响。警方技术迭代比较慢，暂且还侦察不到，再过几个星期，这套系统可能就又要更新了，你现在加入的话就可以日入千元。",
     ""
     ],
    dialogueIndex: 0,
    playerChoice: null,
    showOverlay1: 1,
    showOverlay2: false,
    showOverlay3: false,
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

        if (this.data.dialogueIndex === 4)
        {
            this.setData({showOverlay1: true});
        } 
        else if (this.data.dialogueIndex === 7) 
        {
            this.setData({showOverlay2: true});
        } 
        else if (this.data.dialogueIndex === 9) {
            this.setData({showOverlay3: true});
        }
    }
},
// && this.data.playerChoice === 2
button1Tap: function() {
    // console.log("玩家选择了按钮1");
    // this.setData({
    //     showOverlay1: false,
    //     showOverlay3: false,
    //     playerChoice: 1
    // });
    // this.nextDialogue();
},

button2Tap: function() {
    console.log("玩家选择了按钮2");
    console.log('2');
    this.setData({
        showOverlay1: false,
        playerChoice: 2,
        dialogueIndex: 8-1
    });
    this.nextDialogue();
},

button3Tap: function() {
    console.log("玩家选择了按钮3");
    this.setData({
        showOverlay2: false,
        showimage:true,
        showGameOverModal1:true
    });
    // this.nextDialogue();
},

button4Tap: function() {
    console.log("玩家选择了按钮4,last");
    this.setData({
        showOverlay3: false,
        showimage:true,
        showGameOverModal2:true
    });
    console.log(this.data.showGameOverModal)
    //this.nextDialogue();
},
button5Tap: function() {
  console.log("玩家选择了按钮5");
  this.setData({
      showOverlay2: false,
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