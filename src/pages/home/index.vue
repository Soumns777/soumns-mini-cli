<template>
  <view class="page_box">
    <image class="container-top-bg" src="@/static/uploads/bg_home.png" mode="widthFix" lazy-load="false" binderror="" bindload=""> </image>

    <!-- 自定义顶部左侧胶囊 -->
    <view class="my_tab_title" :style="{ paddingTop: statusBarHeight }">
      <view class="menu_btn" :style="{ position: 'fixed', top: menuTop, left: menuRight, width: menuWidth, height: menuHeight }">
        <u-icon name="arrow-left" class="arrowleft" color="#fff" size="20"></u-icon>
      </view>
    </view>

    <!-- 上部内容 -->
    <!-- <view class="container-top-content" selectable="false" space="false" decode="false">
      <text class="text1" selectable="false" space="false" decode="false"> 测试数据的 </text>
      <text class="text2" selectable="false" space="false" decode="false"> 测试数据的1测试数据的1测试数据的1测试数据的1测试数据的1测试数据的1测试数据的1测试数据的1测试数据的1测试数据的1 </text>
    </view> -->

    <!-- 图片 -->
    <!-- <image class="container-card" src="@/static/uploads/home_card.png" mode="widthFix" lazy-load="false" binderror="" bindload=""> </image> -->

    <!-- <button type="primary" :style="{ marginTop: '100px', minWidth: '300px', minHeight: '50px', borderRadius: '30px' }" open-type="share">分享到微信</button> -->

    <!-- <u-button type="warning" :custom-style="btnStyle" shape="circle" open-type="share">立即分享</u-button> -->
  </view>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      bgColor: '#ff6100', // 434761
      statusBarHeight: uni.getStorageSync('menuInfo').statusBarHeight, // 状态栏的高度（可以设置为顶部导航条的padding-top）
      menuWidth: uni.getStorageSync('menuInfo').menuWidth,
      menuHeight: uni.getStorageSync('menuInfo').menuHeight,
      menuBorderRadius: uni.getStorageSync('menuInfo').menuBorderRadius,
      menuRight: uni.getStorageSync('menuInfo').menuRight,
      menuTop: uni.getStorageSync('menuInfo').menuTop,
      contentTop: uni.getStorageSync('menuInfo').contentTop
    }
  },
  onLoad(options) {
    console.log('💙💛 user_id:' + options.user_id)
  },
  // onShareAppMessage() {
  //   console.log('💙💛 用户分享当前页面')
  // },
  // onShareTimeline() {
  //   console.log('💙💛 转发到朋友圈')
  // },

  methods: {}
}
</script>

<style lang="scss" scoped>
.page_box {
  position: fixed;

  .my_tab_title {
    width: 100%;
    // height: 64px; //这个是固定的44px（所有小程序顶部高度都是 = 44px + 手机系统状态栏高度）
    line-height: 44px;
    position: fixed;
    top: 0;
    font-size: 32rpx;
    color: #fff;
    font-weight: 500;

    .menu_btn {
      overflow: hidden;
      display: flex;
      align-items: center;
      position: fixed; // 行内式写了固定定位--目的是去掉下划页面一起滚动问题
      .arrowleft {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-160%, -50%) !important;
        -webkit-transform: translate(-160%, -50%) !important;
      }
      .text_box {
        width: 1rpx;
        height: 20px;
        background-color: #ddd;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) !important;
        -webkit-transform: translate(-50%, -50%) !important;
      }
      .home {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(60%, -50%) !important;
        -webkit-transform: translate(60%, -50%) !important;
      }
    }
  }

  .container-top-bg {
    width: 100%;
    height: 658rpx;
    position: fixed;
    top: 0;
    left: 0;
  }

  .container-top-content {
    position: absolute;
    top: 179rpx;
    left: 30rpx;
    width: 750rpx;
    height: 60rpx;
    display: flex;
    flex-direction: column;

    .text1 {
      font-size: 40rpx;
      color: #fff;
      margin-bottom: 24rpx;
    }

    .text2 {
      opacity: 0.8;
      font-size: 26rpx;
      color: #ffffff;
      letter-spacing: 0;
      text-align: justify;
      line-height: 39rpx;
      margin-right: 30px;
    }
  }

  .container-card {
    position: absolute;
    top: 388rpx;
    left: 30rpx;
    width: 690rpx;
    height: 422rpx;
  }
}
</style>
