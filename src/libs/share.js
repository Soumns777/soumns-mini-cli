export default {
  data() {
    return {
      shareParams: {
        path: '/pages/home/index?user_id=100',
        title: '邀请您成为新用户'
      }
    }
  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内分享按钮
    }

    console.log(res.target, '💙💛 转发至其他人')
    return {
      title: this.shareParams.title, // 标题
      path: this.shareParams.path, // 分享路径
      imageUrl: 'https://cdn.uviewui.com/uview/swiper/1.jpg', // 分享图
      desc: '安河桥北啊'
    }
  },
  onShareTimeline() {
    console.log('💙💛 转发至朋友圈')
    return {
      title: this.shareParams.title, // 标题
      path: this.shareParams.path, // 分享路径
      imageUrl: 'https://cdn.uviewui.com/uview/swiper/1.jpg' // 分享图
    }
  }
}
