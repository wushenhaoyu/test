// pages/class1/class1.wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogueText:"刚进入大学，为了购买一款新手机，决定在校园里寻求贷款。他向同学小刚打听，了解到一个叫张哥的校园贷款中介。",
    dialogues: [
     "",
     "明：小刚，我想买个新手机，但是钱不够，你能不能帮我介绍一下校园贷款的中介？",
     "刚：哦，我知道一个叫张哥的，他那边挺靠谱的，我之前也找他借过。",
     "相信",
     "明和张哥约好在食堂见面，张哥给小明介绍了贷款的流程和利率。",
     "哥：小明，我们这边的贷款利率很低，你只需要提供一下你的学生证和身份证，就可以马上放贷。",
     "明（对张哥）：那好，我现在就把证件给你，我要借 5000 元，分期付款。",
     "不相信",
     "小明：我觉得有点不靠谱吧？找他的人多吗，他信誉怎么样",
     "刚：信誉还行，好多同学都找过他，他朋友圈也经常更新相关信息，感觉挺靠谱的",
     "决定找张哥",
     "明和张哥约好在食堂见面，张哥给小明介绍了贷款的流程和利率。",
     "哥（对小明）：小明，我们这边的贷款利率很低，你只需要提供一下你的学生证和身份证，就可以马上放贷。",
     "明（对张哥）：那好，我现在就把证件给你，我要借 5000 元，分期付款。",
     "决定不找张哥询问家长或导员的意见",
     "明拿到了贷款，来到了手机店购买手机。在店内，你遇到了一个假冒手机店员工的骗子。",
     "骗子：同学，你是来买手机的吧？我们这边现在有个活动，如果你现在购买手机，可以享受八折优惠，但是需要现金支付。",
     "明：可是我刚办理了校园贷款，钱还没到账呢。",
     "骗子：没事，我可的钱提前套现，你只需要给我一点手续费就可以。",
     "觉得划算打算试试",
     "明觉得划算，便答应了骗子的提议。然而，骗子拿到钱后便消失无踪。而之前给他放贷的张哥也在之后威胁他并抬高了利率，并找人威胁他。",
     "张哥：同学，你这已经到了还钱的日子了，你还打不打算还啊",
     "明：张哥，我被骗了啊，交了钱已经拿不回了了，那个骗子跑路了",
     "张哥：那不管我的事啊，那你被骗了你欠我的钱也得还啊，算了看你是学生，宽限你几天，但是利率要涨啊",
     "明发现被骗后，向辅导员王老师求助。",
     "明在王老师的帮助下报了警，但骗子已经逃之夭夭。张哥的贷款任需偿还小明决定努力学习，通过兼职等方式慢慢还清贷款。他深刻地认识到了校园贷的风险，也明白了要警惕各种骗局。",
     "不觉得划算，打算走人",
     "明：你这儿办的人多吗，别到时候你跑路了",
     "骗子：同学你放心，你们同学很多都来我这儿买手机的，我们在这儿已经很多年了，信誉杠杠的。",
     "明：看周围环境简陋，骗子一直催着交钱，觉得不靠谱，走了",
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