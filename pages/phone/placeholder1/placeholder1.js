// pages/phone/placeholder1/placeholder1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   * 
   */
  sendYourChoice:function (e) {

	const newMessage = this.data.messages[this.data.showMessageIndex + this.data.yourChoiceIndex];
	this.data.showMessageList.push(newMessage);
	this.setData({
	  showMessageList: this.data.showMessageList,
	  showMessageIndex: this.data.showMessageIndex + this.data.addNumber,
	  placeholder:"",
	  scrollIntoView: "bottom",
	  isShowYourChoice:false
  });
  if (this.data.showMessageIndex == 33)
  {
	  wx.navigateTo({
		url: '../../er048/er048',
	  })
  }
	  
  },
  pushYourChoice:function (e) {
	const index = e.currentTarget.dataset.index;
	this.setData({yourChoiceIndex:index})
	if (this.data.showMessageIndex + index == 52)
	{
		this.setData({isShowEnd:1})
		return
	}
	if (this.data.showMessageIndex + index == 53)
	{
		
		this.setData({isShowEnd:2})
		return
	}
	const newMessage = this.data.messages[this.data.showMessageIndex + index];
		this.setData({
			placeholder:newMessage.content,
		  isShowYourChoice:false,
		  scrollIntoView: "bottom"
	  });
   },
  addYourChoice:function(message){
	  this.setData({yourChoice:[]})
	const newMessage = this.data.messages[this.data.showMessageIndex]
	const nextNewMessage =  this.data.messages[this.data.showMessageIndex + 1]
	if (nextNewMessage.from == 0)
	{
		this.data.yourChoice.push(newMessage);
		this.data.yourChoice.push(nextNewMessage);
		this.setData({
			yourChoice: this.data.yourChoice,
			addNumber:2,
			scrollIntoView: "bottom"
		})

	}
	else{
		this.data.yourChoice.push(newMessage);
		this.setData({yourChoice:this.data.yourChoice,
			addNumber:1
		})
		console.log(this.data.yourChoice)
	}

  },
  addMessage:function(e){
	  const newMessage = this.data.messages[this.data.showMessageIndex]
	  
	  if ( newMessage.from == 0)
	  {
		  this.setData({isShowYourChoice:true})
		  this.addYourChoice(newMessage)

		return;
	  }
	  this.data.showMessageList.push(newMessage);
	  this.setData({
		showMessageList: this.data.showMessageList,
		showMessageIndex: this.data.showMessageIndex + 1,
		scrollIntoView: "bottom"
	});
	
	
  },
  back: function(e){
	wx.navigateBack({
	  delta: 1,
	})
}
  ,
  data: {
	  isShowEnd:0,
	  yourChoiceIndex:0,
	  placeholder:"",
	  addNumber:1,
	isShowYourChoice:false,
	yourContent:"",
	showMessageList:[],
	showMessageIndex:0,
	yourChoice:[],
	messages:[ {
        "state": 0,
        "content": "轻轻松松日入500+的工作",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "你们有兴趣吗？",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "真的吗",
        "touxiang": "/pages/class12/img/tou3.png",
        "from":1,"name": "星见"
      },
      {
        "state": 0,
        "content": "是什么工作啊？",
        "touxiang": "/pages/class12/img/tou3.png",
        "from":1,"name": "星见"
      },
      //4
      {
        "state": 0,
        "content": "有",
        "touxiang": "  /pages/class12/img/tou1.png",
        "from":0,"name": "你"
      },
       {
         "state": 0,
        "content": "再看看",
         "touxiang": " /pages/class12/img/tou1.png",
         "from":0,"name": "你"
       },
      {
        "state": 0,
        "content": "你只需一张自己的银行卡",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "就可以参加噢",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "我们需要干什么呢？",
        "touxiang": "/pages/class12/img/tou3.png",
        "from":1,"name": "星见"
      },
      {
        "state": 0,
        "content": "就是帮助一些企业给员工发工资",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "我们该怎么做呢？",
        "touxiang": "/pages/class12/img/tou3.png",
        "from":1,"name": "天下三琴"
      },
      {
        "state": 0,
        "content": "你们要先下载这个app",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "来进行相关的接单和送单操作",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "如果是第一次接触，不懂的话",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "可以先下个app稍微了解一下",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      //
      {
        "state": 0,
        "content": "我完成注册了。",
        "touxiang": "/pages/class12/img/tou3.png",
        "from":1,"name": "星见"
      },
      {
        "state": 0,
        "content": "我也完成了",
        "touxiang": "/pages/class12/img/tou4.png",
        "from":1,"name": "天下三琴"
      },
      {
        "state": 0,
        "content": "你要先点击左下角那个地方。",
        "touxiang": "/pages/class12/img/tou3.png",
        "from":1,"name": "星见"
      },
      {
        "state": 0,
        "content": "谢谢你啊",
        "touxiang": "/pages/class12/img/tou4.png",
        "from":1,"name": "天下三琴"
      },
      {
        "state": 0,
        "content": "让我先看看这个app",
        "touxiang": "  /pages/class12/img/tou1.png",
        "from":0,"name": "你"
      },

      {
        "state": 0,
        "content": "我给你们的账号先充了点钱",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "你们可以先去接一下单试试看噢",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      
      {
        "state": 0,
        "content": "真的赚了10块啊",
        "touxiang": "/pages/class12/img/tou3.png",
        "from":1,"name": "星见"
      },
      {
        "state": 0,
        "content": "还真是，我也接到了一个",
        "touxiang": "/pages/class12/img/tou4.png",
        "from":1,"name": "天下三琴"
      },
      {
        "state": 0,
        "content": "我也接单看看",
        "touxiang": "  /pages/class12/img/tou1.png",
        "from":0,"name": "你"
      },

      {
        "state": 0,
        "content": "为什么我的钱转不出来啊",
        "touxiang": "/pages/class12/img/tou3.png",
        "from":1,"name": "星见"
      },
      {
        "state": 0,
        "content": "我好像是凑足了100就转出来了",
        "touxiang": "/pages/class12/img/tou4.png",
        "from":1,"name": "天下三琴"
      },
      {
        "state": 0,
        "content": "接下来能赚到多少钱",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "就看各位的本事了",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "日入500轻轻松松",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "我又接到了一个50的单子",
        "touxiang": "/pages/class12/img/tou3.png",
        "from":1,"name": "星见"
      },
      {
        "state": 0,
        "content": "你接的好快",
        "touxiang": "/pages/class12/img/tou3.png",
        "from":1,"name": "天下三琴"
      },
      {
        "state": 0,
        "content": "我也去接单",
        "touxiang": "  /pages/class12/img/tou1.png",
        "from":0,"name": "你"
      },

      {
        "state": 0,
        "content": "我发现那种好几百的单子",
        "touxiang": "/pages/class12/img/tou4.png",
        "from":1,"name": "天下三琴"
      },
      {
        "state": 0,
        "content": "可以拿到更多的佣金",
        "touxiang": "/pages/class12/img/tou4.png",
        "from":1,"name": "天下三琴"
      },
      {
        "state": 0,
        "content": "我抢到一笔大单直接赚了100",
        "touxiang": "/pages/class12/img/tou4.png",
        "from":1,"name": "天下三琴"
      },
      {
        "state": 0,
        "content": "我也想充点钱去接大单",
        "touxiang": "/pages/class12/img/tou3.png",
        "from":1,"name": "星见"
      },
      {
        "state": 0,
        "content": "我也赚了一笔",
        "touxiang": "  /pages/class12/img/tou1.png",
        "from":0,"name": "你"
      },

      {
        "state": 0,
        "content": "晚上10点了",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "大家别忘了从app里提钱哦",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "哦？我差点忘记了，谢谢提醒",
        "touxiang": "/pages/class12/img/tou3.png",
        "from":1,"name": "星见"
      },
      {
        "state": 0,
        "content": "好",
        "touxiang": "  /pages/class12/img/tou1.png",
        "from":0,"name": "你"
      },
      {
        "state": 0,
        "content": "今天会发放一些大型企业的单子",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "这些单子需要很大的数额",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "余额不够的兄弟们就不要接哦",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      
      {
        "state": 0,
        "content": "今天充值的钱被吞?",
        "touxiang": "  /pages/class12/img/tou1.png",
        "from":0,"name": "你"
      },
      {
        "state": 0,
        "content": "为什么我欠费了",
        "touxiang": "/pages/class12/img/tou3.png",
        "from":1,"name": "星见"
      },
      {
        "state": 0,
        "content": "我们为了保障大公司的资金周转",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "会垫钱来接单的",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "要是还想接单需要把余额补齐",
        "touxiang": "/pages/class12/img/tou2.png",
        "from":1,"name": "王经理"
      },
      {
        "state": 0,
        "content": "真的可以了",
        "touxiang": "/pages/class12/img/tou3.png",
        "from":1,"name": "星见"
      },
      {
        "state": 0,
        "content": "那我要继续抢单了",
        "touxiang": "/pages/class12/img/tou3.png",
        "from":1,"name": "星见"
	  },
	  {
        "state": 0,
        "content": "补齐了",
        "touxiang": "  /pages/class12/img/tou1.png",
        "from":0,"name": "你"
	  },
	  {
        "state": 0,
		"content": "不补了",
        "touxiang": "  /pages/class12/img/tou1.png",
        "from":0,"name": "你"
      },


    ]
  },
})