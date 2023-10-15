// components/phone1/phone1.js
const app = getApp();
Component({
  /**
   * 组件的生命周期函数
   */
  properties: {
    tran: {
      type: String, 
      value: "200%"  
    }
  },
  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached: function () {
      this.getCurrentTime();
      this.setData({
        eventdata:app.globalData.eventdata
      })
      console.log(this.data.tran)

    },
  },
  methods: {
    getCurrentTime: function () {
      const now = new Date();
      const daysOfWeekInChinese = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      const dayOfWeekInChinese = daysOfWeekInChinese[now.getDay()];
      this.setData({
        hour: now.getHours(),
        minute: now.getMinutes(),
        day: now.getDate(),
        month: now.getMonth() + 1,
        xingqi: dayOfWeekInChinese
      })
    },
    phoneEvent: function (e) {
      const url = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: url,
      })
    },
  },
});
