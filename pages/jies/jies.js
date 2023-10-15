// mainPage.js
const app = getApp();

Page({
    data: {
        b: [],
        jies: []
    },

    onLoad: function() {
        this.setData({
            b: app.globalData.b,
            jies: app.globalData.jies
        });
    },

    chongl:function() {
      wx.redirectTo({
        url: '../main copy/main.wxml'  // 这里的路径应根据实际的文件结构来填写
      });
    }
});
