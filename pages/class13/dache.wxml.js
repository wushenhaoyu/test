// pages/class1/class1.wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogueText: "渐进九月，秋风潇潇，你走在校园的道路上，看着周围满是与父母结伴前来报到的同学们，他们步态中的轻盈，谈笑间的自信，让你也不由得思缕万千……",
    dialogues: [
     "",
     "你看到前方一个带着张印有学生会牌子的学长手舞足蹈地和新生一家人交谈着什么。",
     "你与他们经过时，擦肩听到了他们的对话。",
     "学长：我是校学生会的志愿者，是来帮助新生报到的",
     "学长：同学，我看你们都抱着大大小小的行李被褥，你们是在找自己的宿舍吗？ ",
     "新生：是呀，我们刚刚报道，说寝室是在空天苑，学长你知道在哪吗？",
     "学长：空天苑吗，那是我们学校最新的宿舍呢，附近不但有24营业的便利店，而且那边的餐厅也是我们学校最物美价廉的",
     "新生：真的吗？学长也住在空天苑吗",
     "学长：我入学的早，不住在那边",
     "学长：我来帮你们拿一点东西吧，我可以带你们去",
     "新生：谢谢学长啊",
     "他们边说着边向前走去，奇怪的是好像很少有人去空天苑会走这个方向",
     "但这正好和你顺路，你便跟在了他们后边",
     "学长：那个宿舍里面的床位是有两种的，一种是标准的长2米的床，还有一种是加长的2.2米的床",
     "学长：你选床位的时候要注意啊，别到时候和你的被单什么的不匹配",
     "新生：谢谢学长啊，这样的。",
     "学长：你有买遮光帘吗，我建议也搞一个，有时候舍友要发奋的话，可以挡挡他们的台灯",
     "新生：好的好的，谢谢学长",
     "学长：那个空天苑是新寝室，还挺远的",
     "学长：要不我们去坐通勤车吧？",
     "新生：好的好的，麻烦学长了",
     "学长：那个通勤车是五块钱一个人，会直接送你们到寝室门口，我就带你们上车吧",
     "学长：然后我去校门口接别的同学了",
     "新生：好的好的，麻烦学长了",
     "学长看了看他的手机",
     "学长：我看了下后台数据，人还会挺多的，买票还不好买，我可以帮你们买了，到时候直接带你们上车",
     "新生：好的好的，麻烦学长了",
     "你是否决定一同去坐坐这个从没听说过的代步车？",
     "上了车才发现:",
     "这不是学校组织的，免费帮助同学们代步车吗？学长只是带他们来到了这里上车",
     "后来听说有一个假冒的学长，带别人去坐学校组织的，免费帮助同学们代步的车，却会骗取一笔带路费，让人唏嘘"
     ],
    dialogueIndex: 0,
    playerChoice: null,
    showOverlay1: false,
    showOverlay2: false,
    showOverlay3: false,
    showOverlay4: false,
    showOverlay5: false,
    showimage:false,
    show1:false,
    show2:false,
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
            this.setData({show1: true,show2:false});
        } 
        if (this.data.dialogueIndex === 5)
        {
            this.setData({show1: true,show2:false});
        } 
        if (this.data.dialogueIndex === 6)
        {
            this.setData({show1: false,show2:true});
        } 
        if (this.data.dialogueIndex === 8)
        {
            this.setData({show1: false,show2:true});
        } 
        if (this.data.dialogueIndex === 11)
        {
            this.setData({show1: false,show2:true});
        } 
        if (this.data.dialogueIndex === 16)
        {
            this.setData({show1: false,show2:true});
        } 
        if (this.data.dialogueIndex === 18)
        {
            this.setData({show1: false,show2:true});
        } 
        if (this.data.dialogueIndex === 21)
        {
            this.setData({show1: false,show2:true});
        } 
        if (this.data.dialogueIndex === 24)
        {
            this.setData({show1: false,show2:true});
        } 
        if (this.data.dialogueIndex === 27)
        {
            this.setData({show1: false,show2:true});
        } 
        if (this.data.dialogueIndex === 10)
        {
            this.setData({show1: true,show2:false});
        } 
        if (this.data.dialogueIndex === 15)
        {
            this.setData({show1: true,show2:false});
        } 
        if (this.data.dialogueIndex === 17)
        {
            this.setData({show1: true,show2:false});
        } 
        if (this.data.dialogueIndex === 20)
        {
            this.setData({show1: true,show2:false});
        } 
        if (this.data.dialogueIndex === 23)
        {
            this.setData({show1: true,show2:false});
        } 
        if (this.data.dialogueIndex === 26)
        {
            this.setData({show1: true,show2:false});
        } 
        if (this.data.dialogueIndex === 27)
        {
            this.setData({showOverlay1: true});
        } 

    }
},
// && this.data.playerChoice === 2
button1Tap: function() {
    console.log("玩家选择了按钮1");
    this.setData({
      showGameOverModal1:true
    });
    this.nextDialogue();
},

button2Tap: function() {
    console.log("玩家选择了按钮2");
    console.log('2');
    this.setData({
      showGameOverModal2:true
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