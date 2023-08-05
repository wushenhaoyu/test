// pages/class1/class1.wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogueText: "那个接受了你发出传单的人突然向你开口说道：……",
    dialogues: [
     "",
     " 骗子：你好啊！西安正在评选新一年度最佳旅游城市，希望你望您能够支持我们并为它投上一票。",
     "骗子：只要在手机上搜索最佳旅游城市评选app就行，你可以为西安和你喜欢的另外一座城市投票。",
     "玩家：是这样子投票吗",
     "骗子：对的，然后你在投票结束后，可以来进行我们文旅局的抽奖",
     "玩家：我这是中了一个价值3000的西安联名手机吗？",
     "骗子：哦?你的运气不错唉，这几天来我还是第一次看到有人中这个大奖，",
     "别人都是赠送一点明信片、钥匙扣什么的，你居然中了我们的大礼包。",
     "骗子：我带你去我们服务站，就可以领奖了",
     "骗子：局长说希望我们能和你拍一张照片来留念，并填写相关信息",
     "你要登记一下你的相关信息吗？",
     "骗子：这个就是你中的手机，不过需要你再缴纳50的全国电子保卡，然后你就可以把他带走了。",
     "你要缴纳50的全国电子保修卡吗？",
     "骗子：我们发现你之前有不良的欠费记录，需要你保定这个专属套餐，可能够重新认定你的信誉值。",
     "你要购买专属套餐增加信誉值吗？",
     "骗子：局长说因为我们的经费有限，希望你能够在这里预充500的话费来，支持我们的工作。",
     "你要充值话费吗？",
     "你自己端详着到手的手机，第二天发现，这仅仅是价值300的普通手机……",
     "你认为其中存在种种问题，正气冲冲地离开，旁听到了身后一对情侣讨论着：为西安人气排行榜投票获得了一个新手机。你又有些犹豫，是否是自己想错了……"
     ],
    dialogueIndex: 0,
    playerChoice: null,
    showOverlay1: false,
    showOverlay2: false,
    showOverlay3: false,
    showOverla4: false,
    showOverlay5: false,
    showOverlay6: false,
    showimage:false,
    showGameOverModal1:false,
    showGameOverModal2:false,
    image1:'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/1.png',
    image2:'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/1j.png',
    showren1:false,
    showren2:false,
    showren3:false
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
        else if (this.data.dialogueIndex === 4) 
        {
            this.setData({showOverlay2: true});
        } 
        else if (this.data.dialogueIndex === 10) 
        {
            this.setData({showOverlay3: true});
        } 
        else if (this.data.dialogueIndex === 12) {
            this.setData({showOverlay4: true});
        }
        else if (this.data.dialogueIndex === 14) {
          this.setData({showOverlay5: true});
      }
      else if (this.data.dialogueIndex === 16) {
        this.setData({showOverlay6: true});
    }
    else if (this.data.dialogueIndex === 17) {
      this.setData({showGameOverModal2:true});
  }
    }
},
// && this.data.playerChoice === 2
button1Tap: function() {
    console.log("玩家选择了按钮1");
    this.setData({
        showOverlay1: false,
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
    });
    this.nextDialogue();
},

button3Tap: function() {
    console.log("玩家选择了按钮3");
    this.setData({
        showOverlay2: false,
        showimage:true,
    });
     this.nextDialogue();
},

button4Tap: function() {
    console.log("玩家选择了按钮4,last");
    this.setData({
        showOverlay2: false,
        showimage:true,
    });
    this.nextDialogue();
},

button5Tap: function() {
  console.log("玩家选择了按钮5");
  this.setData({
      showOverlay3: false,
      showimage:true,
  });
  this.nextDialogue();
},
button6Tap: function() {
  console.log("玩家选择了按钮6,last");
  this.setData({
      showOverlay3: false,
      showimage:true,
      showGameOverModal2:true
  });
  //this.nextDialogue();
},

button7Tap: function() {
  const app = getApp();
  app.globalData.ds-=50
  app.globalData.zp=1
  console.log("玩家选择了按钮6,last");
  this.setData({
      showOverlay4: false,
      showimage:true,
  });
  this.nextDialogue();
},
button8Tap: function() {
  console.log("玩家选择了按钮6,last");
  this.setData({
      showOverlay4: false,
      showimage:true,
      showGameOverModal2:true
  });
  //this.nextDialogue();
},

button9Tap: function() {
  const app = getApp();
  app.globalData.ds-=1000
  console.log("玩家选择了按钮6,last");
  this.setData({
      showOverlay5: false,
      showimage:true,
  });
  //this.nextDialogue();
},
button10Tap: function() {

  console.log("玩家选择了按钮6,last");
  this.setData({
      showOverlay5: false,
      showimage:true,
      showGameOverModal2:true
  });
  //this.nextDialogue();
},

button11Tap: function() {
  const app = getApp();
  app.globalData.ds-=500
  console.log("玩家选择了按钮6,last");
  this.setData({
      showOverlay6: false,
      showimage:true,
  });
  this.nextDialogue();
},
button12Tap: function() {
  console.log("玩家选择了按钮6,last");
  this.setData({
      showOverlay6: false,
      showimage:true,
      showGameOverModal2:true
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