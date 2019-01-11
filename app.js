App({
  onLaunch() {
    // 小程序启动之后 触发
    const self = this
    wx.getSystemInfo({
      success(res) {
        //platform devtools ios android
        self.globalData.systemInfo = res
      },
      fail() {

      }
    })
  },
  globalData: {

  }
})