const wxBird = require('../../lib/wxbird.js');

Page({
    data: {
        modalHidden: true,
        score: '0',
        kaishi:true
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        // print(this.data.modalHidden)
    },
    onReady: function () {
        // 页面渲染完成
    },
    onTouchStart: function (e) {
        const {identifier, x, y } = e.touches[0];
        this.movements = [[x, y], [0, 0]];
    },
    onTouchMove: function (e) {
        const {identifier, x, y } = e.touches[0];
        this.movements[1] = [x, y];
    },
    onTouchEnd: function () {
        var x = this.movements[1][0] - this.movements[0][0];
        var y = this.movements[1][1] - this.movements[0][1];
        if ((Math.abs(x) < Math.abs(y)) && y < 0) {
            this.bird.keyup();
        }
    },
    startGame: function () {
        const bird = this.bird
        this.setData({ score: 0, modalHidden: true });
        this.setData({
          kaishi:false
      });
        bird.startGame();
    },
    onShow: function () {
        const bird = this.bird = new wxBird(
            {
                ctx: wx.createContext(),
                id: 'birdId',
                height: 620,
                width: 375,
            }
        );
        bird.on('over', packet => {
            this.setData({ score: packet.score, modalHidden: false });
        });
        bird.startGame();
    },
    handleGameOver: function(event) {
      const app = getApp();

      // 增加 ds 的值
      app.globalData.ds += 100;
      //增加天数ts
      app.globalData.ts=app.globalData.ts+1;
      // 跳转到主页面
      wx.redirectTo({
        url: '../main/main.wxml'  // 这里的路径应根据实际的文件结构来填写
      });
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    }
})