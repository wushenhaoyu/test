// pages/event/youdiyuan/youdiyuan.js
Page({
next:function(e){
	
	
this.setData({
	storyindex: this.data.storyindex + 1
})
if(this.data.storyindex == 7)
{
	this.setData({isShowfirst:true})
}
},

  data: {
	  storyindex:0,
	story: [
		{
			"from": 1,
			"text": "今天你在取快递的时候，怎么也没有找到你的包裹",
			"name": "",
			"img": ""
		},
		{
			"from": 0,
			"text": "您好，我找不到我的包裹了，麻烦您帮一下忙",
			"name": "你：",
			"img": ""
		},
		{
			"from": 1,
			"text": "没问题，同学",
			"name": "",
			"img": "快递员"
		},
		{
			"from": 1,
			"text": "过了一会，快递员给你送来了包裹",
			"name": "",
			"img": ""
		},
		{
			"from": 1,
			"text": "你接过他手中的包裹，发现多了一份，你赶忙叫住邮递员",
			"name": "",
			"img": ""
		},
		{
			"from": 0,
			"text": "师傅，我怎么多了一份包裹啊？",
			"name": "你：",
			"img": ""
		},
		{
			"from": 1,
			"text": "没问题啊，这些确实是你的包裹啊",
			"name": "邮递员：",
			"img": ""
		},
		{
			"from": 1,
			"text": "面对这价值不菲的包裹，你决定：",
			"name": "",
			"img": ""
		},
		{
			"from": 1,
			"text": "你在细细观察了这个包裹，发现：这并非你的包裹，但包裹内是价值100点的物品。",
			"name": "",
			"img":""
		},
		{
			"from": 1,
			"text": "隔天你收到了一个电话,他说他是商城客服",
			"name": "",
			"img":""
		},
		{
			"from": 1,
			"text": "你前几天是否获得了一个包裹?",
			"name": "客服",
			"img":""
		},
		{
			"from": 1,
			"text": "我们这边显示是你窃取了别人的快递,由于被这个包裹的原主人投诉，你这边的账户被冻结了，你将不能够再使用你的账户了",
			"name": "客服：",
			"img":""
		},
		{
			"from": 1,
			"text": "这边是处理相关案件的李警官的联系方式:guangfangfanzhap，希望你可以和他解释清楚。",
			"name": "客服：",
			"img":""
		},
		{
			"from": 0,
			"text": "你是李警官吗？我是那个接受包裹的人",
			"name": "你：",
			"img":""
		},
		{
			"from": 1,
			"text": "您好，我是网络警察。我们在监控系统中注意到您的账号存在违法行为且需要停止操作并冻结资金流向。",
			"name": "电话：",
			"img":""
		},
		{
			"from": 1,
			"text": "别担心，只要你配合，向我们先缴纳200的保证金，然后通过了实名认证后，就可以解除冻结的状况。",
			"name": "电话：",
			"img":""
		},
		{
			"from": 1,
			"text": "我们在查明情况，将那个失踪的包裹归还我们的报案人后，会将这笔保证金返回给你的。",
			"name": "电话：",
			"img":""
		}
	]
  },
})