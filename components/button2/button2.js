Component({

  /**
   * 页面的初始数据
   */
  properties: {
    buttonText: {
      type: String,
      value: 'Click Me', // 默认按钮文本
    },
  },

  methods: {
    onButtonClick() {
      // 按钮点击事件处理
      this.triggerEvent('buttonclick');
    },
  },


})