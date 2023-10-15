

// components/character/character.js
Component({
  properties: {
    dataFromParent: {
      type: Object, // 数据类型可以根据实际情况设置
      value: {title:"",content:"",url:"",src0:"",src1:""}    // 默认值
    }
  },
  data:{
    text:"text1"
  },
methods:{
  toggleCharacter: function () {
    const that = this;
    if (that.data.characterClass == 'chara2')
    {
      if (that.data.isShow){
      that.setData({
        isShow:false
      })
    }
    else{
      that.setData({
        isShow:true
      })
    }

    }
    else{

    // 先应用 .chara1 类，隐藏元素
    that.setData({
      characterClass: 'chara1',
      state:0

    });

    // 等待一段时间后再应用 .chara2 类，显示元素
    setTimeout(function () {
      that.setData({
        characterClass: 'chara2',
        state:1,
        text:"text"
      });
    }, 1000); // 这里的1500表示等待1.5秒后再执行后续操作
  }
},
duihua:function (e) {
  var that = this;
  wx.redirectTo({
    url: that.properties.dataFromParent.url,
  })
},
leave:function (e) {
  var that = this;
  that.setData({
    characterClass:'chara4',
    isShow:false,
    text:"text1"
    
  })
  setTimeout(function () {
    that.setData({
      characterClass: '',
      state:0,
      
    });
  }, 1000);

}
}
  
})