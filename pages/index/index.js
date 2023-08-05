Page({
  data: {
    inputText: '',
    chatList: []
  },
  bindInput: function(e) {
    this.setData({
      inputText: e.detail.value
    });
  },
  sendMsg: function() {
    let chatList = this.data.chatList;
    chatList.push(this.data.inputText);
    this.setData({
      chatList: chatList,
      inputText: ''
    });
  }
})
