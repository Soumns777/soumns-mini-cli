export default {
  data() {
    return {
      shareParams: {
        path: '/pages/home/index?phone=18855023059',
        title: '邀请您成为新用户'
      }
    }
  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内分享按钮
    }

    return {
      title: this.shareParams.title, // 标题
      path: this.shareParams.path, // 分享路径
      imageUrl: 'https://cdn.uviewui.com/uview/swiper/1.jpg', // 分享图
      desc: '安河桥北啊'
    }
  },
  onShareTimeline() {
    return {
      title: this.shareParams.title, // 标题
      path: '/pages/home/index', // 分享路径
      query: 'phone=18260041998',
      imageUrl: 'https://cdn.uviewui.com/uview/swiper/1.jpg' // 分享图
    }
  }
}
