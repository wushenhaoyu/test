// pages/class1/class1.wxml.js





Page({

  /**
   * 页面的初始数据
   */
  global : {
    timer : null ,
    isRand : false,

  },
  data: {
    dialogueText: "昨天接到了一笔发放传单的兼职工作，你正在寻找着一个合适的场地。",
    dialogues: [
     "",
     "为了更高的报酬，你接受了一笔校外的发送业务。在路上，一群人聚集在一起，好像在进行着什么活动，你决定在此发放传单。",
     "有一位阳光清爽的男同学向我走来，穿着一件简洁的蓝色短袖衬衫，衬托出他匀称健康的身材。",
     "有一个身着一袭简约黑色连衣裙的女同学向你缓步走来,她的脸上微微挂着俏皮的笑意，明亮的眼睛和灵动的气质使得她些许迷人。",
     "一位身着白色蕾丝雪纺连衣裙的女同学朝你走来，她的衣裙轻盈地随风飘动，仿佛无数小花儿在舞蹈。",
     "你向前走，继续寻找",
     ""
     ],
    dialogueIndex: 0,
    playerChoice: null,
    showOverlay1: false,
    showOverlay2: false,
    showOverlay3: false,
    playOverlay1:false,
    showimage:false,
    cs:2,
    remember:0,
    showGameOverModal1:false,
    showGameOverModal2:false,
    image1:'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/1.png',
    image2:'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/1j.png',
    image3:'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/1j.png',
    
    // 骰子数据

    dice : ['first','second','third','fourth','fifth','sixth'],
    buttonType : 'primary',
    buttonValue : '摇一摇',
    isShow:'hidden',
    num1 : 0,
    num2 : 0,
    num3 : 0,
    total: 0,
    
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

        if (this.data.dialogueIndex === 2)
        {
            this.setData({showOverlay1: true});
        } 
        else if (this.data.dialogueIndex === 3) 
        {
            this.setData({showOverlay1: true});
        } 
        else if (this.data.dialogueIndex === 4) {
            this.setData({showOverlay1: true});
        }
        else if (this.data.dialogueIndex === 5){
          console.log(this.data.remember);
          this.setData({dialogueIndex: this.data.remember});
        }
        
    }
},
// && this.data.playerChoice === 2
button1Tap: function() {
    console.log("玩家选择了按钮1");
    this.setData({
        showOverlay1: false,
        showOverlay2:false,
        playerChoice: 1,
        playOverlay1:true,
    });
    // this.nextDialogue();
},

button2Tap: function() {
  const app = getApp();
    console.log("玩家选择了按钮2");
    console.log('2');
    if(this.data.cs==0)
    {
      if(app.globalData.zp==0)
      {
        console.log('去9')
        wx.redirectTo({
          url: '../class9/class9.wxml'  // 这里的路径应根据实际的文件结构来填写
        });
      }
      else
      {
        this.setData({
          showGameOverModal1:true,
          playOverlay1:false,
        });
      }  
    }
    this.setData({
        remember:this.data.dialogueIndex,
        showOverlay1: false,
        cs:this.data.cs-1,
        playerChoice: 2,
        dialogueIndex: 5-1
    });
    this.nextDialogue();
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
  },

  checkds: function() {
    const app = getApp();
    console.log("1111111111111");
    if(this.data.total>8)
    {
      app.globalData.ds+=30
    }
    if(this.data.cs==0)
    {
      this.setData({
        showGameOverModal1:true,
        playOverlay1:false,
    });
    }
    this.setData({
        isShow:'hidden',
        cs:this.data.cs-1,
        playOverlay1:false,
    });
    this.nextDialogue();
    console.log(app.globalData.ds)
},

  shakeClick: function () { 
    let me = this;
    this.global.isRand = !this.global.isRand;
    if ( this.global.isRand ) {
      this.global.timer = setInterval(function (){
        let num1 = Math.floor(Math.random()*6);
        let num2 = Math.floor(Math.random()*6);
        let num3 = Math.floor(Math.random()*6);
        me.setData({num1 : num1});
        me.setData({num2 : num2});
        me.setData({num3 : num3});
        me.setData({total : num1+num2+num3+3});
      },50);
      // 设置3秒后自动停止摇骰子
    setTimeout(function() {
      clearInterval(me.global.timer);
      me.global.isRand = false;
      me.setData({
        buttonType : 'primary',
        buttonValue : '摇一摇',
        isShow: 'show',

      });
    }, 500);
    } else {
       clearInterval(this.global.timer);
    }

    this.setData({
      dice: this.data.dice, 
      buttonType : (this.global.isRand) ? 'default' : 'primary',
      buttonValue : (this.global.isRand) ? '停止' : '摇一摇',
      isShow: (this.global.isRand) ? 'hidden':'show',
    });

  },

})



