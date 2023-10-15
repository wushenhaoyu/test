Page({
  data: {
    imgUrls: [
        'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/chouj1 (1).png',
        'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/chouj1 (2).png',
        'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/chouj1 (3).png',
        'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/chouj1 (4).png',
        'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/chouj1 (5).png',
        'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/chouj1 (6).png',
        'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/chouj1 (7).png',
        'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/chouj1 (8).png',
        'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/chouj1 (9).png',
        'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/chouj1 (10).png',
        'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/chouj1 (11).png',
        'cloud://zsypdd-3gjdwtt6b1a8a83a.7a73-zsypdd-3gjdwtt6b1a8a83a-1318405662/chouj1 (12).png',
    ],
    currentIndex: 0,
    intervalId: null
  },

  onLoad: function() {
    this.startLoop();
  },

  startLoop: function() {
    const that = this;
    const len = this.data.imgUrls.length;
    this.data.intervalId = setInterval(() => {
      that.setData({
        currentIndex: (that.data.currentIndex + 1) % len
      });
    }, 500); // 每隔1秒切换一次，可以根据需要调整
  },

  stopLoop: function() {
    if (this.data.intervalId) {
      clearInterval(this.data.intervalId);
      this.data.intervalId = null;
    }
  }
});
