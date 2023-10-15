Page({
  data: {
    imageUrls: [
      'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/s1 (1).png',
      'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/s1 (2).png',
      'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/s1 (3).png',
      'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/s1 (4).png',
      'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/s1 (5).png',
      'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/s1 (6).png',
    ],
    currentIndex: 0
  },

  handleImageClick: function() {
    // 当点击图片时，更新currentIndex到下一个
    if (this.data.currentIndex === this.data.imageUrls.length - 1) {
      // 如果当前是最后一张图片，导航到主页面
      wx.redirectTo({
        url: '/pages/main/main.wxml'
      });
      return;
    }
    let nextIndex = (this.data.currentIndex + 1) % this.data.imageUrls.length;
    this.setData({
      currentIndex: nextIndex
    });
  }
});
