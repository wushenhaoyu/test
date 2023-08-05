// pages/class1/class1.wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogueText: "今天早上，快递员向你派送了一个沉甸甸的包裹。",
    dialogues: [
     "",
     "你在细细观察了这个包裹，发现：这并非你的包裹，但包裹内是价值100点的物品。", 
     "你决定：",
     ""
     ],
    dialogueIndex: 0,
    playerChoice: null,
    showOverlay1: false,
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
        if (this.data.dialogueIndex === 1)
        {
          this.setData({
            showimage:true
        });
        } 
        if (this.data.dialogueIndex === 2)
        {
            this.setData({showOverlay1: true});
        } 
    }
},
// && this.data.playerChoice === 2
button1Tap: function() {
    // const app = getApp();
    console.log("玩家选择了按钮1");
    const app = getApp();

    // 增加 ds 的值
    app.globalData.ds += 100;
    app.globalData.sj4=1;
    this.setData({
        showOverlay1: false,
        playerChoice: 1,
        showGameOverModal1:true
    });
    //this.nextDialogue();
},

button2Tap: function() {
    // const app = getApp();
    console.log("玩家选择了按钮2");
    // app.globalData.sj1=2;
    this.setData({
        showOverlay1: false,
        playerChoice: 2,
        showGameOverModal2:true
    });
    //this.nextDialogue();
},

  handleGameOver: function(event) {
    const app = getApp();

    // 增加 ds 的值
    // app.globalData.ds += 1;
    //增加天数ts
    app.globalData.ts=app.globalData.ts+1;
    // 跳转到主页面
    wx.redirectTo({
      url: '../main/main.wxml'  // 这里的路径应根据实际的文件结构来填写
    });
  }
})