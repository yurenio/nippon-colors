const app = getApp()

Page({
  onLoad: function (options) {
    this.setData({
      pageId: options.id,
      pageColor: options.color,
      pageCname: options.cname,
      pageName: options.name
    })
    wx.setNavigationBarTitle({
      title: this.data.pageCname + ' ' + this.data.pageName
    })
  },
  copyColor: function (event) {
    wx.showActionSheet({
      itemList: ['Copy Hexcolor', 'Copy RGB'],
      success: function (res) {
        var copyData;
        if (res.tapIndex === 0) {
          copyData = event.target.dataset.hexcolor
        } else if (res.tapIndex === 1) {
          copyData = event.target.dataset.rgb
        }
        wx.setClipboardData({
          data: copyData,
          success: function (res) {
            wx.getClipboardData({
              success: function (res) {
                if (!res.cancel) {
                  wx.showToast({
                    title: "复制成功",
                    icon: 'success',
                    duration: 1000
                  });
                }
              }
            })
          }
        })
      }
    })
  },
  onShareAppMessage: function (event) {
    return {
      title: this.data.pageCname + ' - 日本传统色',
      path: '/pages/color/color'
        + '?id=' + this.data.pageId
        + '&color=' + this.data.pageColor
        + '&cname=' + this.data.pageCname
        + '&name=' + this.data.pageName,
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