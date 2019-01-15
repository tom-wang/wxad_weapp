// pages/index/index.js
// 生命周期https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://wxsnsdythumb.wxs.qq.com/109/20204/snsvideodownload?m=5f69f827360ea0628d600ab6a08c8da5&filekey=30340201010420301e02016d0402534804105f69f827360ea0628d600ab6a08c8da50203019716040d00000004627466730000000131&hy=SH&storeid=32303138313232353034343135313030303963336332313336666664393337303561333230613030303030303664&bizid=1023',
      'http://wxsnsdythumb.wxs.qq.com/109/20204/snsvideodownload?m=cf7b14d71264e223cd8179192fee2dd0&filekey=30340201010420301e02016d040253480410cf7b14d71264e223cd8179192fee2dd0020301c40a040d00000004627466730000000131&hy=SH&storeid=32303138313232353034343134353030303064326537313336666664393337303561333230613030303030303664&bizid=1023',
      'http://wxsnsdythumb.wxs.qq.com/109/20204/snsvideodownload?m=d0961888c227596153029193aa684320&filekey=30340201010420301e02016d040253480410d0961888c227596153029193aa6843200203019932040d00000004627466730000000131&hy=SH&storeid=32303138313232353034343230323030306263366339313336666664393337303561333230613030303030303664&bizid=1023',
      'http://wxsnsdythumb.wxs.qq.com/109/20204/snsvideodownload?m=f6ffb9274e8e7a767c63a24ec323eea2&filekey=30340201010420301e02016d040253480410f6ffb9274e8e7a767c63a24ec323eea2020302351a040d00000004627466730000000131&hy=SH&storeid=32303138313232353034343133373030303334336637313336666664393330333561333230613030303030303664&bizid=1023',
      'http://wxsnsdythumb.wxs.qq.com/109/20204/snsvideodownload?m=ff50cd1e05dc9ab6cbcfd14f6e237c43&filekey=30340201010420301e02016d040253480410ff50cd1e05dc9ab6cbcfd14f6e237c430203048192040d00000004627466730000000131&hy=SH&storeid=32303138313232353034343135373030306535393636313336666664393330333561333230613030303030303664&bizid=1023'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 500,
    platform: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  loadCount: 0,
  loadQuery: {},
  onLoad: function (options) {
    this.loadCount++
    this.loadQuery = options
    console.log(options)
    const app = getApp()
    this.setData({
      platform: app.globalData.systemInfo.platform
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 冷启动时会执行，热启动时不执行
   */
  onReady: function () {
    console.log('onReady')
    //冷启动，数据上报
    this.reportPV(false)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  showCount: 0,
  onShow: function () {
    console.log('onShow')
    this.showCount++
    if (this.showCount > this.loadCount) {
      //热启动，数据上报
      this.reportPV(true)
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  reportPV: function(isHot) {
    //
    const type = isHot ? 1 : 2
    const app = getApp()
    const os = app.globalData.systemInfo.platform
    const versions = app.globalData.systemInfo.version.replace(/\./g, '')
    const networkType = app.globalData.networkType
    const url = `https://mp.weixin.qq.com/tp/datacenter/report?cmd=report&os=${os}&versions=${versions}&uin=&aid=&tid=&traceid=${Date.now()}&engine=&source=${networkType}&key=&id=900001&type=${type}&page_type=10000&_=${Date.now()}`
    wx.request({
      url
    })
  }
})