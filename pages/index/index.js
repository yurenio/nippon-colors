const app = getApp()

Page({
  data: {
    colorArray: app.globalData.colorArray
  },
  onClick: function (event) {
    wx.navigateTo({
      url: '../color/color'
        + '?id=' + event.target.dataset.id
        + '&color=' + event.target.dataset.color
        + '&cname=' + event.target.dataset.cname
        + '&name=' + event.target.dataset.name
    })
  },
  onShareAppMessage: function (event) {
    return {
      title: '日本传统色',
      path: '/pages/index/index',
      success: function (res) {
        wx.showToast({
          title: "转发成功",
          icon: 'success',
          duration: 1000
        });
      }
    }
  }
})
