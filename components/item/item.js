// components/item/item.js
const app = getApp();
Component({
  data:{
    PhoneControl:"200%",
    yidong:"yidong1"
  },
  properties: {
    dataFromParent: {
      type: Object, 
      value: {name:"",state:false,next:{},npc:""}    
    }
  },
  lifetimes: {
    
    attached: function () {
      const backgroundAudioManager = app.globalData.backgroundAudioManager;
      wx.getStorage({
        key: 'musicFilePath',
        success: function (res) {
          var musicFilePath = res.data;
          backgroundAudioManager.title = '首页';
          backgroundAudioManager.src = musicFilePath;
          backgroundAudioManager.play();
        }
      })
    }
  },
  methods:{
    phone:function(e) {
      var that = this;
      console.log("phone")
      that.setData({isShowBag : false})
      if (!that.data.isShowPhone){
      that.setData({
        isShowPhone:true,
      })
      setTimeout(function() {
        that.setData({
          PhoneControl:"0%"
        })
        }, 200)
      }
      else{
        that.setData({
          PhoneControl:"200%"
        })
        setTimeout(function() {
          that.setData({
            isShowPhone:false
          })
          }, 1200)
        
      }
  
      
    },
    bag:function(e) {
      this.setData({isShowPhone : false})
      if (!this.data.isShowBag){
      this.setData({isShowBag:true})
      }
      else{
        this.setData({
          isShowBag :false
        })
      }
    },
  shuoming:function(e){
    var that = this;
      this.setData({
        animation:"shuoming"
      })
      setTimeout(function() {
      that.setData({
        animation: ''
      })
      toggleModal()
      }, 500)
    },
    yidong:function (e) {
      var that = this
      that.setData({isShowPhone:false})
      if (!that.data.isShowYidong){
        that.setData({isShowYidong:true})
        setTimeout(function() {
          that.setData({
            yidong:'yidong2'
          })
          }, 100)
        }
        else{
          that.setData({
            yidong:'yidong1',
          })
          setTimeout(function() {
            that.setData({
              isShowYidong :false
            })
            }, 1000)
        }
      
    },
    turn:function(e){
      var url = e.currentTarget.dataset.url;
      console.log(url)
      
      wx.redirectTo({
        url: url,
      })
    }
  }

})