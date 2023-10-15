// components/info/info.js
const app = getApp()
Component({
  data:{
    isShowInfo:false,
    info:"info"

  },
  properties: {
    dataFromParent: {
      type: Object, // 数据类型可以根据实际情况设置
      value: {name:"",state:false,next:{},npc:""}    // 默认值
    }
  },
  data:{
    playerdata:app.globalData.playerdata
  },
  methods:{
    info:function (e) {
      var that = this;
      this.setData({
        isShowInfo:true
        
      }),
      setTimeout(function() {
        that.setData({
          info:"info1"
        })
        }, 500)

    },
    
    hideinfo:function (e) {
      var that = this;
      this.setData({
        info:"info"
      })
      setTimeout(function() {
        that.setData({
          isShowInfo:false
        })
        }, 500)
    }

  }

})