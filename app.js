App({
  onLaunch() {
    // 小程序启动之后 触发
    const self = this
    wx.getSystemInfo({
      success(res) {
        //platform devtools ios android
        console.log(res)
        self.globalData.systemInfo = res
      },
      fail() {

      }
    })
    wx.getNetworkType({
      success(res) {
        self.globalData.networkType = res.networkType
      },
      fail() {

      }
    })
  },
  globalData: {
    systemInfo: {},
    networkType: 'default'
  }
})